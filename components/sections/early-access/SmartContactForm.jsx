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
  country: z.string().min(1, 'Country is required'),
  role: z.string().min(1, 'Role/Title is required'),
  lifecycle: z.string().min(1, 'Please select a lifecycle stage'),
  primaryNeeds: z
    .array(z.string())
    .min(1, 'Please select at least one primary need')
    .max(5, 'Select up to 5 needs'),
  timeline: z.string().min(1, 'Please select a timeline'),
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
      country: '',
      role: '',
      lifecycle: '',
      primaryNeeds: [],
      timeline: '',
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
        <Card className="p-6 sm:p-8 space-y-8 shadow-sm border-gray-100 rounded-lg bg-white">
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
        </Card>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 text-[15px] font-bold bg-[#5c67f2] hover:bg-[#4a54d1] shadow-lg shadow-blue-500/10 active:scale-[0.98] transition-all rounded-lg flex items-center justify-center gap-2 uppercase tracking-wide"
        >
          <Rocket size={16} />
          {isSubmitting ? 'Processing...' : 'SET UP ACCOUNT'}
        </Button>
      </form>
    </div>
  );
};

export default SmartContactForm;
