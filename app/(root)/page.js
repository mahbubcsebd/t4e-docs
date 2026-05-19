import { Hero } from "@/components/sections/Hero";
import { IndependentDevelopers } from "@/components/sections/IndependentDevelopers";
import { StartupsAndVentures } from "@/components/sections/StartupsAndVentures";
import { SoftwareAndSaaS } from "@/components/sections/SoftwareAndSaaS";
import { SystemsIntegrators } from "@/components/sections/SystemsIntegrators";
import { EnterpriseITTeams } from "@/components/sections/EnterpriseITTeams";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "think4ever | Turn Ideas and Code into Systems",
  description: "The first AI-powered multi-agent SDLC platform that designs, builds, and deploys production-ready systems with total coherence and flexibility.",
});



const HomePage = () => {
  return (
    <>
      <Hero />
      <section id="indie-devs"><IndependentDevelopers /></section>
      <section id="startups"><StartupsAndVentures /></section>
      <section id="software-saas"><SoftwareAndSaaS /></section>
      <section id="systems-integrators"><SystemsIntegrators /></section>
      <section id="enterprise-it"><EnterpriseITTeams /></section>
    </>
  );
};

export default HomePage;
