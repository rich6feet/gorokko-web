export const site = {
  name: 'Rokko',
  displayName: 'GO ROKKO',
  origin: 'https://gorokko.com',
  defaultTitle: 'Rokko — Keep jobs moving and your crew on the same page',
  defaultDescription:
    'Rokko helps home-service teams catch work that needs attention, review the details, and approve the next step.',
  demoPath: '/demo/',
  bookingUrl: 'https://links.serviceosllc.com/widget/form/xFqXRCYsiCDGj5hQo6S7',
  calendarPath: '/book/',
  calendarUrl: 'https://links.serviceosllc.com/widget/booking/6goTW1YljKlb3R1fjnNd',
  // /start/ billing setup (2026-11-11): HighLevel form id in the ServiceOS sub-account. null = page shows the "link on its way" panel.
  billingFormId: 'Z186amPwJHU2IjgI7MP5' as string | null,   // "Rokko Billing Setup", Service OS sub-account, built 2026-11-11
  billingEntity: 'ServiceOS LLC',
  // /start/ usage terms (Richard 2026-11-11): $100 included every month; AI rates = Anthropic list price x 1.2,
  // per million tokens, checked against platform.claude.com/docs/en/about-claude/pricing on 2026-11-11. Update both together.
  billingIncludedUsd: 100,
  billingRatesAsOf: 'November 2026',
  aiRates: [
    { model: 'Claude Opus 5.5', input: '4.80', output: '24.00', cacheRead: '0.24', cacheWrite: '6.00 / 9.60' },
    { model: 'Claude Sonnet 5.5', input: '2.40', output: '12.00', cacheRead: '0.12', cacheWrite: '3.00 / 4.80' },
  ],
  legalEntity: null,
  analyticsId: null,
  statusUrl: 'https://status.crewvana.io/status/marcus',
  publicSecurityContact: null,
  pricingApproved: false,
  proofApproved: false,
  legalApproved: false,
} as const;

export const navigation = [
  { label: 'How it works', href: '/product/' },
  { label: 'Who it’s for', href: '/for/' },
  { label: 'Ways to use it', href: '/use-cases/' },
  { label: 'Your data', href: '/security/' },
  { label: 'Guides', href: '/resources/' },
] as const;

export const indexedRoutes = [
  '/',
  '/product/',
  '/use-cases/',
  '/use-cases/owner-operations/',
  '/use-cases/ai-receptionist/',
  '/use-cases/speed-to-lead/',
  '/use-cases/no-show-rescheduling/',
  '/use-cases/sales-to-operations/',
  '/for/',
  '/for/home-inspectors/',
  '/resources/',
  '/about/',
  '/demo/',
  '/book/',
  '/status/',
] as const;
