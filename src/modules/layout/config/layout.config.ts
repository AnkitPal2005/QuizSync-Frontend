import { ROUTES } from '@/constants';

export const MAIN_NAV_LINKS = [
  { label: 'Features', href: ROUTES.FEATURES },
  { label: 'Pricing', href: ROUTES.PRICING },
  { label: 'About', href: ROUTES.ABOUT },
] as const;

export const FOOTER_LINK_GROUPS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: ROUTES.FEATURES },
      { label: 'Pricing', href: ROUTES.PRICING },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/documentation' },
      { label: 'Blog', href: '/blog' },
      { label: 'Question Library', href: '/question-library' },
      { label: 'Hiring Guides', href: '/hiring-guides' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: ROUTES.ABOUT },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Partners', href: '/partners' },
    ],
  },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Security', href: '/security' },
] as const;
