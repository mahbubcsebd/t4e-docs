'use client';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import GlobalInput from '@/components/globals/GlobalInput';
import GlobalSelect from '@/components/globals/GlobalSelect';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Check } from 'lucide-react';
import Link from 'next/link';

const contactSchema = z.object({
  firstName: z.string().min(2, 'Required'),
  lastName: z.string().min(2, 'Required'),
  email: z.string().email('Invalid email'),
  companyName: z.string().min(2, 'Required'),
  companySize: z.string().min(1, 'Required'),
  userType: z.string().min(1, 'Required'),
  userRole: z.string().min(2, 'Required'),
  interests: z.string().optional(),
  agreed: z.boolean().refine(val => val === true, {
    message: 'Required',
  }),
});

const companySizeOptions = [
  { label: 'Select size', value: '' },
  { label: '1 - 10', value: '1-10' },
  { label: '11 - 50', value: '11-50' },
  { label: '51 - 200', value: '51-200' },
  { label: '500+', value: '500+' },
];

const userTypeOptions = [
  { label: 'Select one', value: '' },
  { label: 'Independent Developer', value: 'independent_developer' },
  { label: 'Start Up / New Venture', value: 'startup' },
  { label: 'Software & SaaS Firm', value: 'saas' },
  { label: 'SI & Consultant', value: 'si_consultant' },
  { label: 'Enterprise & Mid-Size Business', value: 'enterprise' },
];

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      agreed: false,
      companySize: '',
      userType: '',
    }
  });

  const onSubmit = async (data) => {
    console.log('Form Data:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Submitted Successfully!');
  };

  return (
    <div className="flex-1 bg-white border border-gray-100 rounded-lg p-6 sm:p-10 shadow-sm">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">General Inquiry</span>
        </div>
        <h2 className="text-[26px] sm:text-[30px] font-bold text-[#1f2937] mb-2 tracking-tight">
          Request a Product Demo
        </h2>
        <p className="text-gray-500 text-[14px] leading-relaxed max-w-2xl font-medium">
          See the SDLC Engineering Platform in action. Fill out the form and we'll schedule a personalized demo for your team.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <GlobalInput
            label="First Name"
            placeholder="Enter your first name"
            required
            labelClassName="text-[12px] font-bold text-gray-600"
            inputClassName="h-10 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
            {...register('firstName')}
            error={errors.firstName?.message}
          />
          <GlobalInput
            label="Last Name"
            placeholder="Enter your last name"
            required
            labelClassName="text-[12px] font-bold text-gray-600"
            inputClassName="h-10 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
            {...register('lastName')}
            error={errors.lastName?.message}
          />
        </div>

        <GlobalInput
          label="Work Email"
          type="email"
          placeholder="you@company.com"
          required
          labelClassName="text-[12px] font-bold text-gray-600"
          inputClassName="h-10 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
          {...register('email')}
          error={errors.email?.message}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <GlobalInput
            label="Company Name"
            placeholder="Your company"
            required
            labelClassName="text-[12px] font-bold text-gray-600"
            inputClassName="h-10 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
            {...register('companyName')}
            error={errors.companyName?.message}
          />
          <Controller
            name="companySize"
            control={control}
            render={({ field }) => (
              <GlobalSelect
                label="Company Size"
                placeholder="Select size"
                required
                options={companySizeOptions}
                value={field.value}
                onChange={field.onChange}
                labelClassName="text-[12px] font-bold text-gray-600"
                selectClassName="h-10 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
                error={errors.companySize?.message}
              />
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Controller
            name="userType"
            control={control}
            render={({ field }) => (
              <GlobalSelect
                label="I am a..."
                placeholder="Select one"
                required
                options={userTypeOptions}
                value={field.value}
                onChange={field.onChange}
                labelClassName="text-[12px] font-bold text-gray-600"
                selectClassName="h-10 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
                error={errors.userType?.message}
              />
            )}
          />
          <GlobalInput
            label="Your Role"
            placeholder="e.g., CTO, VP Engineering"
            required
            labelClassName="text-[12px] font-bold text-gray-600"
            inputClassName="h-10 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
            {...register('userRole')}
            error={errors.userRole?.message}
          />
        </div>

        <GlobalInput
          label="What are you most interested in?"
          placeholder="Tell us about your specific use case, challenges, or what features you'd like to see..."
          isTextarea
          rows={4}
          labelClassName="text-[12px] font-bold text-gray-600"
          inputClassName="text-sm border-gray-200 rounded-md min-h-[90px] shadow-none focus:ring-[#5c67f2]"
          {...register('interests')}
        />

        <div className="flex flex-col gap-2 pt-1">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                className="peer h-4 w-4 cursor-pointer appearance-none rounded-[3px] border border-gray-300 transition-all checked:bg-[#5c67f2] checked:border-[#5c67f2]"
                {...register('agreed')}
              />
              <Check className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
            </div>
            <span className="text-[12px] text-gray-500 font-bold select-none">
              I agree to the <Link href="#" className="text-[#5c67f2] hover:underline">Privacy Policy</Link> and consent to being contacted about a demo.
            </span>
          </label>
          {errors.agreed && (
            <p className="text-[10px] text-red-500 ml-7 font-black">Agreement required</p>
          )}
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-11 bg-[#5c67f2] hover:bg-[#4a54d1] text-white rounded-md font-bold text-[15px] flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]"
        >
          <CalendarIcon size={16} />
          {isSubmitting ? 'Sending...' : 'Request Demo'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
