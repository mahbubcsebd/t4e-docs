'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import SegmentSelector from './SegmentSelector';
import UsageProfileForm from './UsageProfileForm';
import SmartContactForm from './SmartContactForm';

const EarlyAccessContainer = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    segment: '',
    segmentPath: '',
    usageProfile: {
      who: '',
      how: [],
    },
    details: {}
  });

  const handleSegmentSelect = (segment) => {
    setFormData(prev => ({ 
      ...prev, 
      segment: segment.title,
      segmentPath: segment.path 
    }));
    setStep(2);
  };

  const handleUsageProfileSubmit = (data) => {
    setFormData(prev => ({ ...prev, usageProfile: data }));
    setStep(3);
  };

  const handleFinalSubmit = async (data) => {
    const finalData = {
      ...formData,
      details: data
    };
    console.log('--- FORM SUBMITTED ---');
    console.log('User Segment:', finalData.segment);
    console.log('Usage Profile:', finalData.usageProfile);
    console.log('Contact Details:', finalData.details);
    console.log('Complete Payload:', finalData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    router.push(`/get-early-access/success?type=${formData.segmentPath}`);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
      {/* Back Button and Step Indicator */}
      {step > 1 && (
        <div className="mb-8 flex items-center justify-between">
          <button 
            onClick={handleBack}
            className="flex items-center text-sm font-black text-gray-400 hover:text-[#5c67f2] transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={3} /> Back
          </button>
          <div className="flex items-center gap-1.5">
            {[1, 2, 3].map((s) => (
              <div 
                key={s}
                className={`h-1 rounded-full transition-all duration-300 ${
                  s === step ? 'w-6 bg-[#5c67f2]' : 'w-1.5 bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Conditional Rendering of Steps */}
      {step === 1 && (
        <SegmentSelector onSelect={handleSegmentSelect} />
      )}

      {step === 2 && (
        <UsageProfileForm 
          onSubmit={handleUsageProfileSubmit} 
          defaultValues={formData.usageProfile} 
        />
      )}

      {step === 3 && (
        <SmartContactForm 
          onSubmit={handleFinalSubmit} 
          segment={formData.segment} 
          segmentPath={formData.segmentPath}
        />
      )}
    </div>
  );
};

export default EarlyAccessContainer;
