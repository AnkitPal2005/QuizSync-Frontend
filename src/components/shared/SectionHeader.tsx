'use client';

type SectionHeaderProps = {
  title: string;
  description: string;
  eyebrow?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({
  title,
  description,
  eyebrow,
  align = 'center',
}: SectionHeaderProps) {
  const alignClassName = align === 'left' ? 'text-left' : 'text-center';
  const descriptionClassName = align === 'left' ? 'max-w-3xl' : 'max-w-3xl mx-auto';

  return (
    <div className={`${alignClassName} mb-16`}>
      {eyebrow ? (
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
        {title}
      </h2>
      <p className={`text-lg text-gray-600 ${descriptionClassName}`}>
        {description}
      </p>
    </div>
  );
}
