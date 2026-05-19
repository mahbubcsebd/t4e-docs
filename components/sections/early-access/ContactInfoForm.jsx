'use client';

import GlobalInput from '@/components/globals/GlobalInput';
import GlobalSelect from '@/components/globals/GlobalSelect';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, ChevronRight } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z
    .string()
    .min(1, 'Work email is required')
    .email('Invalid email address'),
  companyName: z.string().min(1, 'Company name is required'),
  companySize: z.string().min(1, 'Please select company size'),
  jobTitle: z.string().min(1, 'Job title is required'),
  website: z
    .string()
    .min(1, 'Company website is required')
    .url('Invalid URL (e.g., https://company.com)'),
  interest: z.string().optional(),
  privacy: z
    .boolean()
    .refine((val) => val === true, 'You must agree to the privacy policy'),
});

const COMPANY_SIZES = [
  { label: '1-10', value: '1-10' },
  { label: '11-50', value: '11-50' },
  { label: '51-200', value: '51-200' },
  { label: '201-500', value: '201-500' },
  { label: '501-1000', value: '501-1000' },
  { label: '1000+', value: '1000+' },
];

export const ContactInfoForm = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      companySize: '',
      jobTitle: '',
      website: '',
      interest: '',
      privacy: false,
    },
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
          Your Contact Information
        </h1>
        <p className="text-gray-600 font-medium text-[15px]">
          Enter your details and a member of the Think4Ever team will follow up
          shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Card className="p-6 sm:p-8 shadow-sm border-gray-100 rounded-lg bg-white">
          <div className="space-y-5">
            {/* Names Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <GlobalInput
                    label="First Name"
                    required
                    placeholder="Enter your first name"
                    {...field}
                    error={errors.firstName?.message}
                    labelClassName="text-[16px] font-semibold text-gray-900 block mb-4"
                    inputClassName="h-12 text-[15px] border-gray-200 rounded-lg focus:ring-[#5c67f2] font-medium"
                  />
                )}
              />

              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <GlobalInput
                    label="Last Name"
                    required
                    placeholder="Enter your last name"
                    {...field}
                    error={errors.lastName?.message}
                    labelClassName="text-[16px] font-semibold text-gray-900 block mb-4"
                    inputClassName="h-12 text-[15px] border-gray-200 rounded-lg focus:ring-[#5c67f2] font-medium"
                  />
                )}
              />
            </div>

            {/* Email */}
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <GlobalInput
                  label="Work Email"
                  required
                  placeholder="you@company.com"
                  {...field}
                  error={errors.email?.message}
                  labelClassName="text-[16px] font-semibold text-gray-900 block mb-4"
                  inputClassName="h-12 text-[15px] border-gray-200 rounded-lg focus:ring-[#5c67f2] font-medium"
                />
              )}
            />

            {/* Company & Size Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Controller
                name="companyName"
                control={control}
                render={({ field }) => (
                  <GlobalInput
                    label="Company Name"
                    required
                    placeholder="Your company"
                    {...field}
                    error={errors.companyName?.message}
                    labelClassName="text-[16px] font-semibold text-gray-900 block mb-4"
                    inputClassName="h-12 text-[15px] border-gray-200 rounded-lg focus:ring-[#5c67f2] font-medium"
                  />
                )}
              />

              <Controller
                name="companySize"
                control={control}
                render={({ field }) => (
                  <GlobalSelect
                    label="Company Size"
                    required
                    options={COMPANY_SIZES}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Select size"
                    error={errors.companySize?.message}
                    labelClassName="text-[16px] font-semibold text-gray-900 block mb-4"
                    selectClassName="h-12 text-[15px] border-gray-200 rounded-lg shadow-none focus:ring-[#5c67f2] font-medium"
                  />
                )}
              />
            </div>

            {/* Job & Website Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Controller
                name="jobTitle"
                control={control}
                render={({ field }) => (
                  <GlobalInput
                    label="Job Title"
                    required
                    placeholder="e.g., CTO, VP Engineering"
                    {...field}
                    error={errors.jobTitle?.message}
                    labelClassName="text-[16px] font-semibold text-gray-900 block mb-4"
                    inputClassName="h-12 text-[15px] border-gray-200 rounded-lg focus:ring-[#5c67f2] font-medium"
                  />
                )}
              />

              <Controller
                name="website"
                control={control}
                render={({ field }) => (
                  <GlobalInput
                    label="Company Website"
                    required
                    placeholder="https://company.com"
                    {...field}
                    error={errors.website?.message}
                    labelClassName="text-[16px] font-semibold text-gray-900 block mb-4"
                    inputClassName="h-12 text-[15px] border-gray-200 rounded-lg focus:ring-[#5c67f2] font-medium"
                  />
                )}
              />
            </div>

            {/* Interests */}
            <Controller
              name="interest"
              control={control}
              render={({ field }) => (
                <GlobalInput
                  label="What are you most interested in?"
                  isTextarea
                  rows={4}
                  placeholder="Tell us about your specific use case, challenges, or what features you'd like to see..."
                  {...field}
                  labelClassName="text-[16px] font-semibold text-gray-900 block mb-4"
                  inputClassName="text-[15px] border-gray-200 rounded-lg focus:ring-[#5c67f2] font-medium"
                />
              )}
            />

            {/* Privacy */}
            {/* Privacy Checkbox */}
            <Controller
              name="privacy"
              control={control}
              render={({ field }) => (
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="privacy"
                    className="flex items-start gap-3 cursor-pointer group"
                  >
                    <div className="relative mt-[2px]">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                        id="privacy"
                      />
                      <div
                        className={cn(
                          'w-4 h-4 rounded-[3px] border-2 flex items-center justify-center transition-all shrink-0',
                          field.value
                            ? 'border-[#5c67f2] bg-[#5c67f2]'
                            : 'border-gray-300 group-hover:border-gray-400',
                        )}
                      >
                        {field.value && (
                          <Check
                            className="w-2.5 h-2.5 text-white"
                            strokeWidth={4}
                          />
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 leading-normal">
                      I agree to the{' '}
                      <span className="text-[#5c67f2] underline">
                        Privacy Policy
                      </span>{' '}
                      and consent to being contacted.
                    </span>
                  </label>
                  {errors.privacy && (
                    <p className="text-red-500 text-xs ml-7">
                      {errors.privacy.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        </Card>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full h-12 text-[15px] font-bold bg-[#5c67f2] hover:bg-[#4a54d1] shadow-lg shadow-blue-500/10 active:scale-[0.98] transition-all rounded-lg flex items-center justify-center gap-2"
        >
          Submit Request <ChevronRight size={18} />
        </Button>
      </form>
    </div>
  );
};
