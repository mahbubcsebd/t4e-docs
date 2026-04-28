import React from "react";
import { Heading } from "@/components/globals/Heading";
import { Paragraph } from "@/components/globals/Paragraph";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const BottomCTA = () => {
  return (
    <section className="py-20 px-6 lg:px-8 w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#1b449b] to-[#2563eb] p-10 sm:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e25d24]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="uppercase tracking-widest text-[12px] font-bold text-white/70 mb-6">
            READY TO TRANSFORM YOUR SDLC?
          </div>
          <Heading level="h2" className="text-3xl sm:text-5xl font-bold text-white mb-8 tracking-tight">
            Turn your Ideas into <br className="hidden sm:block" /> Integrated Systems. Today.
          </Heading>
          <Paragraph className="text-white/80 mb-12 max-w-2xl mx-auto text-lg sm:text-xl font-light">
            Join the early access list and be among the first to experience the power of multi-agent software development.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="bg-[#e25d24] hover:bg-[#c94d1b] text-white h-14 px-10 text-lg font-bold rounded-xl shadow-xl transition-all hover:scale-105 w-full sm:w-auto">
              <Link href="/pricing">Get Early Access</Link>
            </Button>
            <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 h-14 px-10 text-lg font-bold rounded-xl transition-all w-full sm:w-auto">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
