import GlobalInput from '@/components/globals/GlobalInput';
import GlobalSelect from '@/components/globals/GlobalSelect';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, Rocket } from 'lucide-react';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';

const smartFormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(32, 'Max 32 characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(32, 'Max 32 characters'),
  workEmail: z.string().email('Please enter a valid email address'),
  companyName: z.string().min(1, 'Company name is required'),
  website: z
    .string()
    .url('Please enter a valid URL (e.g., https://example.com)'),
  country: z.string().min(1, 'Country is required'),
  role: z.string().min(1, 'Role/Title is required'),
  lifecycle: z.string().min(1, 'Please select a lifecycle stage'),
  primaryNeeds: z
    .array(z.string())
    .min(1, 'Please select at least one primary need')
    .max(5, 'Select up to 5 needs'),
  timeline: z.string().min(1, 'Please select a timeline'),
  notes: z.string().optional(),
  agreed: z.boolean().refine((val) => val === true, {
    message: 'Agreement required',
  }),
});

const LIFECYCLE_STAGES = [
  { label: 'Exploring Concept', value: 'exploring' },
  { label: 'Planning MVP', value: 'planning_mvp' },
  { label: 'Building MVP', value: 'building_mvp' },
  { label: 'Live Product', value: 'live_product' },
  { label: 'Scaling Product', value: 'scaling' },
  { label: 'Modernizing Existing Systems', value: 'modernizing' },
];

const PRIMARY_NEEDS = [
  'Design the right architecture upfront',
  'Simplify SDLC stack with fewer tools',
  'Build AI agents or automation workflows',
  'Accelerate development with AI-generated code',
  'Keep systems aligned as complexity grows',
  'See system dependencies and change impact in real time',
  'Reduce rework caused by fragmented delivery',
  'Improve governance, approvals, and control',
  'Modernize legacy systems safely',
  'Evaluate Think4Ever for future use',
];

const TIMELINE_OPTIONS = [
  { label: 'Immediately', value: 'immediately' },
  { label: 'Within 1 month', value: '1_month' },
  { label: '1-3 months', value: '1_3_months' },
  { label: '3+ months', value: '3_plus_months' },
];

const SmartContactForm = ({ onSubmit, segment, segmentPath }) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(smartFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      workEmail: '',
      companyName: '',
      website: '',
      country: '',
      role: '',
      lifecycle: '',
      primaryNeeds: [],
      timeline: '',
      notes: '',
      agreed: false,
    },
  });

  const selectedNeeds = watch('primaryNeeds') || [];

  const handleNeedToggle = (need) => {
    if (selectedNeeds.includes(need)) {
      setValue(
        'primaryNeeds',
        selectedNeeds.filter((n) => n !== need),
      );
    } else if (selectedNeeds.length < 5) {
      setValue('primaryNeeds', [...selectedNeeds, need]);
    }
  };

  const inputStyles = {
    labelClassName: "text-[13px] font-semibold text-gray-600 mb-1.5",
    inputClassName: "h-10 text-[14px] border-gray-200 rounded-md shadow-none focus:ring-[#5c67f2] font-medium",
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 pb-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
          Almost there!
        </h1>
        <p className="text-gray-600 font-medium text-[15px]">
          Please provide your contact details to complete the application.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Card className="p-6 sm:p-8 space-y-6 shadow-sm border-gray-100 rounded-lg bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <GlobalInput
              label="First Name"
              placeholder="Enter your first name"
              required
              {...inputStyles}
              {...register('firstName')}
              error={errors.firstName?.message}
            />
            <GlobalInput
              label="Last Name"
              placeholder="Enter your last name"
              required
              {...inputStyles}
              {...register('lastName')}
              error={errors.lastName?.message}
            />
          </div>

          <GlobalInput
            label="Work Email"
            type="email"
            placeholder="you@company.com"
            required
            {...inputStyles}
            {...register('workEmail')}
            error={errors.workEmail?.message}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <GlobalInput
              label="Company Name"
              placeholder="Your company"
              required
              {...inputStyles}
              {...register('companyName')}
              error={errors.companyName?.message}
            />
            <GlobalInput
              label="Segment"
              isReadOnly
              value={segment}
              {...inputStyles}
              inputClassName={cn(
                inputStyles.inputClassName,
                'bg-gray-50 cursor-not-allowed opacity-70',
              )}
            />
          </div>

          <GlobalInput
            label="Company Website"
            placeholder="https://example.com"
            required
            {...inputStyles}
            {...register('website')}
            error={errors.website?.message}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <GlobalInput
              label="Country"
              placeholder="Your country"
              required
              {...inputStyles}
              {...register('country')}
              error={errors.country?.message}
            />
            <GlobalInput
              label="Role / Title"
              placeholder="e.g., CTO, VP Engineering"
              required
              {...inputStyles}
              {...register('role')}
              error={errors.role?.message}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Controller
              name="lifecycle"
              control={control}
              render={({ field }) => (
                <GlobalSelect
                  label="SDLC Lifecycle Stage"
                  placeholder="Select one"
                  required
                  options={LIFECYCLE_STAGES}
                  value={field.value}
                  onChange={field.onChange}
                  labelClassName={inputStyles.labelClassName}
                  selectClassName={inputStyles.inputClassName}
                  error={errors.lifecycle?.message}
                />
              )}
            />
            <Controller
              name="timeline"
              control={control}
              render={({ field }) => (
                <GlobalSelect
                  label="Desired Start Timeline"
                  placeholder="Select timeline"
                  required
                  options={TIMELINE_OPTIONS}
                  value={field.value}
                  onChange={field.onChange}
                  labelClassName={inputStyles.labelClassName}
                  selectClassName={inputStyles.inputClassName}
                  error={errors.timeline?.message}
                />
              )}
            />
          </div>

          <div className="space-y-4 pt-4">
            <label className="text-[16px] font-semibold text-gray-900 block mb-4">
              Primary Need (ranked up to 5)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {PRIMARY_NEEDS.map((need) => (
                <label
                  key={need}
                  className={cn(
                    "flex items-start p-4 border rounded-lg cursor-pointer transition-all duration-200",
                    selectedNeeds.includes(need)
                      ? "border-[#5c67f2] bg-blue-50/20"
                      : "border-gray-100 hover:border-gray-300 hover:bg-gray-50",
                  )}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={selectedNeeds.includes(need)}
                    onChange={() => handleNeedToggle(need)}
                  />
                  <div
                    className={cn(
                      "w-4 h-4 rounded-[3px] border-2 flex items-center justify-center mr-3 transition-all mt-[3px] shrink-0",
                      selectedNeeds.includes(need)
                        ? "border-[#5c67f2] bg-[#5c67f2]"
                        : "border-gray-300",
                    )}
                  >
                    {selectedNeeds.includes(need) && (
                      <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />
                    )}
                  </div>
                  <span className="font-medium text-[14px] text-gray-700 leading-tight">
                    {need}
                  </span>
                </label>
              ))}
            </div>
            {errors.primaryNeeds && (
              <p className="mt-2 text-sm text-red-500 font-medium">
                {errors.primaryNeeds.message}
              </p>
            )}
          </div>

          <GlobalInput
            label="Anything Important We Should Know?"
            placeholder="Tell us about your specific challenges or goals..."
            isTextarea
            rows={4}
            {...inputStyles}
            inputClassName={cn(inputStyles.inputClassName, 'min-h-[120px]')}
            {...register('notes')}
          />

          <div className="flex flex-col gap-2 pt-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  className="peer h-4 w-4 cursor-pointer appearance-none rounded-[3px] border border-gray-300 transition-all checked:bg-[#5c67f2] checked:border-[#5c67f2]"
                  {...register('agreed')}
                />
                <Check className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
              </div>
              <span className="text-[13px] text-gray-500 font-medium select-none leading-none">
                I agree to the{' '}
                <Link href="/privacy-policy" className="text-[#5c67f2] hover:underline">
                  Terms & Privacy Policy
                </Link>{' '}
                and to be contacted.
              </span>
            </label>
            {errors.agreed && (
              <p className="text-[11px] text-red-500 ml-7 font-black">
                Agreement required
              </p>
            )}
          </div>
        </Card>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 text-[15px] font-bold bg-[#5c67f2] hover:bg-[#4a54d1] shadow-lg shadow-blue-500/10 active:scale-[0.98] transition-all rounded-lg flex items-center justify-center gap-2"
        >
          <Rocket size={16} />
          {isSubmitting 
            ? 'Sending Application...' 
            : segmentPath === 'self-serve' 
              ? 'Continue to Pricing' 
              : 'Request Early Access'}
        </Button>
      </form>
    </div>
  );
};

export default SmartContactForm;
