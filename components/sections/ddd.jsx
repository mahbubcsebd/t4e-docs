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

const StepCard = ({ step, isActive, onClick, className = '' }) => {
  const Icon = step.icon;
  const colors = {
    blue: isActive
      ? 'border-blue-500 bg-blue-50/50 shadow-lg shadow-blue-500/10'
      : 'border-gray-100 bg-white hover:border-blue-200 hover:shadow-blue-500/10',
    purple: isActive
      ? 'border-purple-500 bg-purple-50/50 shadow-lg shadow-purple-500/10'
      : 'border-gray-100 bg-white hover:border-purple-200 hover:shadow-purple-500/10',
    green: isActive
      ? 'border-emerald-500 bg-emerald-50/50 shadow-lg shadow-emerald-500/10'
      : 'border-gray-100 bg-white hover:border-emerald-200 hover:shadow-emerald-500/10',
    orange: isActive
      ? 'border-orange-500 bg-orange-50/50 shadow-lg shadow-orange-500/10'
      : 'border-orange-100 bg-[#fffef4] hover:border-orange-300 hover:shadow-orange-500/10',
    pink: isActive
      ? 'border-pink-500 bg-pink-50/50 shadow-lg shadow-pink-500/10'
      : 'border-gray-100 bg-white hover:border-pink-200 hover:shadow-pink-500/10',
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
    <button
      onClick={onClick}
      className={`relative group border transition-all duration-500 ease-out rounded-xl p-4 sm:p-5 text-left w-full h-full
        hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${colors[step.color]} ${className} ${isActive ? '-translate-y-1 scale-[1.01]' : ''}`}
    >
      <div
        className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-500 ${numCircle[step.color]} ${isActive ? 'scale-110 shadow-md' : 'group-hover:scale-110 group-hover:rotate-6'}`}
      >
        {step.num}
      </div>

      <div className="flex flex-col h-full">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-500 ${isActive ? 'scale-110 bg-white border border-current shadow-sm' : 'group-hover:scale-110 group-hover:rotate-3'} ${iconCircle[step.color]}`}
        >
          <Icon className="w-5 h-5 flex-shrink-0" />
        </div>
        <h3
          className={`font-bold text-[14px] mb-1 leading-tight transition-colors duration-300 ${isActive ? 'text-[#e25d24]' : 'text-[#1f2937] group-hover:text-[#e25d24]'}`}
        >
          {step.title}
        </h3>
        <p className="text-[12px] text-gray-400 leading-relaxed mb-4 flex-1 transition-colors duration-300 group-hover:text-gray-500">
          {step.desc}
        </p>
        <span
          className={`inline-block self-start px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border
          ${isActive ? 'bg-[#e25d24] text-white border-transparent' : 'text-gray-500 bg-gray-50 border-gray-100 group-hover:bg-[#e25d24] group-hover:text-white group-hover:border-transparent'}`}
        >
          {step.tag}
        </span>
      </div>
    </button>
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

export const Diagram = ({ activeIndex = 0, onStepClick = () => {} }) => {
  return (
    <section className="w-full bg-white overflow-x-auto no-scrollbar">
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

            {steps.slice(0, 4).map((step, idx) => (
              <StepCard
                key={step.id}
                step={step}
                isActive={activeIndex === idx}
                onClick={() => onStepClick(idx)}
                className="z-10"
              />
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
              <StepCard
                step={steps[4]}
                isActive={activeIndex === 4}
                onClick={() => onStepClick(4)}
                className="z-10"
              />
              <HorizontalArrow className="top-[45%] left-[102%] w-[98%]" />
            </div>
            <div className="col-start-4">
              <StepCard
                step={steps[5]}
                isActive={activeIndex === 5}
                onClick={() => onStepClick(5)}
                className="z-10"
              />
            </div>
          </div>

          <VerticalArrow className="left-[37.5%] bottom-[-85px] h-20" />
        </div>

        {/* Phase: Deploy (Step 7) */}
        <div className="relative mb-12">
          <div className="inline-block bg-orange-50/50 text-orange-600 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-orange-100/50">
            Deploy
          </div>

          <button
            onClick={() => onStepClick(6)}
            className={`w-full group border rounded-xl p-6 sm:p-8 relative transition-all duration-500 ease-out text-left
              ${activeIndex === 6 ? 'border-emerald-500 bg-emerald-50/50 shadow-lg -translate-y-1 scale-[1.01]' : 'border-green-200 bg-[#f9fffb] hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl hover:border-emerald-300'}`}
          >
            <div
              className={`absolute top-3 right-4 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-500
              ${activeIndex === 6 ? 'bg-emerald-700 scale-110' : 'bg-emerald-600 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-emerald-700'} text-white`}
            >
              07
            </div>
            <div className="flex items-center gap-8">
              <div
                className={`w-16 h-16 rounded-xl bg-white border flex items-center justify-center shrink-0 shadow-sm transition-all duration-500
                ${activeIndex === 6 ? 'border-emerald-200 scale-110 shadow-md' : 'border-green-100 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md'}`}
              >
                <Shield
                  className={`w-8 h-8 transition-colors duration-500 ${activeIndex === 6 ? 'text-emerald-700' : 'text-emerald-500 group-hover:text-emerald-600'}`}
                />
              </div>
              <div className="flex-1">
                <h3
                  className={`text-[18px] font-bold mb-1.5 transition-colors duration-300 ${activeIndex === 6 ? 'text-emerald-900' : 'text-[#1f2937] group-hover:text-emerald-900'}`}
                >
                  {steps[6].title}
                </h3>
                <p
                  className={`text-[14px] leading-relaxed max-w-4xl transition-colors duration-300 ${activeIndex === 6 ? 'text-emerald-700' : 'text-gray-500 group-hover:text-gray-600'}`}
                >
                  {steps[6].desc}
                </p>
                <div className="flex gap-3 mt-4">
                  {steps[6].tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border transition-all duration-300
                        ${activeIndex === 6 ? 'bg-white border-emerald-200 text-emerald-700' : 'bg-emerald-50/50 text-emerald-600 border-transparent group-hover:bg-white group-hover:border-emerald-200'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </button>

          <VerticalArrow className="left-1/2 -translate-x-1/2 bottom-[-40px] h-10" />
        </div>

        {/* Final Result Box */}
        <div className="group bg-[#ebf3ff]/60 border border-blue-100 rounded-xl p-6 flex items-center gap-6 relative transition-all duration-700 ease-in-out hover:bg-blue-50/80 hover:shadow-xl hover:border-blue-200 cursor-default overflow-hidden">
          {/* Inner Light Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

          <div className="h-16 w-16 bg-white rounded-xl border border-blue-50 flex items-center justify-center shrink-0 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-md z-10">
            <Check className="w-9 h-9 text-blue-500 stroke-[3] transition-all duration-500 group-hover:scale-110" />
          </div>
          <div className="flex-1 z-10">
            <h3 className="text-[16px] sm:text-[20px] font-bold text-[#1b449b] mb-1 transition-colors duration-300 group-hover:text-blue-900">
              Production-ready system — from idea to integrated stack
            </h3>
            <p className="text-[13px] text-[#1b449b]/60 font-semibold tracking-wide transition-colors duration-300 group-hover:text-blue-700">
              Human-directed · AI-powered · Fully documented · Instantly
              deployed
            </p>
          </div>
          <div className="absolute right-0 top-0 bottom-0 px-6 flex items-center border-l border-blue-100 hidden md:flex transition-all duration-500 group-hover:bg-blue-50/50">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] opacity-30 transition-all duration-500 group-hover:opacity-60 group-hover:text-blue-500">
              Think4Ever platform
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
