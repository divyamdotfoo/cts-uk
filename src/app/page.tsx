import { WHyChooseUs } from "./components/why-us";
import { HeroSection } from "./components/hero-section";
import { TopPlans } from "./components/hero-section-cta";
import { Customers } from "./components/customers";
import { HowItWorks } from "./components/how-it-works";

export default function Page() {
  return (
    <div>
      <HeroSection>
        <TopPlans />
      </HeroSection>
      <WHyChooseUs />
      <Customers />
      <HowItWorks />
    </div>
  );
}
