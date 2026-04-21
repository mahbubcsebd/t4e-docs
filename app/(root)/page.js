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

export const metadata = {
  title: "think4ever | Turn Ideas into Integrated Systems",
  description: "The first multi-agent SDLC platform that designs, builds and deploys production-ready systems.",
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <section id="build-new"><BuildNewSystems /></section>
      <section id="indie-devs"><IndependentDevelopers /></section>
      <section id="software-saas"><SoftwareAndSaaS /></section>
      <section id="systems-integrators"><SystemsIntegrators /></section>
      <section id="modernize-existing"><ModernizeExistingSystems /></section>
      <section id="enterprise-it"><EnterpriseITTeams /></section>
      <section id="modernize-integrators"><ModernizeIntegrators /></section>
      <section id="integrations"><Integrations /></section>
      <BottomCTA />
    </>
  );
};

export default HomePage;
