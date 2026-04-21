'use client';
import {
  Boxes,
  Check,
  Database,
  Eye,
  GitBranch,
  MessageSquare,
  Settings,
  Shield,
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Configure the foundation',
    desc: 'Stack, APIs, environments. AI-guided or your own.',
    tag: 'Setup',
    icon: Settings,
    color: 'blue',
    num: '01',
  },
  {
    id: 2,
    title: 'Define requirements',
    desc: 'Chat, voice, or type. Sidekick AI refines.',
    tag: 'AI-assisted',
    icon: MessageSquare,
    color: 'purple',
    num: '02',
  },
  {
    id: 3,
    title: 'Generate core concepts',
    desc: 'Architecture blueprints. Modules and services.',
    tag: 'Visual map',
    icon: Boxes,
    color: 'green',
    num: '03',
  },
  {
    id: 4,
    title: 'See impact',
    desc: 'Click any node. See all. Real-time.',
    tag: 'Real-time',
    icon: Eye,
    color: 'orange',
    num: '04',
  },
  {
    id: 5,
    title: 'Business flows',
    desc: 'Interactive process maps. Every dependency visible.',
    tag: 'Modernization',
    icon: GitBranch,
    color: 'pink',
    num: '05',
  },
  {
    id: 6,
    title: 'Define data model',
    desc: 'Visual ERD. Entities, schemas. All relationships mapped.',
    tag: 'Data model',
    icon: Database,
    color: 'blue',
    num: '06',
  },
  {
    id: 7,
    title: 'Set roles, rules, and deploy',
    desc: 'Define permissions, business rules, and governance — then deploy with CI/CD integration. Auto-generated documentation ships with every deployment.',
    tags: ['Permissions', 'Rules engine', 'CI/CD', 'Docs'],
    icon: Shield,
    color: 'green',
    num: '07',
  },
];

const StepCard = ({ step, className = '' }) => {
  const Icon = step.icon;
  const colors = {
    blue: 'border-gray-100 bg-white group-hover:border-blue-100',
    purple: 'border-gray-100 bg-white group-hover:border-purple-100',
    green: 'border-gray-100 bg-white group-hover:border-green-100',
    orange: 'border-orange-100 bg-[#fffef4] group-hover:border-orange-200',
    pink: 'border-gray-100 bg-white group-hover:border-pink-100',
  };

  const iconCircle = {
    blue: 'bg-blue-50 text-blue-500',
    purple: 'bg-purple-50 text-purple-500',
    green: 'bg-green-50 text-green-500',
    orange: 'bg-orange-100 text-orange-600',
    pink: 'bg-pink-50 text-pink-500',
  };

  const numCircle = {
    blue: 'bg-blue-900 text-white',
    purple: 'bg-purple-600 text-white',
    green: 'bg-emerald-600 text-white',
    orange: 'bg-orange-500 text-white',
    pink: 'bg-pink-600 text-white',
  };

  return (
    <div
      className={`relative group border transition-all duration-200 rounded-xl p-4 sm:p-5 ${colors[step.color]} ${className}`}
    >
      <div
        className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${numCircle[step.color]}`}
      >
        {step.num}
      </div>

      <div className="flex flex-col h-full">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${iconCircle[step.color]}`}
        >
          <Icon className="w-5 h-5 flex-shrink-0" />
        </div>
        <h3 className="font-bold text-[#1f2937] text-[14px] mb-1 leading-tight group-hover:text-[#e25d24] transition-colors">
          {step.title}
        </h3>
        <p className="text-[12px] text-gray-400 leading-relaxed mb-4 flex-1">
          {step.desc}
        </p>
        <span className="inline-block self-start px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-50 border border-gray-100">
          {step.tag}
        </span>
      </div>
    </div>
  );
};

const HorizontalArrow = ({ className = '' }) => (
  <div
    className={`absolute flex items-center pointer-events-none ${className}`}
  >
    <div className="h-[1px] w-full bg-gray-200"></div>
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      className="shrink-0 -ml-1"
    >
      <path
        d="M1 1L7 4L1 7"
        stroke="#E5E7EB"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const VerticalArrow = ({ className = '' }) => (
  <div
    className={`absolute flex flex-col items-center pointer-events-none ${className}`}
  >
    <div className="w-[1px] h-full bg-gray-200"></div>
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      className="shrink-0 -mt-1"
    >
      <path
        d="M1 1L4 7L7 1"
        stroke="#E5E7EB"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export const Diagram = () => {
  return (
    <section className="w-full py-16 bg-white overflow-x-auto no-scrollbar">
      <div className="max-w-[1100px] mx-auto px-4 min-w-[950px]">
        {/* Phase: Foundation (Steps 1-4) */}
        <div className="relative mb-24">
          <div className="inline-block bg-blue-50/50 text-[#1b449b] px-3 py-1 rounded text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-blue-100/50">
            Foundation
          </div>

          <div className="grid grid-cols-4 gap-6 relative">
            <HorizontalArrow className="top-[45%] left-[22.5%] w-[7%]" />
            <HorizontalArrow className="top-[45%] left-[47.5%] w-[7%]" />
            <HorizontalArrow className="top-[45%] left-[72.5%] w-[7%]" />

            {steps.slice(0, 4).map((step) => (
              <StepCard key={step.id} step={step} className="z-10" />
            ))}
          </div>

          <VerticalArrow className="left-[12.5%] bottom-[-50px] h-12" />
          <VerticalArrow className="left-[37.5%] bottom-[-75px] h-18" />
          <VerticalArrow className="left-[87.5%] bottom-[-75px] h-18" />
        </div>

        {/* Phase: Design (Steps 5-6) */}
        <div className="relative mb-24">
          <div className="absolute top-[-30px] left-0">
            <div className="inline-block bg-pink-50/50 text-pink-600 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-[0.2em] border border-pink-100/50 xl:ml-[105px]">
              Design
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 relative">
            <div className="col-start-2 relative">
              <StepCard step={steps[4]} className="z-10" />
              <HorizontalArrow className="top-[45%] left-[102%] w-[98%]" />
            </div>
            <div className="col-start-4">
              <StepCard step={steps[5]} className="z-10" />
            </div>
          </div>

          <VerticalArrow className="left-[37.5%] bottom-[-85px] h-20" />
        </div>

        {/* Phase: Deploy (Step 7) */}
        <div className="relative mb-12">
          <div className="inline-block bg-orange-50/50 text-orange-600 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-orange-100/50">
            Deploy
          </div>

          <div className="border border-green-200 bg-[#f9fffb] rounded-xl p-6 sm:p-8 relative">
            <div className="absolute top-3 right-4 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-emerald-600 text-white">
              07
            </div>
            <div className="flex items-center gap-8">
              <div className="w-14 h-14 rounded-xl bg-white border border-green-100 flex items-center justify-center shrink-0">
                <Shield className="w-7 h-7 text-emerald-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-[17px] font-bold text-[#1f2937] mb-1.5">
                  {steps[6].title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed max-w-4xl">
                  {steps[6].desc}
                </p>
                <div className="flex gap-3 mt-3.5">
                  {steps[6].tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50/50 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <VerticalArrow className="left-1/2 -translate-x-1/2 bottom-[-40px] h-10" />
        </div>

        {/* Final Result Box */}
        <div className="bg-[#ebf3ff]/60 border border-blue-100 rounded-xl p-6 flex items-center gap-6 relative">
          <div className="h-14 w-14 bg-white rounded-xl border border-blue-50 flex items-center justify-center shrink-0">
            <Check className="w-8 h-8 text-blue-500 stroke-[2.5]" />
          </div>
          <div className="flex-1">
            <h3 className="text-[16px] sm:text-[18px] font-bold text-[#1b449b] mb-1">
              Production-ready system — from idea to integrated stack
            </h3>
            <p className="text-[13px] text-[#1b449b]/60 font-medium tracking-wide">
              Human-directed · AI-powered · Fully documented · Instantly
              deployed
            </p>
          </div>
          <div className="absolute right-0 top-0 bottom-0 px-6 flex items-center border-l border-blue-50 hidden md:flex">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] opacity-40">
              Think4Ever platform
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
