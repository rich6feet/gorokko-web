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
  statusUrl: 'https://status.crewvana.io/status/marcus',
  publicSecurityContact: null,
  pricingApproved: false,
  proofApproved: false,
  legalApproved: false,
} as const;

export const navigation = [
  { label: 'How it works', href: '/product/' },
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
  '/resources/',
  '/about/',
  '/demo/',
  '/book/',
  '/status/',
] as const;
