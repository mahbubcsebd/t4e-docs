import React from 'react';
import { MessageCircle, Mail, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const StillHaveQuestions = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-20 sm:pb-32">
      <div className="bg-[#fbfcfe] border border-gray-100 rounded-md p-10 sm:p-14 text-center space-y-6">
          <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto text-[#5c67f2]">
             <MessageCircle size={24} fill="currentColor" fillOpacity={0.1} />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-[28px] font-bold text-[#111827]">Still have questions?</h3>
            <p className="text-gray-400 text-[14px] sm:text-[15px] max-w-lg mx-auto leading-relaxed font-medium">
              Can't find what you're looking for? Our team is here to help. Reach out and we'll get back to you promptly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <Button asChild className="h-11 px-8 bg-[#5c67f2] hover:bg-[#4a54d1] rounded-md font-bold text-[13px] shadow-lg shadow-blue-500/10 active:scale-[0.98] transition-all">
              <Link href="/contact-us" className="flex items-center gap-2">
                <Mail size={16} />
                Contact Us
              </Link>
            </Button>
            <Button asChild className="h-11 px-8 bg-[#e25d24] hover:bg-[#c94f1d] text-white rounded-md font-bold text-[13px] shadow-lg shadow-orange-500/15 active:scale-[0.98] transition-all">
              <Link href="/" className="flex items-center gap-2">
                <Rocket size={16} />
                Get Early Access
              </Link>
            </Button>
          </div>
      </div>
    </section>
  );
};
