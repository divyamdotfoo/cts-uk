import { WHyChooseUs } from "./components/why-us";
import { HeroSection } from "./components/hero-section";
import { TopPlans } from "./components/hero-section-cta";
import { Customers } from "./components/customers";
import { HowItWorks } from "./components/how-it-works";
import { FAQs } from "./components/faqs";

export default function Page() {
  return (
    <div>
      <HeroSection>
        <TopPlans />
      </HeroSection>
      <WHyChooseUs />
      <Customers />
      <HowItWorks />
      <FAQs />
    </div>
  );
}
