import React from 'react';
import { Search } from 'lucide-react';

export const FAQHero = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="bg-[#334155] pt-16 pb-24 sm:pt-20 sm:pb-32 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-300 text-[13px] sm:text-[14px] mb-6 font-medium tracking-wide uppercase opacity-80">
          Find answers to common questions about our platform, pricing, onboarding, and support.
        </p>
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search FAQ — type a keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-6 bg-white rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5c67f2]/20 transition-all text-sm shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};
