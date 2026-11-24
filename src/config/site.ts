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
  legalEntity: null,
  analyticsId: null,
  // Paid-traffic funnel (/go/). The discovery page embeds this GHL calendar directly.
  discoveryPath: '/go/discovery/',
  bookedPath: '/go/booked/',
  discoveryCalendarUrl: 'https://links.serviceosllc.com/widget/booking/6goTW1YljKlb3R1fjnNd',
  // Ad tags stay off until Richard supplies the real ids (fail closed: null ships no tag code).
  // googleTagId: 'AW-…' (Google Ads) or 'G-…' (GA4). metaPixelId: numeric Meta pixel id.
  googleTagId: null as string | null,
  metaPixelId: null as string | null,
  statusUrl: 'https://status.crewvana.io/status/marcus',
  publicSecurityContact: null,
  pricingApproved: false,
  proofApproved: false,
  legalApproved: false,
} as const;

// Legal links for the /go/ funnel pages. The GHL booking and demo forms already link to these
// ServiceOS LLC policies, so the funnel shows the same ones. DECISION (Richard + counsel): add
// GoRokko to those policies' brand list before ads run. Set to null to fall back to the site's
// own (gated) /privacy/, /terms/ and /sms-terms/ pages.
export const funnelLegalLinks: { label: string; href: string }[] | null = [
  { label: 'Privacy policy', href: 'https://serviceosllc.com/privacy' },
  { label: 'Terms of service', href: 'https://serviceosllc.com/terms' },
  { label: 'SMS terms', href: 'https://serviceosllc.com/sms-terms' },
];

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
