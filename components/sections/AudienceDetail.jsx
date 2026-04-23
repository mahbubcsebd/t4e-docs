"use client";
import { Heading } from "@/components/globals/Heading";
import { Paragraph } from "@/components/globals/Paragraph";
import { Video } from "@/components/globals/Video";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from 'next/link';
import React from "react";

export const AudienceDetail = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 w-full bg-[#fbfcfd] flex flex-col items-center">
      {/* Header Area */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 sm:mb-16">
        <div 
          className="uppercase tracking-widest text-[11px] sm:text-[12px] font-bold text-[#627aa8] mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data.overline }}
        />
        <Heading level="h2" className="text-[1.75rem] sm:text-[2.5rem] leading-[1.2] font-bold text-[#0f172a] tracking-tight text-balance" dangerouslySetInnerHTML={{ __html: data.title }} />
      </div>

      {/* Today's Reality Cards */}
      <div className="w-full max-w-6xl mx-auto mb-12 sm:mb-20">
        <div className="italic text-gray-400 font-medium mb-6 text-[15px] sm:text-[16px] text-center sm:text-left">
          Today's Reality...
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          {data.realityCards.map((card) => (
            <div key={card.id} className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300">
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0f172a] mb-4 leading-tight">{card.title}</h3>
              <Paragraph size="sm" className="text-gray-500 mb-8 leading-[1.6] text-[14px]">
                {card.description}
              </Paragraph>
              <div 
                className="mt-auto pt-6 border-t border-gray-100 text-[12px] sm:text-[13px] text-gray-500 leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: card.statHtml }} 
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto border-t border-gray-200 pt-12 sm:pt-16">
        <h3 className="text-[19px] sm:text-[22px] font-bold text-[#0f172a] mb-8 sm:mb-10 text-center sm:text-left">With Think4Ever, you get:</h3>
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          {/* Left Checkmarks */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 pr-0 lg:pr-4">
            {data.checklist.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 flex-shrink-0 self-start text-[#10b981] bg-[#eafaf1] p-1.5 rounded-lg border border-[#d1f5e1]">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 stroke-[3]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#1f2937] mb-1 text-[15px] sm:text-[16px] leading-snug">{item.title}</h4>
                  <Paragraph size="sm" className="text-gray-500 text-[13.5px] leading-[1.6] max-w-md">
                    {item.desc}
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>

          {/* Right Video CTA Thumbnail */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <Video
              url="https://www.youtube.com/watch?v=CQpIODqNFek"
              className="aspect-video w-full max-w-[500px] bg-gradient-to-br from-[#4161a0] to-[#253965] shadow-2xl rounded-2xl border-0 overflow-hidden"
            />
            <div className="mt-8">
              <Button asChild className="bg-[#64748b] hover:bg-[#475569] text-white h-11 px-8 font-bold transition-all rounded-md shadow-md">
                <Link href="/product">Explore Product</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-20 mb-4 sm:mb-8 w-full sm:w-auto px-4 sm:px-0">
        <Button asChild variant="orange" className="w-full sm:w-auto h-[50px] sm:h-[52px] px-10 text-[16px] sm:text-[17px] font-semibold shadow-md hover:shadow-lg rounded-md transition-all">
          <Link href={data.ctaHref || "/contact-us"}>Get Early Access</Link>
        </Button>
      </div>
    </section>
  );
};
