'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home, Layout } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

const SuccessContent = ({ searchParams }) => {
  const type = searchParams?.get('type') || 'custom';
  const isSelfServe = type === 'self-serve';
  
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4 py-6 relative overflow-hidden bg-white">
      {/* Premium subtle background accents */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-blue-50/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-blue-50/40 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-xl w-full animate-in fade-in slide-in-from-bottom-6 duration-700">
        <Card className="p-6 sm:p-8 text-center shadow-[0_15px_40px_rgba(0,0,0,0.03)] border-gray-100/60 rounded-xl bg-white relative border">
          
          {/* Animated SVG Checkmark */}
          <div className="mb-4 flex justify-center">
            <div className="relative w-14 h-14">
              <div className="absolute inset-0 bg-blue-50 rounded-full scale-110 opacity-50 animate-pulse" />
              <div className="relative w-14 h-14 bg-[#5c67f2] rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(92,103,242,0.2)]">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-7 h-7 text-white"
                >
                  <path 
                    d="M20 6L9 17L4 12" 
                    className="checkmark-path"
                  />
                </svg>
              </div>
            </div>
          </div>
          
          <h1 className="text-xl sm:text-2xl font-bold text-[#5c67f2] mb-2 tracking-tight leading-tight whitespace-nowrap">
            Application Successful!
          </h1>
          
          <div className="max-w-md mx-auto mb-5">
            <p className="text-gray-600 font-medium text-[14px] leading-relaxed">
              {isSelfServe 
                ? "Thanks — you're eligible for immediate access. Choose your plan and start building today."
                : "Thanks — we’ve received your request. Our team will follow up shortly with recommended pricing, onboarding path, and next steps."
              }
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {isSelfServe ? (
              <>
                <Button asChild className="w-full sm:w-auto h-11 px-6 bg-[#5c67f2] hover:bg-[#4a54d1] rounded-lg text-[14px] font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all group">
                  <Link href="/pricing">
                    Continue to Pricing <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="w-full sm:w-auto h-11 px-5 text-gray-400 hover:text-[#5c67f2] font-bold text-[13px] flex items-center gap-2 transition-colors">
                  <Link href="/">
                    <Home className="w-4 h-4" /> Home
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button asChild className="w-full sm:w-auto h-11 px-6 bg-[#5c67f2] hover:bg-[#4a54d1] rounded-lg text-[14px] font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center gap-2">
                  <Link href="/">
                    <Home className="w-4 h-4" /> Back to Home
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto h-11 px-6 border-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-[13px] font-bold flex items-center gap-2 transition-all">
                  <Link href="/product">
                    <Layout className="w-4 h-4" /> Explore Product
                  </Link>
                </Button>
              </>
            )}
          </div>

          <style jsx>{`
            .checkmark-path {
              stroke-dasharray: 48;
              stroke-dashoffset: 48;
              animation: draw 0.8s cubic-bezier(0.65, 0, 0.45, 1) forwards 0.4s;
            }
            @keyframes draw {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>
        </Card>
      </div>
    </div>
  );
};

const SuccessPageWrapper = () => {
  const searchParams = useSearchParams();
  return <SuccessContent searchParams={searchParams} />;
}

export default function SuccessPage() {
  return (
    <Suspense fallback={null}>
      <SuccessPageWrapper />
    </Suspense>
  );
}
