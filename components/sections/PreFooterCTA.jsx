'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

export const PreFooterCTA = () => {
  const pathname = usePathname();

  // Hide this component on the get-early-access page
  if (pathname === '/get-early-access') return null;

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-gray-900 mb-6 tracking-tight">
          Ready to revolutionize your SDLC?
        </h2>
        <p className="text-gray-500 text-[16px] sm:text-[18px] mb-10 max-w-2xl mx-auto leading-relaxed">
          Join the future of software development with our multi-agent platform. 
          Designs, builds, and deploys production-ready systems with total system coherence.
        </p>
        <Button
          asChild
          variant="orange"
          className="text-base font-bold px-10 h-14 transition-all rounded-md shadow-xl shadow-orange-500/20"
        >
          <Link href="https://portal.think4ever.com">Get Early Access</Link>
        </Button>
      </div>
    </section>
  );
};
