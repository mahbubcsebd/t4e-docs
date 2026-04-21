import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { cn } from '@/lib/utils';
import { Settings, CreditCard, Rocket, Headphones, ShieldCheck } from 'lucide-react';

const catColors = {
  'Platform': { color: 'text-[#5c67f2]', bg: 'bg-[#5c67f2]/5', icon: <Settings size={18} /> },
  'Pricing': { color: 'text-emerald-500', bg: 'bg-emerald-50/50', icon: <CreditCard size={18} /> },
  'Onboarding': { color: 'text-orange-500', bg: 'bg-orange-50/50', icon: <Rocket size={18} /> },
  'Support': { color: 'text-rose-500', bg: 'bg-rose-50/50', icon: <Headphones size={18} /> },
  'Security': { color: 'text-cyan-600', bg: 'bg-cyan-50/50', icon: <ShieldCheck size={18} /> }
};

export const FAQList = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50/30 rounded-md border border-dashed border-gray-100 mt-10 max-w-4xl mx-auto">
        <p className="text-gray-400 text-sm">No results found for your search.</p>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-12">
      {data.map((section) => {
        const styles = catColors[section.category] || catColors['Platform'];
        return (section.items.length > 0 &&
          <div key={section.category} className="space-y-5">
            <div className="flex items-center justify-between border-b border-gray-50 pb-4">
              <div className="flex items-center gap-3">
                <div className={cn("p-1.5 rounded-md", styles.bg, styles.color)}>
                  {styles.icon}
                </div>
                <h3 className="text-[17px] font-bold text-gray-800 tracking-tight">{section.category}</h3>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-2.5 py-1 rounded-md">
                {section.items.length} questions
              </span>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {section.items.map((item, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`${section.category}-${idx}`}
                  className="border border-gray-100 rounded-md bg-white hover:border-gray-200 transition-all duration-200 shadow-sm"
                >
                  <AccordionTrigger className="px-5 py-4 hover:no-underline text-left group">
                    <span className="text-[14px] font-medium text-gray-600 group-hover:text-[#5c67f2] transition-colors pr-2 leading-relaxed">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 text-gray-500 text-[13.5px] leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        );
      })}
    </section>
  );
};
