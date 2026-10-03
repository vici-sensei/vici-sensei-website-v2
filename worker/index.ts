// Cloudflare Pages Functions middleware: swaps the homepage prices for the
// visitor's country (RO / eurozone / rest of the world). HTMLRewriter is a
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

const PRICES: Record<'RO' | 'EU' | 'US', {
  async: string; asyncWeek: string;
  standard: string; standardWeek: string;
  vip: string; vipWeek: string;
}> = {
  RO: {
    async: '199 RON',
    asyncWeek: 'Equivalent to 49.75 RON/week',
    standard: '499 RON',
    standardWeek: 'Equivalent to 124.75 RON/week',
    vip: '1399 RON',
    vipWeek: 'Equivalent to 349.75 RON/week',
  },
  EU: {
    async: '€49',
    asyncWeek: 'Equivalent to €12.25/week',
    standard: '€129',
    standardWeek: 'Equivalent to €32.25/week',
    vip: '€349',
    vipWeek: 'Equivalent to €87.25/week',
  },
  US: {
    async: '$49',
    asyncWeek: 'Equivalent to $12.25/week',
    standard: '$129',
    standardWeek: 'Equivalent to $32.25/week',
    vip: '$349',
    vipWeek: 'Equivalent to $87.25/week',
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
    .on('#price-vip, #price-vip-tab', setText(prices.vip))
    .on('#price-vip-week', setText(prices.vipWeek))
    .transform(response);

  // The HTML now depends on the visitor's country, so it must not be
  // revalidated against the static asset's ETag or shared between countries.
  const headers = new Headers(rewritten.headers);
  headers.delete('etag');
  headers.set('cache-control', 'private, no-cache');
  return new Response(rewritten.body, { status: rewritten.status, headers });
};

export default {
  fetch(request: Request, env: Env): Promise<Response> {
    return handleHomepage(request, env);
  },
};
