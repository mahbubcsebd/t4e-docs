'use client';
import GlobalInput from '@/components/globals/GlobalInput';
import GlobalSelect from '@/components/globals/GlobalSelect';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';

const contactSchema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  email: z.string().min(1, 'Required').email('Invalid email'),
  companyName: z.string().min(1, 'Required'),
  companySize: z.string().min(1, 'Required'),
  segment: z.string().min(1, 'Required'),
  userRole: z.string().min(1, 'Required'),
  primaryNeeds: z.array(z.string()).max(5, 'Select up to 5'),
  interests: z.string().optional(),
  agreed: z.boolean().refine((val) => val === true, {
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

const segmentOptions = [
  { label: 'Independent Developers', value: 'Independent Developers' },
  { label: 'Start ups & New Ventures', value: 'Start ups & New Ventures' },
  { label: 'Software & SaaS', value: 'Software & SaaS' },
  {
    label: 'Systems Integrators / Consultants',
    value: 'Systems Integrators / Consultants',
  },
  {
    label: 'Enterprise & Mid-size Business',
    value: 'Enterprise & Mid-size Business',
  },
];

const primaryNeedOptions = [
  'Ammend and fix existing code',
  'Design the right architecture upfront',
  'Simplify SDLC stack with fewer tools',
  'Build AI agents or automation workflows',
  'Keep systems aligned as complexity grows',
  'See system dependencies and change impact in real time',
  'Reduce rework caused by fragmented delivery',
  'Improve governance, approvals, and control',
  'Modernize legacy systems safely',
  'Evaluate Think4Ever for future use',
];

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      agreed: false,
      companySize: '',
      segment: '',
      primaryNeeds: [],
    },
  });

  const selectedNeeds = watch('primaryNeeds');

  const handleNeedChange = (need, onChange) => {
    const current = selectedNeeds || [];
    if (current.includes(need)) {
      onChange(current.filter((n) => n !== need));
    } else if (current.length < 5) {
      onChange([...current, need]);
    }
  };

  const onSubmit = async (data) => {
    console.log('Form Data:', data);

    // HubSpot Tracking
    if (typeof window !== 'undefined' && window._hsq) {
      window._hsq.push([
        'identify',
        {
          email: data.email,
          firstname: data.firstName,
          lastname: data.lastName,
          company: data.companyName,
          jobtitle: data.userRole,
          // Custom properties
          company_size: data.companySize,
          user_type: data.userType,
          message: data.interests,
        },
      ]);

      window._hsq.push(['trackEvent', { id: 'contact_us_submission' }]);
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert('Submitted Successfully!');
  };

  return (
    <div className="flex-1 bg-white border border-gray-100 rounded-lg p-6 sm:p-10 shadow-sm">
      <div className="mb-10">
        <h2 className="text-[28px] sm:text-[34px] font-bold text-[#1f2937] mb-3 tracking-tight uppercase">
          CONTACT US
        </h2>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl font-medium">
          Enter your details and a member of the Think4Ever team will follow up
          shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="segment"
          control={control}
          render={({ field }) => (
            <GlobalSelect
              label="Your Segment"
              placeholder="Select your segment"
              required
              options={segmentOptions}
              value={field.value}
              onChange={field.onChange}
              labelClassName="text-[14px] font-bold text-gray-900"
              selectClassName="h-12 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
              error={errors.segment?.message}
            />
          )}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <GlobalInput
            label="First Name"
            placeholder="Enter your first name"
            required
            labelClassName="text-[14px] font-bold text-gray-900"
            inputClassName="h-12 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
            {...register('firstName')}
            error={errors.firstName?.message}
          />
          <GlobalInput
            label="Last Name"
            placeholder="Enter your last name"
            required
            labelClassName="text-[14px] font-bold text-gray-900"
            inputClassName="h-12 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
            {...register('lastName')}
            error={errors.lastName?.message}
          />
        </div>

        <GlobalInput
          label="Work Email"
          type="email"
          placeholder="you@company.com"
          required
          labelClassName="text-[14px] font-bold text-gray-900"
          inputClassName="h-12 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
          {...register('email')}
          error={errors.email?.message}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <GlobalInput
            label="Company Name"
            placeholder="Your company"
            required
            labelClassName="text-[14px] font-bold text-gray-900"
            inputClassName="h-12 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
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
                labelClassName="text-[14px] font-bold text-gray-900"
                selectClassName="h-12 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
                error={errors.companySize?.message}
              />
            )}
          />
        </div>

        <GlobalInput
          label="Your Role"
          placeholder="e.g., CTO, VP Engineering"
          required
          labelClassName="text-[14px] font-bold text-gray-900"
          inputClassName="h-12 text-sm border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2]"
          {...register('userRole')}
          error={errors.userRole?.message}
        />

        <div className="space-y-4">
          <label className="text-[14px] font-bold text-gray-900">
            Primary Need (ranked up to 5)
          </label>
          <Controller
            name="primaryNeeds"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {primaryNeedOptions.map((option) => (
                  <label
                    key={option}
                    className={cn(
                      'flex items-center gap-3 p-3 border rounded-md cursor-pointer transition-all',
                      field.value.includes(option)
                        ? 'border-[#5c67f2] bg-blue-50/30'
                        : 'border-gray-200 hover:border-gray-300',
                    )}
                  >
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        checked={field.value.includes(option)}
                        onChange={() =>
                          handleNeedChange(option, field.onChange)
                        }
                        className="peer h-4 w-4 cursor-pointer appearance-none rounded-[3px] border border-gray-300 transition-all checked:bg-[#5c67f2] checked:border-[#5c67f2]"
                      />
                      <Check className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-[13px] text-gray-600 font-medium">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            )}
          />
          {errors.primaryNeeds && (
            <p className="text-[10px] text-red-500 font-black">
              {errors.primaryNeeds.message}
            </p>
          )}
        </div>

        <GlobalInput
          label="What are you most interested in?"
          placeholder="Tell us about your specific use case, challenges, or what features you'd like to see..."
          isTextarea
          rows={4}
          labelClassName="text-[14px] font-bold text-gray-900"
          inputClassName="text-sm border-gray-200 rounded-md min-h-[110px] shadow-none focus:ring-[#5c67f2]"
          {...register('interests')}
        />

        <div className="py-6 border-y border-gray-50 text-center">
          <p className="text-[15px] text-gray-500 font-medium italic">
            Thank you for helping us understand your business need.
          </p>
        </div>

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
              I agree to the{' '}
              <Link href="#" className="text-[#5c67f2] hover:underline">
                Privacy Policy
              </Link>{' '}
              and consent to being contacted.
            </span>
          </label>
          {errors.agreed && (
            <p className="text-[10px] text-red-500 ml-7 font-black">
              Agreement required
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-[#5c67f2] hover:bg-[#4a54d1] text-white rounded-md font-bold text-[16px] shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]"
        >
          {isSubmitting ? 'Sending...' : 'Contact Us'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
