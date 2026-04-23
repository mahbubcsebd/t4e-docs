"use client";
import React from 'react';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Check, 
  Mail, 
  Zap, 
  PlayCircle, 
  FileText, 
  User, 
  Lock, 
  ShieldCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import GlobalInput from '@/components/globals/GlobalInput';

// Zod Schema with specific descriptive messages
const checkoutSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(40, 'First name is too long'),
  lastName: z.string().min(1, 'Last name is required').max(40, 'Last name is too long'),
  email: z.string().min(1, 'Email address is required').email('Email address is invalid').max(100),
  companyName: z.string().max(100).optional(),
  cardNumber: z.string().min(1, 'Card number is required').min(19, 'Card number must be 16 digits'),
  expiryDate: z.string().min(1, 'Expiry date is required').min(7, 'Invalid expiry date format'),
  cvc: z.string().min(1, 'CVC is required').min(3, 'CVC must be 3-4 digits').max(4),
  agreed: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms to proceed',
  }),
});

const CheckoutPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      agreed: false,
      cardNumber: '',
      expiryDate: '',
    }
  });

  const onSubmit = async (data) => {
    console.log('--- Checkout Submission Data ---');
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('Subscription confirmed! Your credentials have been sent to ' + data.email);
  };

  // Helper to format card number: #### #### #### ####
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    return parts.length ? parts.join(' ') : v;
  };

  // Improved Expiry Date Formatter: MM / YY
  const formatExpiryDate = (value) => {
    let v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length > 4) v = v.slice(0, 4);
    
    if (v.length >= 3) {
      return `${v.slice(0, 2)} / ${v.slice(2)}`;
    } else if (v.length === 2 && value.length === 2) {
      // Auto-add separator when 2nd digit is typed
      return `${v} / `;
    }
    return v;
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] pt-24 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-12 text-left px-4 lg:px-0">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Checkout</span>
          </div>
          <h1 className="text-[26px] sm:text-[32px] font-bold text-[#1f2937] mb-3 tracking-tight">
            Complete Your Purchase
          </h1>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl font-medium">
            Supercharge your development workflow with the SDLC Engineering Platform. Secure your seat today.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row gap-12 items-start px-4 lg:px-0">
          
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            
            {/* Billing Information Card */}
            <div className="bg-white border border-gray-100 rounded-md p-6 sm:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-50 text-[#5c67f2] rounded-md">
                   <User className="h-4 w-4" />
                </div>
                <h3 className="text-[15px] font-bold text-[#1f2937]">Billing Information</h3>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <GlobalInput
                    label="First Name"
                    placeholder="John"
                    required
                    labelClassName="text-[12px] font-bold text-gray-600"
                    inputClassName="h-10 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
                    {...register('firstName')}
                    error={errors.firstName?.message}
                  />
                  <GlobalInput
                    label="Last Name"
                    placeholder="Doe"
                    required
                    labelClassName="text-[12px] font-bold text-gray-600"
                    inputClassName="h-10 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
                    {...register('lastName')}
                    error={errors.lastName?.message}
                  />
                </div>

                <GlobalInput
                  label="Email Address"
                  type="email"
                  placeholder="john@company.com"
                  required
                  labelClassName="text-[12px] font-bold text-gray-600"
                  inputClassName="h-10 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
                  {...register('email')}
                  error={errors.email?.message}
                />

                <GlobalInput
                  label="Company Name"
                  placeholder="Your organization (optional)"
                  labelClassName="text-[12px] font-bold text-gray-600"
                  inputClassName="h-10 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
                  {...register('companyName')}
                  error={errors.companyName?.message}
                />
              </div>
            </div>

            {/* Payment Details Card */}
            <div className="bg-white border border-gray-100 rounded-md p-6 sm:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-50 text-[#5c67f2] rounded-md">
                   <Lock className="h-4 w-4" />
                </div>
                <h3 className="text-[15px] font-bold text-[#1f2937]">Payment Details</h3>
              </div>

              <div className="space-y-5">
                <Controller
                  name="cardNumber"
                  control={control}
                  render={({ field }) => (
                    <GlobalInput
                      label="Card Number"
                      placeholder="0000 0000 0000 0000"
                      required
                      labelClassName="text-[12px] font-bold text-gray-600"
                      inputClassName="h-10 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
                      maxLength={19}
                      value={field.value}
                      onChange={(e) => field.onChange(formatCardNumber(e.target.value))}
                      error={errors.cardNumber?.message}
                    />
                  )}
                />

                <div className="grid grid-cols-2 gap-5">
                  <Controller
                    name="expiryDate"
                    control={control}
                    render={({ field }) => (
                      <GlobalInput
                        label="Expiry Date"
                        placeholder="MM / YY"
                        required
                        labelClassName="text-[12px] font-bold text-gray-600"
                        inputClassName="h-10 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
                        maxLength={7}
                        value={field.value}
                        onChange={(e) => field.onChange(formatExpiryDate(e.target.value))}
                        error={errors.expiryDate?.message}
                      />
                    )}
                  />
                  <GlobalInput
                    label="CVC"
                    placeholder="123"
                    type="password"
                    required
                    labelClassName="text-[12px] font-bold text-gray-600"
                    inputClassName="h-10 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
                    maxLength={4}
                    {...register('cvc')}
                    error={errors.cvc?.message}
                  />
                </div>

                <div className="pt-6 flex flex-wrap justify-center gap-8 text-[10px] text-gray-400 font-bold uppercase tracking-wider border-t border-gray-50 mt-4">
                  <div className="flex items-center gap-1.5 opacity-70">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" /> PCI Compliant
                  </div>
                  <div className="flex items-center gap-1.5 opacity-70">
                    <Lock className="h-3.5 w-3.5" /> 256-bit SSL
                  </div>
                  <div className="flex items-center gap-1.5 opacity-70">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#5c67f2]" /> Powered by Stripe
                  </div>
                </div>
              </div>
            </div>

            {/* Terms & Subscription Button */}
            <div className="space-y-5 pt-2">
              <div className="flex flex-col gap-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center mt-0.5">
                    <input
                      type="checkbox"
                      className="peer h-4 w-4 cursor-pointer appearance-none rounded-[3px] border border-gray-300 transition-all checked:bg-[#5c67f2] checked:border-[#5c67f2] focus:ring-2 focus:ring-offset-2 focus:ring-[#5c67f2]/20"
                      {...register('agreed')}
                    />
                    <Check className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-[12px] text-gray-500 font-bold select-none leading-relaxed">
                    I agree to the <Link href="#" className="text-[#5c67f2] hover:underline">Terms of Service</Link>, <Link href="#" className="text-[#5c67f2] hover:underline">Privacy Policy</Link>, and <Link href="#" className="text-[#5c67f2] hover:underline">Cancellation Policy</Link>.
                  </span>
                </label>
                {errors.agreed && (
                  <p className="text-[10px] text-red-500 ml-7 font-black">Agreement required</p>
                )}
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-[#5c67f2] hover:bg-[#4a54d1] text-white rounded-md font-bold text-[15px] flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]"
              >
                <Lock size={16} strokeWidth={2.5} />
                {isSubmitting ? 'Processing...' : 'Confirm Subscription & Pay'}
              </Button>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="w-full lg:w-[360px] space-y-6">
            
            {/* Order Summary Card */}
            <div className="bg-white border border-gray-100 rounded-md p-6 shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 text-[#5c67f2] rounded-md">
                   <FileText size={16} />
                </div>
                <h3 className="text-[15px] font-bold text-[#1f2937]">Order Summary</h3>
              </div>

              <div className="border-b border-gray-50 pb-6 mb-6">
                <h4 className="text-[14px] font-bold text-gray-900 mb-1">Independent Developers</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[#1f2937]">$25</span>
                  <span className="text-gray-400 font-bold text-[11px]">/ seat / mo</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] mb-4">WHAT'S INCLUDED</h5>
                  <ul className="space-y-3">
                    {[
                      '100 orchestration credits',
                      'Full platform access',
                      'Pay-as-you-go overages'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5" strokeWidth={3} />
                        <span className="text-[11px] text-gray-500 font-bold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 border border-dashed border-gray-200 rounded-md p-4">
                  <p className="text-[10px] text-gray-400 leading-relaxed font-bold">
                    <span className="text-gray-600">Note:</span> Overage billed at $0.15/credit.
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-gray-50">
                  <div className="flex justify-between text-[12px] font-bold">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-gray-900">$25.00</span>
                  </div>
                  <div className="flex justify-between text-[12px] font-bold">
                    <span className="text-gray-400">Tax</span>
                    <span className="text-gray-900">$0.00</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-4 border-t border-gray-100">
                    <span className="text-[15px] font-bold text-gray-900 tracking-tight">Total Due</span>
                    <span className="text-[18px] font-bold text-[#5c67f2]">$25.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Post-Purchase Journey */}
            <div className="bg-white border border-gray-100 rounded-md p-6 shadow-sm">
               <h3 className="text-[15px] font-bold text-[#1f2937] mb-6">Your Journey Starts Here</h3>
               <div className="space-y-6">
                {[
                  { title: 'Instant Workspace', desc: 'Account ready in under 60 seconds.', icon: Zap },
                  { title: 'Email Onboarding', desc: 'Step-by-step setup guide sent now.', icon: Mail },
                  { title: 'Personalized Roadmap', desc: 'Access your custom success plan.', icon: PlayCircle }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-3 items-start group">
                      <div className="h-8 w-8 shrink-0 rounded-md bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-[#5c67f2] transition-colors mt-0.5">
                        <Icon size={14} />
                      </div>
                      <div>
                        <h4 className="text-[12px] font-bold text-gray-900 leading-none">{item.title}</h4>
                        <p className="text-[11px] text-gray-500 leading-relaxed mt-1.5 font-bold">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
               </div>
            </div>

            {/* Help/Security Card */}
            <div className="bg-[#f5f8ff] border border-[#dbeafe] rounded-md p-6 flex flex-col items-center">
              <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 text-[#5c67f2]">
                <ShieldCheck size={20} strokeWidth={2.5} />
              </div>
              <h4 className="font-bold text-[#1f2937] text-[14px] mb-1.5 tracking-tight text-center">Secure Payment Guarantee</h4>
              <p className="text-center text-[10px] text-gray-400 mb-0 leading-relaxed font-bold uppercase tracking-wider">
                Full 256-bit encryption active
              </p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CheckoutPage;
