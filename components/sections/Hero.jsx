import { Heading } from '@/components/globals/Heading';
import { Paragraph } from '@/components/globals/Paragraph';
import { Video } from '@/components/globals/Video';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from '@/public/assets/images/think4ever-logo.png';
import {
  Briefcase,
  Building,
  CheckCircle,
  Cloud,
  Code,
  GitBranch,
  Layout,
  MessageSquare,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <main className="flex-1 w-full overflow-hidden">
      {/* Hero Section */}
      <section className="pt-10 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col justify-center items-center">
        <Heading
          level="h1"
          className="text-[1.75rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.75rem] leading-[1.1] sm:leading-[1.05] font-bold text-[#1f2937] border-0 mb-6 sm:mb-8 tracking-tight px-1 max-w-[90vw] sm:max-w-none"
        >
          Turn Ideas and Code into Systems you can See, Change and Deploy.
          Instantly
          <span className="text-[#e25d24]">.</span>
        </Heading>

        <Paragraph
          size="lg"
          className="text-gray-500 mb-8 sm:mb-12 max-w-4xl mx-auto text-[14px] sm:text-lg lg:text-2xl px-2 sm:px-4 leading-relaxed"
        >
          The first AI-powered multi-agent SDLC platform that designs, builds,
          and deploys production-ready systems with total coherence and
          flexibility.
        </Paragraph>

        <Button
          asChild
          variant="orange"
          className="text-sm sm:text-base font-semibold px-6 sm:px-8 h-11 sm:h-12 transition-all rounded-md w-full sm:w-auto shadow-lg shadow-orange-500/20 w-auto"
        >
          <Link href="https://portal.think4ever.com">Get Early Access</Link>
        </Button>
      </section>

      {/* Video Section moved up - Just below CTA */}
      <div className="flex flex-col items-center mb-8 sm:mb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
        <div className="w-full max-w-3xl">
          <Video
            url="https://www.youtube.com/watch?v=nW37QETUq3o"
            thumbnail={Logo}
            title="Watch how it works"
            className="aspect-video w-full shadow-2xl rounded-2xl border border-gray-200"
          />
        </div>
      </div>

      {/* Six Capabilities Section - Now below Video */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16 sm:pb-24 pt-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-16 lg:gap-y-10 mt-8">
          {[
            {
              id: 1,
              title: 'See your system',
              desc: 'Map your codebase into one connected view — code, APIs, data, and workflows all in one place.',
              icon: Layout,
              bg: 'bg-[#eafaf1]',
              border: 'border-[#d1f5e1]',
              text: 'text-[#10b981]',
            },
            {
              id: 2,
              title: 'Navigate in conversation',
              desc: 'Ask questions by voice or text and instantly explore how your system works, what connects where, and why.',
              icon: MessageSquare,
              bg: 'bg-[#fff0ea]',
              border: 'border-[#fde2d7]',
              text: 'text-[#e25d24]',
            },
            {
              id: 3,
              title: 'Change with full impact visibility',
              desc: 'Modify anything and instantly see how it affects everything else — before you deploy, with a full audit trail.',
              icon: GitBranch,
              bg: 'bg-[#eaf0ff]',
              border: 'border-[#dbeafe]',
              text: 'text-[#3b82f6]',
            },
            {
              id: 4,
              title: 'Build from requirements to production',
              desc: 'Define requirements with an AI sidekick, then automatically generate a complete, production-ready system.',
              icon: Zap,
              bg: 'bg-[#f5f3ff]',
              border: 'border-[#ddd6fe]',
              text: 'text-[#8b5cf6]',
            },
            {
              id: 5,
              title: 'Automated QA & security testing',
              desc: 'Continuously validate your system with automated QA, internal and external security testing, and end-to-end workflow checks.',
              icon: ShieldCheck,
              bg: 'bg-[#eafaf1]',
              border: 'border-[#d1f5e1]',
              text: 'text-[#10b981]',
            },
            {
              id: 6,
              title: 'Controlled delivery & traceability',
              desc: 'Review, approve, and guide every change — with full traceability so every decision is documented and accountable.',
              icon: CheckCircle,
              bg: 'bg-[#eef2ff]',
              border: 'border-[#e0e7ff]',
              text: 'text-[#6366f1]',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="flex gap-5 group">
                <div
                  className={cn(
                    'h-12 w-12 sm:h-14 sm:w-14 shrink-0 flex items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm',
                    item.bg,
                    item.border,
                    item.text,
                  )}
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 stroke-[2.5]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2 text-[16px] sm:text-lg lg:text-[19px] leading-tight">
                    {item.title}
                  </h3>
                  <Paragraph
                    size="sm"
                    className="text-gray-500 text-[13px] sm:text-[14px] leading-relaxed max-w-md"
                  >
                    {item.desc}
                  </Paragraph>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Segment Boxes Section - Commented out as requested */}
      {/* 
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16 sm:pb-24 relative animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 border-t border-dashed border-gray-200 -z-10 hidden xl:block mx-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3 xl:gap-4 relative">
          {[
            {
              title: 'Independent Developers',
              href: '/#indie-devs',
              icon: Code,
              color: 'blue',
              bg: 'bg-blue-50',
              text: 'text-blue-500',
              border: 'border-blue-100',
            },
            {
              title: 'Start-ups & New Ventures',
              href: '/#startups',
              icon: Zap,
              color: 'emerald',
              bg: 'bg-emerald-50',
              text: 'text-emerald-500',
              border: 'border-emerald-100',
            },
            {
              title: 'Software & SaaS Companies',
              href: '/#software-saas',
              icon: Cloud,
              color: 'brand',
              bg: 'bg-orange-50',
              text: 'text-[#e25d24]',
              border: 'border-orange-100',
            },
            {
              title: 'Systems Integrators / Consultants',
              href: '/#systems-integrators',
              icon: Briefcase,
              color: 'violet',
              bg: 'bg-violet-50',
              text: 'text-violet-500',
              border: 'border-violet-100',
            },
            {
              title: 'Enterprise & Mid-Size Business',
              href: '/#enterprise-it',
              icon: Building,
              color: 'teal',
              bg: 'bg-teal-50',
              text: 'text-teal-500',
              border: 'border-teal-100',
            },
          ].map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <Link
                key={idx}
                href={seg.href}
                className="group bg-white border border-gray-100 rounded-xl p-5 flex flex-col items-center text-center shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-1.5 transition-all cursor-pointer"
              >
                <div
                  className={cn(
                    'h-12 w-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3',
                    seg.bg,
                    seg.text,
                    'border',
                    seg.border,
                  )}
                >
                  <Icon size={20} strokeWidth={2.5} />
                </div>
                <h4 className="text-[13px] xl:text-[14px] font-bold text-gray-900 leading-snug group-hover:text-[#3b82f6] transition-colors">
                  {seg.title}
                </h4>
              </Link>
            );
          })}
        </div>
      </section>
      */}
    </main>
  );
};
