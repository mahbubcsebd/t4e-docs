import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Building2,
  Check,
  Code,
  Heart,
  Mail,
  ShoppingCart,
} from 'lucide-react';
import Link from 'next/link';

const pricingPlans = [
  {
    title: 'Think New',
    icon: Code,
    iconBg: 'bg-[#eef2ff]',
    iconColor: 'text-[#6366f1]',
    description:
      'For solo developers, freelancers, founders, and small builder teams shipping AI-powered products.',
    price: '25',
    unit: '/ seat / month',
    features: [
      'BYOK supported',
      'Includes 100 monthly orchestration credits',
      'Additional credits from $0.50–$1.50 depending on workload',
      'Monthly managed usage caps apply',
    ],
    usageHeader: 'AI Usage & Billing:',
    usageNote:
      'Orchestration credits power AI tasks such as system generation, build workflows, and automation actions.',
    buttonText: 'Buy Now',
    buttonIcon: ShoppingCart,
  },
  {
    title: 'Think Big',
    icon: Heart,
    iconBg: 'bg-[#f0fdf4]',
    iconColor: 'text-[#22c55e]',
    description:
      'For system integrators, consulting firms, and technology partners.',
    price: 'Custom Pricing',
    prefix: null,
    unit: '',
    features: [
      'BYOK supported',
      'Custom team credit packages',
      'Shared usage pools available',
      'Project-based pricing',
      'Admin controls and monthly caps',
    ],
    usageHeader: 'AI Usage & Billing:',
    buttonText: 'Contact Sales',
    buttonIcon: Mail,
  },
  {
    title: 'Think Blue',
    icon: Building2,
    iconBg: 'bg-[#fffbeb]',
    iconColor: 'text-[#f59e0b]',
    description:
      'For large organizations requiring advanced governance, security, scale, and tailored deployment models.',
    price: 'Custom Pricing',
    unit: '',
    features: [
      'BYOK supported',
      'Private deployment options',
      'Annual volume licensing',
      'Custom usage pools and caps',
      'Enterprise billing controls',
    ],
    usageHeader: 'AI Usage & Billing:',
    buttonText: 'Contact Sales',
    buttonIcon: Mail,
  },
];

const PricingPlans = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
      {pricingPlans.map((plan, i) => (
        <div
          key={i}
          className="flex flex-col bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
        >
          {/* Icon Box */}
          <div
            className={cn(
              'h-10 w-10 rounded-lg flex items-center justify-center mb-6',
              plan.iconBg,
              plan.iconColor,
            )}
          >
            <plan.icon size={20} />
          </div>

          {/* Title & Description */}
          <h2 className="text-2xl font-bold text-[#111827] mb-2">
            {plan.title}
          </h2>
          <p className="text-[14px] text-gray-500 leading-relaxed mb-8 min-h-[60px]">
            {plan.description}
          </p>

          {/* Pricing */}
          <div className="mb-8 min-h-[80px]">
            {plan.prefix && (
              <div className="text-[13px] text-gray-400 mb-1">
                {plan.prefix}
              </div>
            )}
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-[#111827]">
                {plan.price !== 'Custom Pricing' ? '$' : ''}
                {plan.price}
              </span>
              <span className="text-gray-400 text-sm font-medium">
                {plan.unit}
              </span>
            </div>
            {plan.priceNote && (
              <div className="text-[13px] text-gray-500 mt-2 font-medium">
                {plan.priceNote}
              </div>
            )}
          </div>

          <div className="h-[1px] bg-gray-100 w-full mb-8" />

          {/* Features */}
          <ul className="space-y-4 mb-8 flex-1">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="h-4 w-4 text-gray-400 shrink-0 mt-1" />
                <span className="text-[14px] text-gray-600 leading-snug">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* Additional Note (FYI for Think New) */}
          {plan.usageNote && (
            <div className="mb-8 text-[13px] text-gray-500 leading-relaxed">
              <span className="font-bold text-gray-700">
                AI Usage & Billing:
              </span>{' '}
              {plan.usageNote}
            </div>
          )}

          <Button
            asChild
            className="w-full h-12 bg-[#5c67f2] hover:bg-[#4a54d1] text-white rounded-lg font-bold text-[14px] flex items-center justify-center gap-2 transition-all"
          >
            <Link
              href={
                plan.title === 'Think New'
                  ? '/checkout/indie-devs'
                  : '/get-early-access'
              }
            >
              <plan.buttonIcon size={16} />
              {plan.buttonText}
            </Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
