"use client";

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/shared';
import { sectionFadeIn } from '@/modules/shared';

export default function CTASection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={sectionFadeIn}
        >
          <SectionHeader
            title="Ready to transform your hiring?"
            description="Join hundreds of companies that use QuizSync to hire better engineers, faster."
          />

          {/* Email Form */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-4">
            <input
              type="email"
              placeholder="Enter your work email"
              className="w-full sm:flex-1 px-6 py-3.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 placeholder-gray-500"
            />
            <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl whitespace-nowrap">
              Get Started Free
            </button>
          </div>

          {/* Fine Print */}
          <p className="text-sm text-gray-500">
            No credit card required. 14-day free trial.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
