import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Building2,
  Check,
  Code,
  Heart,
  Mail,
  Rocket,
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
      'For solo developers, freelancers, founders, and small builders shipping AI-powered products.',
    price: '25',
    unit: '/ month per builder',
    features: [
      '500 credits included (which equals $25)',
      'Up to 3 projects',
      'Structured system design + code generation',
      'BYOK (bring your own model)',
      'Add credits as needed 5 cents / credit',
    ],
    buttonText: 'Get Early Access',
    buttonIcon: Rocket,
    href: 'https://portal.think4ever.com',
  },
  {
    title: 'Think Big',
    icon: Heart,
    iconBg: 'bg-[#f0fdf4]',
    iconColor: 'text-[#22c55e]',
    description:
      'For developer teams, multi developer environments',
    price: '250',
    unit: '/ month',
    features: [
      'Up to 5 users included',
      'Up to 5 projects',
      'Structured system design + code generation',
      'BYOK (bring your own model)',
      'Add credits as needed 5 cents / credit',
      'Shared project environments',
      'Usage pooling across team',
      'Admin controls + caps',
      'Priority system orchestration',
    ],
    buttonText: 'Get Early Access',
    buttonIcon: Rocket,
    href: 'https://portal.think4ever.com',
  },
  {
    title: 'Think Blue',
    icon: Building2,
    iconBg: 'bg-[#fffbeb]',
    iconColor: 'text-[#f59e0b]',
    description:
      'For organizations with more sophisticated environments, larger scale and tailored deployment models',
    price: 'Custom pricing',
    unit: '',
    features: [
      'Scales to enterprise teams',
      'Private deployment options',
      'Custom usage pools + cost controls',
      'Dedicated support + onboarding',
    ],
    buttonText: 'Contact Sales',
    buttonIcon: Mail,
    href: '/contact-us',
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
                {isNaN(plan.price) ? '' : '$'}
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
                {plan.usageHeader}
              </span>{' '}
              {plan.usageNote}
            </div>
          )}

          <Button
            asChild
            variant={plan.title === 'Think Blue' ? 'default' : 'orange'}
            className={cn(
              "w-full h-12 rounded-lg font-bold text-[14px] flex items-center justify-center gap-2 transition-all",
              plan.title === 'Think Blue' ? "bg-[#5c67f2] hover:bg-[#4a54d1]" : ""
            )}
          >
            <Link href={plan.href}>
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
