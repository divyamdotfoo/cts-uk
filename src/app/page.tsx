import { WHyChooseUs } from "./components/why-us";
import { HeroSection } from "./components/hero-section";
import { TopPlans } from "./components/hero-section-cta";
import { Customers } from "./components/customers";

export default function Page() {
  return (
    <div>
      <HeroSection>
        <TopPlans />
      </HeroSection>
      <WHyChooseUs />
      <Customers />
    </div>
  );
}
