import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const usageSchema = z.object({
  who: z.string().min(1, 'Please select who will use the platform'),
  how: z.array(z.string()).min(1, 'Please select at least one usage type').max(2, 'Select up to 2 options'),
});

const UsageProfileForm = ({ onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(usageSchema),
    defaultValues: defaultValues || {
      who: '',
      how: [],
    },
  });

  const selectedHow = watch('how');

  const handleHowChange = (option) => {
    const current = selectedHow || [];
    if (current.includes(option)) {
      setValue('how', current.filter(i => i !== option));
    } else if (current.length < 2) {
      setValue('how', [...current, option]);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Usage Profile</h1>
        <p className="text-gray-600 font-medium text-[15px]">Tell us a bit more about how you'll use Think4Ever.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Card className="p-6 sm:p-8 space-y-8 shadow-sm border-gray-100 rounded-lg bg-white">
          <div>
            <label className="text-[16px] font-semibold text-gray-900 block mb-4">Who will use Think4Ever? (choose 1)</label>
            <div className="grid grid-cols-1 gap-3">
              {[
                "Just me",
                "Small team (2–10 users)",
                "Growing team (11–50 users)",
                "Larger organization (50+ users)",
                "Still evaluating"
              ].map(option => (
                <label 
                  key={option} 
                  className={cn(
                    "flex items-start p-4 border rounded-lg cursor-pointer transition-all duration-200",
                    watch('who') === option 
                      ? "border-[#5c67f2] bg-blue-50/20" 
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  )}
                >
                  <input 
                    type="radio" 
                    value={option} 
                    className="sr-only"
                    {...register('who')}
                  />
                  <div className={cn(
                    "w-4 h-4 rounded-full border-2 flex items-center justify-center mr-3 transition-all mt-[3px] shrink-0",
                    watch('who') === option ? "border-[#5c67f2] bg-[#5c67f2]" : "border-gray-300"
                  )}>
                    {watch('who') === option && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <span className="font-medium text-[15px] text-gray-700 leading-tight">{option}</span>
                </label>
              ))}
            </div>
            {errors.who && <p className="mt-2 text-sm text-red-500 font-medium">{errors.who.message}</p>}
          </div>

          <div>
            <label className="text-[16px] font-semibold text-gray-900 block mb-4">How do you plan to use Think4Ever? (choose up to 2)</label>
            <div className="grid grid-cols-1 gap-3">
              {[
                "Build products for myself",
                "Deliver solutions for clients",
                "Both internal products and client work",
                "Still exploring"
              ].map(option => (
                <label 
                  key={option} 
                  className={cn(
                    "flex items-start p-4 border rounded-lg cursor-pointer transition-all duration-200",
                    selectedHow.includes(option)
                      ? "border-[#5c67f2] bg-blue-50/20" 
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  )}
                >
                  <input 
                    type="checkbox" 
                    className="sr-only"
                    checked={selectedHow.includes(option)}
                    onChange={() => handleHowChange(option)}
                  />
                  <div className={cn(
                    "w-4 h-4 rounded-[3px] border-2 flex items-center justify-center mr-3 transition-all mt-[3px] shrink-0",
                    selectedHow.includes(option) ? "border-[#5c67f2] bg-[#5c67f2]" : "border-gray-300"
                  )}>
                    {selectedHow.includes(option) && <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />}
                  </div>
                  <span className="font-medium text-[15px] text-gray-700 leading-tight">{option}</span>
                </label>
              ))}
            </div>
            {errors.how && <p className="mt-2 text-sm text-red-500 font-medium">{errors.how.message}</p>}
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
