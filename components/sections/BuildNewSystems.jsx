import { Heading } from "@/components/globals/Heading";
import { Paragraph } from "@/components/globals/Paragraph";
import { Button } from "@/components/ui/button";
import { Code, Monitor, Wrench } from "lucide-react";
import { buildSystemCards } from "@/constant/data";
import Link from 'next/link';
import React from "react";

const iconMap = {
  "code": Code,
  "monitor": Monitor,
  "tools": Wrench, 
};

export const BuildNewSystems = () => {
  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1150px] mx-auto flex flex-col items-center text-center bg-white w-full">
      <div className="uppercase tracking-widest text-[11px] sm:text-[12px] font-bold text-[#627aa8] mb-4">
        BUILD NEW SYSTEMS
      </div>
      <Heading level="h2" className="text-2xl sm:text-[2.6rem] leading-tight font-extrabold text-[#0f172a] mb-4 tracking-tight px-2">
        From Requirements to Production Systems <br className="hidden md:block" /> with Multi-Agent Orchestration
      </Heading>
      <Paragraph className="text-gray-500 mb-10 sm:mb-14 max-w-2xl text-balance text-[14px] sm:text-[15px] leading-relaxed px-4">
        Specialized AI agents work together to design, build, and deploy <br className="hidden sm:block" /> production-ready systems — human approved at every stage.
      </Paragraph>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 w-full">
        {buildSystemCards.map((card) => {
          const IconComponent = iconMap[card.icon];
          
          return (
            <div key={card.id} className="flex flex-col text-left border border-gray-100 rounded-xl p-6 bg-white hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 w-full group">
              
              <div className={`h-[48px] w-[48px] sm:h-[52px] sm:w-[52px] rounded-xl flex items-center justify-center mb-5 ${card.iconBg} ${card.iconColor} group-hover:scale-110 transition-transform`}>
                {IconComponent && <IconComponent className="h-6 w-6 stroke-[2.5]" />}
              </div>
              
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#1f2937] mb-2 tracking-tight group-hover:text-[#3b82f6] transition-colors">
                {card.title}
              </h3>
              
              <div className="text-[13px] sm:text-[14px] text-gray-500 mb-8 flex-1 leading-[1.6]">
                {card.description.split(':').map((part, index) => 
                  index === 0 ? <strong key={index} className="text-[#3b4b66] font-semibold">{part}:</strong> : part
                )}
              </div>
              
              <Link href={card.buttonLink} className="w-full">
                <Button className="w-full bg-[#1b449b] hover:bg-[#163884] text-white rounded-lg h-11 text-[14px] sm:text-[15px] font-medium shadow-sm transition-colors">
                  {card.buttonText}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
