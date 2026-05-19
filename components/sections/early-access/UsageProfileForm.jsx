import GlobalSelect from '@/components/globals/GlobalSelect';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, ChevronRight } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';

const usageSchema = z.object({
  segment: z.string().min(1, 'Please select your segment'),
  sdlcStage: z.string().min(1, 'Please select your SDLC stage'),
  timeline: z.string().min(1, 'Please select your timeline'),
  who: z.string().min(1, 'Please select who will use the platform'),
  how: z
    .array(z.string())
    .min(1, 'Please select at least one usage type')
    .max(2, 'Select up to 2 options'),
  primaryNeeds: z
    .array(z.string())
    .min(1, 'Please select at least one primary need')
    .max(5, 'Select up to 5 options'),
});

const SEGMENT_OPTIONS = [
  { label: 'Independent Developers', value: 'Independent Developers' },
  { label: 'Start-ups & New Ventures', value: 'Start-ups & New Ventures' },
  { label: 'Software & SaaS Companies', value: 'Software & SaaS Companies' },
  {
    label: 'Systems Integrators / Consultants',
    value: 'Systems Integrators / Consultants',
  },
  {
    label: 'Enterprise & Mid-Size Business',
    value: 'Enterprise & Mid-Size Business',
  },
];

const SDLC_OPTIONS = [
  {
    label: 'Requirements / Specification',
    value: 'Requirements / Specification',
  },
  { label: 'Architecture / Design', value: 'Architecture / Design' },
  {
    label: 'Development / Implementation',
    value: 'Development / Implementation',
  },
  { label: 'Testing / QA', value: 'Testing / QA' },
  { label: 'Maintenance / Evolution', value: 'Maintenance / Evolution' },
  { label: 'Still Exploring', value: 'Still Exploring' },
];

const TIMELINE_OPTIONS = [
  { label: 'Immediately', value: 'Immediately' },
  { label: 'Within 1 month', value: 'Within 1 month' },
  { label: 'Within 3 months', value: 'Within 3 months' },
  { label: 'Just exploring', value: 'Just exploring' },
];

const UsageProfileForm = ({ onSubmit, initialSegment }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(usageSchema),
    defaultValues: {
      segment: initialSegment || '',
      sdlcStage: '',
      timeline: '',
      who: '',
      how: [],
      primaryNeeds: [],
    },
  });

  const selectedHow = watch('how') || [];
  const selectedNeeds = watch('primaryNeeds') || [];

  const handleCheckboxChange = (name, option, max) => {
    const current = watch(name) || [];
    if (current.includes(option)) {
      setValue(
        name,
        current.filter((i) => i !== option),
      );
    } else if (current.length < max) {
      setValue(name, [...current, option]);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
          User Profile
        </h1>
        <p className="text-gray-600 font-medium text-[15px]">
          Please help us understand your needs.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Card className="p-6 sm:p-8 space-y-8 shadow-sm border-gray-100 rounded-lg bg-white">
          {/* Segment selection */}
          <Controller
            name="segment"
            control={control}
            render={({ field }) => (
              <GlobalSelect
                label="Your Segment"
                placeholder="Select your segment"
                required
                options={SEGMENT_OPTIONS}
                value={field.value}
                onChange={field.onChange}
                labelClassName="text-[16px] font-semibold text-gray-900 block mb-4"
                selectClassName="h-12 text-[15px] border-gray-200 rounded-lg shadow-none focus:ring-[#5c67f2] font-medium"
                error={errors.segment?.message}
              />
            )}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Controller
              name="sdlcStage"
              control={control}
              render={({ field }) => (
                <GlobalSelect
                  label="SDLC Lifecycle Stage"
                  placeholder="Select one"
                  required
                  options={SDLC_OPTIONS}
                  value={field.value}
                  onChange={field.onChange}
                  labelClassName="text-[16px] font-semibold text-gray-900 block mb-4"
                  selectClassName="h-12 text-[15px] border-gray-200 rounded-lg shadow-none focus:ring-[#5c67f2] font-medium"
                  error={errors.sdlcStage?.message}
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
                  labelClassName="text-[16px] font-semibold text-gray-900 block mb-4"
                  selectClassName="h-12 text-[15px] border-gray-200 rounded-lg shadow-none focus:ring-[#5c67f2] font-medium"
                  error={errors.timeline?.message}
                />
              )}
            />
          </div>

          {/* Who will use */}
          <div>
            <label className="text-[16px] font-semibold text-gray-900 block mb-4">
              Who will use Think4Ever? (choose 1)
            </label>
            <div className="grid grid-cols-1 gap-3">
              {[
                'Just me',
                'Small team (2–10 users)',
                'Growing team (11–50 users)',
                'Larger organization (50+ users)',
                'Still evaluating',
              ].map((option) => (
                <label
                  key={option}
                  className={cn(
                    'flex items-start p-4 border rounded-lg cursor-pointer transition-all duration-200',
                    watch('who') === option
                      ? 'border-[#5c67f2] bg-blue-50/20'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50',
                  )}
                >
                  <input
                    type="radio"
                    value={option}
                    className="sr-only"
                    {...register('who')}
                  />
                  <div
                    className={cn(
                      'w-4 h-4 rounded-full border-2 flex items-center justify-center mr-3 transition-all mt-[3px] shrink-0',
                      watch('who') === option
                        ? 'border-[#5c67f2] bg-[#5c67f2]'
                        : 'border-gray-300',
                    )}
                  >
                    {watch('who') === option && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="font-medium text-[15px] text-gray-700 leading-tight">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* How do you plan to use */}
          <div>
            <label className="text-[16px] font-semibold text-gray-900 block mb-4">
              How do you plan to use Think4Ever? (choose up to 2)
            </label>
            <div className="grid grid-cols-1 gap-3">
              {[
                'Build products for myself',
                'Deliver solutions for clients',
                'Both internal products and client work',
                'Still exploring',
              ].map((option) => (
                <label
                  key={option}
                  className={cn(
                    'flex items-start p-4 border rounded-lg cursor-pointer transition-all duration-200',
                    selectedHow.includes(option)
                      ? 'border-[#5c67f2] bg-blue-50/20'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50',
                  )}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={selectedHow.includes(option)}
                    onChange={() => handleCheckboxChange('how', option, 2)}
                  />
                  <div
                    className={cn(
                      'w-4 h-4 rounded-[3px] border-2 flex items-center justify-center mr-3 transition-all mt-[3px] shrink-0',
                      selectedHow.includes(option)
                        ? 'border-[#5c67f2] bg-[#5c67f2]'
                        : 'border-gray-300',
                    )}
                  >
                    {selectedHow.includes(option) && (
                      <Check
                        className="w-2.5 h-2.5 text-white"
                        strokeWidth={4}
                      />
                    )}
                  </div>
                  <span className="font-medium text-[15px] text-gray-700 leading-tight">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Primary Needs */}
          <div>
            <label className="text-[16px] font-semibold text-gray-900 block mb-4">
              Primary Need (ranked up to 5)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
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
              ].map((option) => (
                <label
                  key={option}
                  className={cn(
                    'flex items-start p-4 border rounded-xl cursor-pointer transition-all duration-200',
                    selectedNeeds.includes(option)
                      ? 'border-[#5c67f2] bg-blue-50/30'
                      : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50',
                  )}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={selectedNeeds.includes(option)}
                    onChange={() =>
                      handleCheckboxChange('primaryNeeds', option, 5)
                    }
                  />
                  <div
                    className={cn(
                      'w-5 h-5 rounded-md border-2 flex items-center justify-center mr-3 transition-all mt-0.5 shrink-0',
                      selectedNeeds.includes(option)
                        ? 'border-[#5c67f2] bg-[#5c67f2]'
                        : 'border-gray-200 bg-white',
                    )}
                  >
                    {selectedNeeds.includes(option) && (
                      <Check
                        className="w-3.5 h-3.5 text-white"
                        strokeWidth={4}
                      />
                    )}
                  </div>
                  <span className="text-[13px] font-bold text-gray-700 leading-tight">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </Card>

        <Button
          type="submit"
          className="w-full h-12 text-[15px] font-bold bg-[#5c67f2] hover:bg-[#4a54d1] shadow-lg shadow-blue-500/10 active:scale-[0.98] transition-all rounded-lg"
        >
          Next Step <ChevronRight className="ml-2 w-4 h-4" />
        </Button>
      </form>
    </div>
  );
};

export default UsageProfileForm;
