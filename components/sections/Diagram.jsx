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
  Rocket,
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
    title: 'Set Roles and rules',
    desc: 'Define permissions, business rules and governance.',
    tag: 'Permissions',
    icon: Shield,
    color: 'green',
    num: '07',
  },
  {
    id: 8,
    title: 'Build',
    desc: 'Deploy with CI/CD integration. Auto-generated documentation ships with every deployment.',
    tag: 'CI/CD',
    icon: Rocket,
    color: 'orange',
    num: '08',
  },
];

const StepCard = ({ step, isActive, onClick, className = '' }) => {
  const Icon = step.icon;
  const colors = {
    blue: isActive ? 'border-blue-500 bg-blue-50/50 shadow-lg shadow-blue-500/10' : 'border-blue-200 shadow-sm bg-white hover:border-blue-300 hover:shadow-blue-500/10',
    purple: isActive ? 'border-purple-500 bg-purple-50/50 shadow-lg shadow-purple-500/10' : 'border-purple-200 shadow-sm bg-white hover:border-purple-300 hover:shadow-purple-500/10',
    green: isActive ? 'border-emerald-500 bg-emerald-50/50 shadow-lg shadow-emerald-500/10' : 'border-emerald-200 shadow-sm bg-white hover:border-emerald-300 hover:shadow-emerald-500/10',
    orange: isActive ? 'border-orange-500 bg-orange-50/50 shadow-lg shadow-orange-500/10' : 'border-orange-200 shadow-sm bg-[#fffef4] hover:border-orange-300 hover:shadow-orange-500/10',
    pink: isActive ? 'border-pink-500 bg-pink-50/50 shadow-lg shadow-pink-500/10' : 'border-pink-200 shadow-sm bg-white hover:border-pink-300 hover:shadow-pink-500/10',
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
        <h3 className={`font-bold text-[14px] mb-1 leading-tight transition-colors duration-300 ${isActive ? 'text-[#e25d24]' : 'text-[#1f2937] group-hover:text-[#e25d24]'}`}>
          {step.title}
        </h3>
        <p className="text-[12px] text-gray-400 leading-relaxed mb-4 flex-1 transition-colors duration-300 group-hover:text-gray-500">
          {step.desc}
        </p>
        <span className={`inline-block self-start px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border
          ${isActive ? 'bg-[#e25d24] text-white border-transparent' : 'text-gray-500 bg-gray-50 border-gray-100 group-hover:bg-[#e25d24] group-hover:text-white group-hover:border-transparent'}`}>
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
        </div>

        {/* Phase: Design & Build (Steps 5-8) */}
        <div className="relative mb-24">
          <div className="absolute top-[-30px] left-0">
            <div className="inline-block bg-pink-50/50 text-pink-600 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-[0.2em] border border-pink-100/50 xl:ml-[105px]">
              Design & Build
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 relative mt-8">
            <HorizontalArrow className="top-[45%] left-[22.5%] w-[7%]" />
            <HorizontalArrow className="top-[45%] left-[47.5%] w-[7%]" />
            <HorizontalArrow className="top-[45%] left-[72.5%] w-[7%]" />

            {steps.slice(4, 8).map((step, idx) => (
              <StepCard
                key={step.id}
                step={step}
                isActive={activeIndex === idx + 4}
                onClick={() => onStepClick(idx + 4)}
                className="z-10"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
