// Cloudflare Pages Functions middleware: swaps the homepage prices for the
// visitor's country (RO / eurozone / UK / rest of the world). HTMLRewriter is a
// Cloudflare runtime global, so it needs no import.

declare const HTMLRewriter: any;

type Context = {
  request: Request & { cf?: { country?: string } };
  next: () => Promise<Response>;
};

const EUROZONE_COUNTRIES = new Set([
  'AT', 'BE', 'HR', 'CY', 'EE', 'FI', 'FR', 'DE', 'GR',
  'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PT', 'SK', 'SI', 'ES',
]);

// The UK plus the Crown Dependencies, which all use the pound sterling.
const GBP_COUNTRIES = new Set(['GB', 'GG', 'IM', 'JE']);

const PRICES: Record<'RO' | 'EU' | 'GB' | 'US', {
  async: string; asyncWeek: string;
  standard: string; standardWeek: string;
}> = {
  RO: {
    async: '250 RON',
    asyncWeek: 'Equivalent to 62.50 RON/week',
    standard: '499 RON',
    standardWeek: 'Equivalent to 124.75 RON/week',
  },
  EU: {
    async: '€65',
    asyncWeek: 'Equivalent to €16.25/week',
    standard: '€129',
    standardWeek: 'Equivalent to €32.25/week',
  },
  GB: {
    async: '£59',
    asyncWeek: 'Equivalent to £14.75/week',
    standard: '£119',
    standardWeek: 'Equivalent to £29.75/week',
  },
  US: {
    async: '$65',
    asyncWeek: 'Equivalent to $16.25/week',
    standard: '$129',
    standardWeek: 'Equivalent to $32.25/week',
  },
};

const handleHomepage = async (request: Request & { cf?: { country?: string } }, env: Env) => {
  const response = await env.ASSETS.fetch(request);
  if (!response.ok) return response;

  const country = request.cf?.country;

  let prices = PRICES.US;
  if (country === 'RO') {
    prices = PRICES.RO;
  } else if (country && EUROZONE_COUNTRIES.has(country)) {
    prices = PRICES.EU;
  } else if (country && GBP_COUNTRIES.has(country)) {
    prices = PRICES.GB;
  }

  const setText = (text: string) => ({
    element(el: { setInnerContent: (content: string) => void }) {
      el.setInnerContent(text);
    },
  });

  const rewritten = new HTMLRewriter()
    .on('#price-async, #price-async-tab', setText(prices.async))
    .on('#price-async-week', setText(prices.asyncWeek))
    .on('#price-standard, #price-standard-tab', setText(prices.standard))
    .on('#price-standard-week', setText(prices.standardWeek))
    .transform(response);

  // The HTML now depends on the visitor's country, so it must not be
  // revalidated against the static asset's ETag or shared between countries.
  const headers = new Headers(rewritten.headers);
  headers.delete('etag');
  headers.set('cache-control', 'private, no-cache');
  return new Response(rewritten.body, { status: rewritten.status, headers });
};

// Static assets answer every video request with the whole file (200), but browsers can only seek
// in a video when the server returns byte ranges (206). Cloudflare's cache does answer range
// requests, so keep each video there and let cache.match() serve just the requested bytes.
const handleVideo = async (request: Request, env: Env) => {
  if (request.method !== 'GET') return env.ASSETS.fetch(request);

  const asset = await env.ASSETS.fetch(new Request(request.url));
  if (!asset.ok) return asset;

  // Keyed on the ETag, so a re-uploaded video is never served from a stale copy.
  const cache = (caches as any).default as Cache;
  const key = `${request.url.split('?')[0]}?etag=${encodeURIComponent(asset.headers.get('etag') ?? '')}`;
  const cacheRequest = new Request(key, { headers: request.headers });

  let cached: Response | undefined;
  try {
    cached = await cache.match(cacheRequest);
    if (cached) {
      await asset.body?.cancel();
    } else {
      const headers = new Headers(asset.headers);
      headers.set('cache-control', 'public, max-age=31536000, immutable');
      await cache.put(key, new Response(asset.body, { status: 200, headers }));
      cached = await cache.match(cacheRequest);
    }
  } catch {
    cached = undefined;
  }
  // Without the cache, fall back to the whole file (playable, just not seekable).
  if (!cached) return env.ASSETS.fetch(request);

  const headers = new Headers(cached.headers);
  headers.set('accept-ranges', 'bytes');
  headers.set('cache-control', 'public, max-age=0, must-revalidate');
  return new Response(cached.body, { status: cached.status, headers });
};

export default {
  fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname.startsWith('/videos/')) {
      return pathname.endsWith('.mp4') ? handleVideo(request, env) : env.ASSETS.fetch(request);
    }
    return handleHomepage(request, env);
  },
};
