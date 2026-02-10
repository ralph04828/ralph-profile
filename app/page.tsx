import FAQsThree from "@/components/faqs-3";
import FeaturesSection from "@/components/features-8";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-5";
import StatsSection from "@/components/stats-4";

export default function Home() {
  return (
  <div>
    <HeroSection />
    <FeaturesSection />
    <IntegrationsSection />
    <StatsSection />
    <FAQsThree />
    <FooterSection />
    </div>
  );
}

