export type FeatureCardData = {
  title: string;
  description: string;
  iconPath: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
  badgeText?: string;
};
