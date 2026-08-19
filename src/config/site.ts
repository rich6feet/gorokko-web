export const site = {
  name: 'Rokko',
  displayName: 'GO ROKKO',
  origin: 'https://gorokko.com',
  defaultTitle: 'Rokko — The AI operations teammate for home services',
  defaultDescription:
    'Rokko helps home-service teams check live operational context, coordinate the next move, and keep people in control of consequential actions.',
  demoPath: '/demo/',
  bookingUrl: null,
  legalEntity: null,
  analyticsId: null,
  statusUrl: null,
  publicSecurityContact: null,
  pricingApproved: false,
  proofApproved: false,
  legalApproved: false,
} as const;

export const navigation = [
  { label: 'Product', href: '/product/' },
  { label: 'Use cases', href: '/use-cases/' },
  { label: 'Security', href: '/security/' },
  { label: 'Resources', href: '/resources/' },
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
] as const;
