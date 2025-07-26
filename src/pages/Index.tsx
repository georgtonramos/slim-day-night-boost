import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <UrgencyBanner />
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
