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
    </div>
  );
}