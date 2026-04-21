import { Heading } from '@/components/globals/Heading';
import { Paragraph } from '@/components/globals/Paragraph';
import { Button } from '@/components/ui/button';
import { modernizeSystemCards } from '@/constant/data';
import { Building, Wrench } from 'lucide-react';
import Link from 'next/link';

const iconMap = {
  building: Building,
  tools: Wrench,
};

export const ModernizeExistingSystems = () => {
  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1150px] mx-auto flex flex-col items-center text-center bg-white w-full">
      <div className="uppercase tracking-widest text-[11px] sm:text-[12px] font-bold text-[#627aa8] mb-4">
        Update & Modernize New Systems
      </div>
      <Heading
        level="h2"
        className="text-2xl sm:text-[2.6rem] leading-tight font-extrabold text-[#0f172a] mb-4 tracking-tight px-2"
      >
        Modernize Complex Systems With <br className="hidden md:block" />{' '}
        Clarity, Speed, and Confidence
      </Heading>
      <Paragraph className="text-gray-500 mb-10 sm:mb-14 max-w-2xl text-balance text-[14px] sm:text-[15px] leading-relaxed px-4">
        Modernize legacy systems with full dependency mapping and impact
        simulation — <br className="hidden sm:block" />
        whether you're migrating infrastructure, refactoring monoliths,
        upgrading tech stacks, or preparing client estates for AI.
      </Paragraph>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 w-full max-w-4xl">
        {modernizeSystemCards.map((card) => {
          const IconComponent = iconMap[card.icon];

          return (
            <div
              key={card.id}
              className="flex flex-col text-left border border-gray-100 rounded-xl p-6 bg-white hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 w-full min-h-[260px] group"
            >
              <div
                className={`h-[48px] w-[48px] sm:h-[52px] sm:w-[52px] rounded-xl flex items-center justify-center mb-5 ${card.iconBg} ${card.iconColor} group-hover:scale-110 transition-transform`}
              >
                {IconComponent && (
                  <IconComponent className="h-6 w-6 stroke-[2.5]" />
                )}
              </div>

              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#1f2937] mb-2 tracking-tight">
                {card.title}
              </h3>

              <div className="text-[13px] sm:text-[14px] text-gray-500 mb-8 flex-1 leading-[1.6]">
                {card.description.split(':').map((part, index) =>
                  index === 0 ? (
                    <strong
                      key={index}
                      className="text-[#3b4b66] font-semibold"
                    >
                      {part}:
                    </strong>
                  ) : (
                    part
                  ),
                )}
              </div>

              <Link href={card.buttonLink} className="w-full mt-auto">
                <Button className="w-full bg-[#1b449b] hover:bg-[#163884] text-white rounded-lg h-11 text-[14px] sm:text-[15px] font-medium shadow-sm transition-colors">
                  {card.buttonText}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
