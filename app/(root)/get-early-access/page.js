import { constructMetadata } from '@/lib/metadata';
import EarlyAccessContainer from '@/components/sections/early-access/EarlyAccessContainer';

export const metadata = constructMetadata({
  title: "Get Early Access - Think4Ever",
  description: "Apply for early access to Think4Ever and join a limited group of companies designing, building, and deploying production-ready systems faster.",
  canonicalUrl: "https://www.think4ever.com/new_site/get-early-access/",
});

export default function EarlyAccessPage() {
  return (
    <div className="min-h-screen bg-[#fcfdfe] py-12 sm:py-20">
      <EarlyAccessContainer />
    </div>
  );
}
