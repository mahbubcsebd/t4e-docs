import React from 'react';
import { Card } from '@/components/ui/card';
import { Check, Code, Zap, Cloud, Briefcase, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

const BENEFITS = [
  "Early use of the platform before broader release",
  "Fast, self-serve onboarding and setup resources",
  "Ability to begin building sooner",
  "Access to current launch pricing and plans",
  "Opportunity to share feedback as the platform evolves"
];

const SEGMENTS = [
  { 
    id: 'independent', 
    title: 'Independent Developers', 
    icon: Code, 
    path: 'self-serve',
    bg: 'bg-blue-50',
    text: 'text-blue-500',
    border: 'border-blue-100',
  },
  { 
    id: 'startup', 
    title: 'Start-ups & New Ventures', 
    icon: Zap, 
    path: 'self-serve',
    bg: 'bg-emerald-50',
    text: 'text-emerald-500',
    border: 'border-emerald-100',
  },
  { 
    id: 'saas', 
    title: 'Software & SaaS Companies', 
    icon: Cloud, 
    path: 'sales-assisted',
    bg: 'bg-orange-50',
    text: 'text-[#e25d24]',
    border: 'border-orange-100',
  },
  { 
    id: 'integrator', 
    title: 'Systems Integrators / Consultants', 
    icon: Briefcase, 
    path: 'sales-assisted',
    bg: 'bg-violet-50',
    text: 'text-violet-500',
    border: 'border-violet-100',
  },
  { 
    id: 'enterprise', 
    title: 'Enterprise & Mid-Size Business', 
    icon: Building, 
    path: 'sales-assisted',
    bg: 'bg-teal-50',
    text: 'text-teal-500',
    border: 'border-teal-100',
  },
];

const SegmentSelector = ({ onSelect }) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight">Get Early Access to Think4Ever</h1>
          <p className="text-[15px] text-gray-600 font-medium leading-relaxed">
            Join a limited group of companies using Think4Ever to design, build, and deploy production-ready systems faster.
          </p>
        </div>

        <Card className="p-6 sm:p-8 bg-white shadow-sm border-gray-100 rounded-xl">
          <h2 className="text-[17px] font-bold text-gray-900 mb-5">Early Access Gives You:</h2>
          <ul className="space-y-3">
            {BENEFITS.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 rounded-full p-0.5 border border-green-200">
                  <Check className="w-2.5 h-2.5 text-green-600" strokeWidth={3} />
                </div>
                <span className="text-gray-600 font-medium text-[14px]">{benefit}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="space-y-4 pt-4">
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-900">Which best describes your organization?</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3 xl:gap-4 relative">
          {SEGMENTS.map((segment) => {
            const Icon = segment.icon;
            return (
              <button
                key={segment.id}
                onClick={() => onSelect(segment)}
                className="group bg-white border border-gray-100 rounded-xl p-5 flex flex-col items-center text-center shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-1.5 transition-all cursor-pointer"
              >
                <div
                  className={cn(
                    'h-12 w-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3',
                    segment.bg,
                    segment.text,
                    'border',
                    segment.border,
                  )}
                >
                  <Icon size={20} strokeWidth={2.5} />
                </div>
                <h4 className="text-[13px] xl:text-[14px] font-bold text-gray-900 leading-snug group-hover:text-[#3b82f6] transition-colors">
                  {segment.title}
                </h4>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SegmentSelector;
