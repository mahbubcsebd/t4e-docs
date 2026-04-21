import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";

const PricingCTA = () => {
  return (
    <div className="relative rounded-[3rem] bg-[#0f172a] p-12 sm:p-20 overflow-hidden text-center mb-20">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-purple-500 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <HelpCircle className="h-14 w-14 text-blue-400 mx-auto mb-8 opacity-80" strokeWidth={1} />
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
          Still not sure which <br />
          plan is right for you?
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed italic">
          "Our team is ready to help you find the perfect fit for your development needs."
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild className="h-16 px-10 bg-white text-[#0f172a] hover:bg-gray-100 rounded-2xl font-black text-base shadow-xl shadow-white/5 transition-all hover:scale-[1.02]">
            <Link href="/contact-us">
              Talk to an Expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-16 px-10 border-white/10 text-white hover:bg-white/5 bg-transparent rounded-2xl font-bold text-base transition-all">
            <Link href="/faq">
              View Detailed FAQ
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingCTA;
