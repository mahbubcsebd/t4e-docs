import PricingHero from "@/components/sections/pricing/PricingHero";
import PricingPlans from "@/components/sections/pricing/PricingPlans";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Pricing - Transparent Plans for Teams | Think4Ever",
  description: "Simple, transparent pricing for teams of all sizes. Choice of monthly or annual billing.",
  canonicalUrl: "https://www.think4ever.com/new_site/pricing/",
});

const PricingPage = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 max-w-[1240px] mx-auto w-full mb-20">
      <PricingHero />
      <PricingPlans />
    </div>
  );
};

export default PricingPage;
