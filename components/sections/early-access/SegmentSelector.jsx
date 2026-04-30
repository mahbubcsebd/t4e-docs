import React from 'react';
import { Card } from '@/components/ui/card';
import { Check, User, Building2, Briefcase, Zap } from 'lucide-react';

const BENEFITS = [
  "Early use of the platform before broader release",
  "Fast, self-serve onboarding and setup resources",
  "Ability to begin building sooner",
  "Access to current launch pricing and plans",
  "Opportunity to share feedback as the platform evolves"
];

const SEGMENTS = [
  { id: 'independent', title: 'Independent Developer', icon: User, path: 'self-serve' },
  { id: 'startup', title: 'Start-ups & New Ventures', icon: Zap, path: 'self-serve' },
  { id: 'saas', title: 'Software & Saas Company', icon: Building2, path: 'sales-assisted' },
  { id: 'integrator', title: 'Systems Integrator / Consultancy', icon: Briefcase, path: 'sales-assisted' },
  { id: 'enterprise', title: 'Enterprise & Mid Size Business', icon: Building2, path: 'sales-assisted' },
];

const SegmentSelector = ({ onSelect }) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight">Get Early Access to Think4Ever</h1>
        <p className="text-[15px] text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
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

      <div className="space-y-4 pt-4">
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-900">Which best describes your organization?</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SEGMENTS.map((segment) => {
            const Icon = segment.icon;
            return (
              <button
                key={segment.id}
                onClick={() => onSelect(segment)}
                className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg hover:border-[#5c67f2] hover:shadow-md transition-all group text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-blue-50 transition-colors border border-gray-100 group-hover:border-blue-100">
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-[#5c67f2]" />
                </div>
                <span className="font-semibold text-gray-900 text-[15px] group-hover:text-[#5c67f2] transition-colors">{segment.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SegmentSelector;
