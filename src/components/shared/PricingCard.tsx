"use client";

type PricingCardProps = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
  badgeText?: string;
};

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  ctaLabel,
  featured = false,
  badgeText,
}: PricingCardProps) {
  const wrapperClassName = featured
    ? 'bg-indigo-600 rounded-2xl p-8 border-2 border-indigo-600 relative transform md:scale-105 shadow-xl'
    : 'bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all';

  const titleClassName = featured
    ? 'text-lg font-semibold text-white mb-2'
    : 'text-lg font-semibold text-gray-900 mb-2';

  const priceClassName = featured
    ? 'text-5xl font-bold text-white'
    : 'text-5xl font-bold text-gray-900';

  const periodClassName = featured ? 'text-indigo-200 ml-2' : 'text-gray-600 ml-2';
  const descriptionClassName = featured ? 'text-indigo-100 mb-8 text-sm' : 'text-gray-600 mb-8 text-sm';
  const featureTextClassName = featured
    ? 'text-white text-sm font-medium'
    : 'text-gray-700 text-sm';
  const iconClassName = featured
    ? 'w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0'
    : 'w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0';
  const buttonClassName = featured
    ? 'w-full py-3 px-6 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors'
    : 'w-full py-3 px-6 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors';

  return (
    <div className={wrapperClassName}>
      {featured && badgeText ? (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-white text-indigo-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            {badgeText}
          </span>
        </div>
      ) : null}

      <div className="mb-6">
        <h3 className={titleClassName}>{name}</h3>
        <div className="flex items-baseline">
          <span className={priceClassName}>{price}</span>
          {period ? <span className={periodClassName}>{period}</span> : null}
        </div>
      </div>

      <p className={descriptionClassName}>{description}</p>

      <ul className="space-y-4 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <svg className={iconClassName} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className={featureTextClassName}>{feature}</span>
          </li>
        ))}
      </ul>

      <button className={buttonClassName}>{ctaLabel}</button>
    </div>
  );
}