"use client";

import { motion } from 'framer-motion';
import { FEATURE_CARDS } from '@/modules/home';
import { FeatureCard, SectionHeader } from '@/components/shared';
import { cardFadeIn, sectionFadeIn, staggerContainer } from '@/modules/shared';

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sectionFadeIn}>
          <SectionHeader
            title="Everything you need to hire the best"
            description="A complete suite of tools designed to evaluate technical skills accurately and fairly."
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {FEATURE_CARDS.map((feature) => (
            <motion.div key={feature.title} variants={cardFadeIn}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                iconPath={feature.iconPath}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
