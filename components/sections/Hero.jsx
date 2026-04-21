import { Heading } from '@/components/globals/Heading';
import { Paragraph } from '@/components/globals/Paragraph';
import { Video } from '@/components/globals/Video';
import { Button } from '@/components/ui/button';
import { Check, RefreshCw, Rocket } from 'lucide-react';

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
          variant="orange"
          className="text-sm sm:text-base font-semibold px-6 sm:px-8 h-11 sm:h-12 transition-all rounded-md w-full sm:w-auto shadow-lg shadow-orange-500/20 w-auto"
        >
          Get Early Access
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
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8 order-1 lg:order-2">
            <Video
              url="https://www.youtube.com/watch?v=CQpIODqNFek"
              className="aspect-video w-full max-w-[550px] mx-auto bg-gradient-to-br from-[#4161a0] to-[#30477a] shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[950px] mx-auto pb-16 sm:pb-24 relative animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
        <div className="absolute inset-0 top-1/2 transform -translate-y-1/2 border-t border-dashed border-gray-200 -z-10 hidden md:block w-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 relative items-center">
          {/* Card 1 */}
          <div className="border border-gray-100 rounded-2xl p-5 sm:p-6 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex gap-4 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
            <div className="h-[44px] w-[44px] sm:h-[48px] sm:w-[48px] rounded-xl bg-[#f5f5ff] flex items-center justify-center flex-shrink-0 border border-[#e4e4ff]">
              <Rocket className="h-5 w-5 text-[#6366f1]" />
            </div>
            <div className="flex-1 mt-0.5">
              <h4 className="font-bold text-[#1f2937] mb-1 text-[15px]">
                Build New Systems
              </h4>
              <Paragraph
                size="sm"
                className="text-gray-500 text-[13px] leading-relaxed"
              >
                From requirements to production-ready systems — without tool
                sprawl, handoffs, or rework.
              </Paragraph>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-100 rounded-2xl p-5 sm:p-6 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex gap-4 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
            <div className="h-[44px] w-[44px] sm:h-[48px] sm:w-[48px] rounded-xl bg-[#fffef0] flex items-center justify-center flex-shrink-0 border border-[#fff3cc]">
              <RefreshCw className="h-5 w-5 text-[#f5a623]" />
            </div>
            <div className="flex-1 mt-0.5">
              <h4 className="font-bold text-[#1f2937] mb-1 text-[15px]">
                Modernize Existing Systems
              </h4>
              <Paragraph
                size="sm"
                className="text-gray-500 text-[13px] leading-relaxed"
              >
                Modernize legacy systems with mapped dependencies and safer AI
                transformation.
              </Paragraph>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
