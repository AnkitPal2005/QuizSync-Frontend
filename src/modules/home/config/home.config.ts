import type { FeatureCardData, PricingPlan } from '../schemas/home.types';

export const FEATURE_CARDS: FeatureCardData[] = [
  {
    title: 'Assessment Builder',
    description:
      'Create custom assessments tailored to your specific roles. Mix multiple-choice, coding challenges, and system design questions.',
    iconPath:
      'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  },
  {
    title: 'Candidate IDE',
    description:
      'Provide a world-class coding environment for candidates. Supports 40+ languages, multi-file projects, and real-time execution.',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
  {
    title: 'Question Bank',
    description:
      'Access thousands of pre-vetted questions across various domains, or upload your own proprietary challenges.',
    iconPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$49',
    period: '/mo',
    description: 'Perfect for startups making their first technical hires.',
    features: ['50 Candidates/mo', 'Basic IDE', 'Standard Question Bank'],
    ctaLabel: 'Start Free',
  },
  {
    name: 'Pro',
    price: '$199',
    period: '/mo',
    description: 'For growing teams scaling their engineering org.',
    features: [
      'Unlimited Candidates',
      'Advanced IDE with Multi-File',
      'Custom Questions',
      'ATS Integrations',
    ],
    ctaLabel: 'Get Started',
    featured: true,
    badgeText: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with complex hiring needs.',
    features: [
      'Everything in Pro',
      'Dedicated Success Manager',
      'SSO & Advanced Security',
      'Custom SLA',
    ],
    ctaLabel: 'Contact Sales',
  },
];
