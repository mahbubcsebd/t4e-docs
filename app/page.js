import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { BuildNewSystems } from "@/components/sections/BuildNewSystems";
import { IndependentDevelopers } from "@/components/sections/IndependentDevelopers";
import { SoftwareAndSaaS } from "@/components/sections/SoftwareAndSaaS";
import { SystemsIntegrators } from "@/components/sections/SystemsIntegrators";
import { ModernizeExistingSystems } from "@/components/sections/ModernizeExistingSystems";
import { EnterpriseITTeams } from "@/components/sections/EnterpriseITTeams";
import { ModernizeIntegrators } from "@/components/sections/ModernizeIntegrators";
import { Integrations } from "@/components/sections/Integrations";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "think4ever | Turn Ideas into Integrated Systems",
  description: "The first multi-agent SDLC platform that designs, builds and deploys production-ready systems.",
};

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Hero />
      <BuildNewSystems />
      <IndependentDevelopers />
      <SoftwareAndSaaS />
      <SystemsIntegrators />
      <ModernizeExistingSystems />
      <EnterpriseITTeams />
      <ModernizeIntegrators />
      <Integrations />
      <BottomCTA />
      <Footer />
    </div>
  );
};

export default HomePage;
