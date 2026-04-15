"use client";

type FeatureCardProps = {
  title: string;
  description: string;
  iconPath: string;
};

export default function FeatureCard({ title, description, iconPath }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
