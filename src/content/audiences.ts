// Who Rokko is for. One entry per audience. Each audience owns a page under /for/<slug>/.
// Keep claims fail-closed: no integrations, prices, or results that are not approved in config/site.ts.

export type Audience = {
  slug: string;
  number: string;
  title: string;
  short: string;
  href: string;
  cta: string;
};

export const audiences: Audience[] = [
  {
    slug: 'contractors',
    number: '01',
    title: 'Contractors and home-service teams',
    short: 'HVAC, plumbing, electrical, roofing, remodeling. Keep the office and the crew on the same page.',
    href: '/use-cases/',
    cta: 'See the ways contractors use Rokko',
  },
  {
    slug: 'home-inspectors',
    number: '02',
    title: 'Home inspectors',
    short: 'Buyer’s inspections and insurance inspections. Book it, get it signed and paid, deliver the report, and remind the client before the form ages out.',
    href: '/for/home-inspectors/',
    cta: 'See Rokko for home inspectors',
  },
];
