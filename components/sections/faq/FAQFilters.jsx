import React from 'react';
import { cn } from '@/lib/utils';
import { Settings, CreditCard, Rocket, Headphones, Layers, ShieldCheck } from 'lucide-react';

const icons = {
  'All Questions': <Layers size={14} />,
  'Platform': <Settings size={14} />,
  'Pricing': <CreditCard size={14} />,
  'Onboarding': <Rocket size={14} />,
  'Support': <Headphones size={14} />,
  'Security': <ShieldCheck size={14} />
};

export const FAQFilters = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 relative z-30">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "h-10 px-6 rounded-md text-[13px] font-bold flex items-center gap-2.5 transition-all duration-300 border shadow-sm",
              activeCategory === cat 
                ? "bg-[#5c67f2] border-[#5c67f2] text-white shadow-blue-200" 
                : "bg-white border-gray-100 text-gray-500 hover:border-gray-200 hover:text-gray-800 hover:bg-gray-50/50"
            )}
          >
            {icons[cat]}
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
};
