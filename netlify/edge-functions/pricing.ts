import type { Context } from '@netlify/edge-functions';
import { HTMLRewriter } from 'https://ghuc.cc/worker-tools/html-rewriter/index.ts';

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

export default async (request: Request, context: Context) => {
  const response = await context.next();
  const country = context.geo?.country?.code;

  let prices = PRICES.US;
  if (country === 'RO') {
    prices = PRICES.RO;
  } else if (country && EUROZONE_COUNTRIES.has(country)) {
    prices = PRICES.EU;
  }

  return new HTMLRewriter()
    .on('#price-async, #price-async-tab', {
      element(el) {
        el.setInnerContent(prices.async);
      },
    })
    .on('#price-async-week', {
      element(el) {
        el.setInnerContent(prices.asyncWeek);
      },
    })
    .on('#price-standard, #price-standard-tab', {
      element(el) {
        el.setInnerContent(prices.standard);
      },
    })
    .on('#price-standard-week', {
      element(el) {
        el.setInnerContent(prices.standardWeek);
      },
    })
    .on('#price-vip, #price-vip-tab', {
      element(el) {
        el.setInnerContent(prices.vip);
      },
    })
    .on('#price-vip-week', {
      element(el) {
        el.setInnerContent(prices.vipWeek);
      },
    })
    .transform(response);
};

export const config = { path: '/' };
