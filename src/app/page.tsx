import Link from 'next/link';
import { HeroSection, TrustedBy, DashboardPreview, FeaturesSection, PricingSection, CTASection } from "@/components/home";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DashboardPreview />
      <TrustedBy />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
      
      {/* Quick Access Links */}
      <div className="fixed bottom-8 right-8 flex gap-3 z-50">
        <Link href="/assessments/1">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-all rounded-lg font-semibold shadow-lg text-white text-sm">
            View Assessment
          </button>
        </Link>
        <Link href="/dashboard">
          <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 transition-all rounded-lg font-semibold shadow-lg text-white text-sm">
            Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}