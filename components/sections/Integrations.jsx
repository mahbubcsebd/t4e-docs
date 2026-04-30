import React from "react";
import { Heading } from "@/components/globals/Heading";
import { Paragraph } from "@/components/globals/Paragraph";
import { Terminal, Database, Layout, ShieldCheck, Cpu, Cloud } from "lucide-react";

export const Integrations = () => {
  const tools = [
    { name: "Terminal", icon: Terminal, color: "text-[#333]" },
    { name: "PostgreSQL", icon: Database, color: "text-[#336791]" },
    { name: "Frontend", icon: Layout, color: "text-[#3b82f6]" },
    { name: "Security", icon: ShieldCheck, color: "text-[#10b981]" },
    { name: "Backend", icon: Cpu, color: "text-[#8b5cf6]" },
    { name: "Cloud", icon: Cloud, color: "text-[#06b6d4]" },
  ];

  return (
    <section className="py-24 px-6 lg:px-8 w-full bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto text-center">
        <div className="uppercase tracking-widest text-[12px] font-bold text-[#025da9] mb-4">
          ANY STACK, ANY SCALE
        </div>
        <Heading level="h2" className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-6">
          Works with the tools you love.
        </Heading>
        <Paragraph className="text-gray-500 mb-16 max-w-2xl mx-auto">
          Our specialized agents integrate deeply with your existing infrastructure, version control, and cloud providers to automate your entire workflow.
        </Paragraph>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {tools.map((tool, i) => (
            <div key={i} className="flex flex-col items-center group cursor-pointer">
              <div className="h-20 w-20 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                <tool.icon className={`h-10 w-10 ${tool.color} transition-transform group-hover:scale-110`} />
              </div>
              <span className="text-[13px] font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
