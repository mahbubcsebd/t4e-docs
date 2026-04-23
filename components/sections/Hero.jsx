import { Heading } from '@/components/globals/Heading';
import { Paragraph } from '@/components/globals/Paragraph';
import { Video } from '@/components/globals/Video';
import { Button } from '@/components/ui/button';
import { Check, RefreshCw, Rocket, Code, Zap, Cloud, Briefcase, Building } from 'lucide-react';
import { cn } from '@/lib/utils';
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
          Turn Ideas into Integrated Systems. Instantly
          <span className="text-[#e25d24]">.</span>
        </Heading>

        <Paragraph
          size="lg"
          className="text-gray-500 mb-8 sm:mb-12 max-w-3xl mx-auto text-[14px] sm:text-lg lg:text-2xl px-2 sm:px-4 leading-relaxed"
        >
          The first multi-agent SDLC platform that designs, builds
          <br className="hidden sm:block" /> and deploys production-ready
          systems.
        </Paragraph>

        <Button
          asChild
          variant="orange"
          className="text-sm sm:text-base font-semibold px-6 sm:px-8 h-11 sm:h-12 transition-all rounded-md w-full sm:w-auto shadow-lg shadow-orange-500/20 w-auto"
        >
          <Link href="/contact-us">Get Early Access</Link>
        </Button>
      </section>

      {/* Two Column Section: Checklist and Video */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto pb-16 sm:pb-24 pt-4 sm:pt-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-center">
          {/* Left Column: Checklist */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 pl-0 lg:pl-8 order-2 lg:order-1">
            {/* Item 1 */}
            <div className="flex gap-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 self-start flex items-center justify-center rounded-lg bg-[#eafaf1] border border-[#d1f5e1] text-[#10b981]">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 stroke-[3]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1 text-[15px] sm:text-base lg:text-lg leading-tight">
                  Business Intent to Deployable Systems
                </h3>
                <Paragraph
                  size="sm"
                  className="text-gray-500 text-[13.5px] sm:text-sm leading-relaxed max-w-md"
                >
                  Start before code exists—turn ideas into clear, structured
                  software requirements.
                </Paragraph>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 self-start flex items-center justify-center rounded-lg bg-[#fff0ea] border border-[#fde2d7] text-[#e25d24]">
                <RefreshCw className="h-5 w-5 sm:h-6 sm:w-6 stroke-[3]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1 text-[15px] sm:text-base lg:text-lg leading-tight">
                  Orchestrates the Full SDLC
                </h3>
                <Paragraph
                  size="sm"
                  className="text-gray-500 text-[13.5px] sm:text-sm leading-relaxed max-w-md"
                >
                  Specialized AI agents design, build, and validate systems
                  end-to-end—not just code.
                </Paragraph>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 self-start flex items-center justify-center rounded-lg bg-[#eaf0ff] border border-[#dbeafe] text-[#3b82f6]">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 stroke-[3]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1 text-[15px] sm:text-base lg:text-lg leading-tight">
                  Map Full System Dependencies Instantly
                </h3>
                <Paragraph
                  size="sm"
                  className="text-gray-500 text-[13.5px] sm:text-sm leading-relaxed max-w-md"
                >
                  Generate architecture blueprints with real-time visibility
                  across services and integrations.
                </Paragraph>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex gap-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#eafaf1] border border-[#d1f5e1] text-[#10b981]">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 stroke-[3]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1 text-[15px] sm:text-base lg:text-lg leading-tight">
                  Keep Humans in Control
                </h3>
                <Paragraph
                  size="sm"
                  className="text-gray-500 text-[13.5px] sm:text-sm leading-relaxed max-w-md"
                >
                  Review decisions, guide changes, and maintain oversight at
                  every stage.
                </Paragraph>
              </div>
            </div>
          </div>

           {/* Right Column: Video */}
          <div className="w-full lg:w-1/2 flex flex-col items-center order-1 lg:order-2">
            <Video
              url="https://www.youtube.com/watch?v=CQpIODqNFek"
              className="aspect-video w-full max-w-[550px] bg-gradient-to-br from-[#4161a0] to-[#30477a] shadow-2xl rounded-2xl"
            />
            <div className="mt-8">
              <Button asChild className="bg-[#64748b] hover:bg-[#475569] text-white h-11 px-8 font-bold transition-all rounded-md shadow-md">
                <Link href="/product">Explore Product</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Segment Boxes Section */}
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
              border: 'border-blue-100'
            },
            { 
              title: 'Start-ups & New Ventures', 
              href: '/#startups', 
              icon: Zap, 
              color: 'emerald',
              bg: 'bg-emerald-50',
              text: 'text-emerald-500',
              border: 'border-emerald-100'
            },
            { 
              title: 'Software & SaaS Companies', 
              href: '/#software-saas', 
              icon: Cloud, 
              color: 'brand',
              bg: 'bg-orange-50',
              text: 'text-[#e25d24]',
              border: 'border-orange-100'
            },
            { 
              title: 'Systems Integrators / Consultants', 
              href: '/#systems-integrators', 
              icon: Briefcase, 
              color: 'violet',
              bg: 'bg-violet-50',
              text: 'text-violet-500',
              border: 'border-violet-100'
            },
            { 
              title: 'Enterprise & Mid-Size Business', 
              href: '/#enterprise-it', 
              icon: Building, 
              color: 'teal',
              bg: 'bg-teal-50',
              text: 'text-teal-500',
              border: 'border-teal-100'
            },
          ].map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <Link
                key={idx}
                href={seg.href}
                className="group bg-white border border-gray-100 rounded-xl p-5 flex flex-col items-center text-center shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-1.5 transition-all cursor-pointer"
              >
                <div className={cn(
                  "h-12 w-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                  seg.bg, seg.text, "border", seg.border
                )}>
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
    </main>
  );
};
