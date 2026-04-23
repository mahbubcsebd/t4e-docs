import { Hero } from "@/components/sections/Hero";
import { IndependentDevelopers } from "@/components/sections/IndependentDevelopers";
import { StartupsAndVentures } from "@/components/sections/StartupsAndVentures";
import { SoftwareAndSaaS } from "@/components/sections/SoftwareAndSaaS";
import { SystemsIntegrators } from "@/components/sections/SystemsIntegrators";
import { EnterpriseITTeams } from "@/components/sections/EnterpriseITTeams";

export const metadata = {
  title: "think4ever | Turn Ideas into Integrated Systems",
  description: "The first multi-agent SDLC platform that designs, builds and deploys production-ready systems.",
};

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
