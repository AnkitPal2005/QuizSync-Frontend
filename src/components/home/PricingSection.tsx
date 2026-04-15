'use client';

import { motion } from 'framer-motion';
import { PricingCard } from '@/components/shared';
import { PRICING_PLANS } from '@/modules/home';
import { SectionHeader } from '@/components/shared';
import { cardFadeIn, sectionFadeIn, staggerContainer } from '@/modules/shared';

export default function PricingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sectionFadeIn}>
          <SectionHeader
            title="Simple, transparent pricing"
            description="Choose the plan that fits your hiring volume."
          />
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {PRICING_PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardFadeIn}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
