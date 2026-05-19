'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, CheckCircle2, Rocket } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { ContactInfoForm } from './ContactInfoForm';
import UsageProfileForm from './UsageProfileForm';

const EarlyAccessContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialSegment = searchParams.get('segment') || '';
  const plan = searchParams.get('plan') || '';

  const [step, setStep] = useState(1);
  const [profileData, setProfileData] = useState({});
  const [contactData, setContactData] = useState({});

  const handleProfileSubmit = (data) => {
    setProfileData(data);
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSubmit = (data) => {
    setContactData(data);
    setStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // In a real app, you would send profileData + contactData to your API here
  };

  const handleFinalRedirect = () => {
    window.location.href = 'https://portal.think4ever.com/#/register';
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-20">
      {step === 1 && (
        <div className="max-w-3xl mx-auto">
          <UsageProfileForm
            onSubmit={handleProfileSubmit}
            initialSegment={initialSegment}
          />
        </div>
      )}

      {/* Step 2: Redirect (New/Big) OR Contact Info (Blue) */}
      {step === 2 && (
        <>
          {plan === 'blue' ? (
            <div className="max-w-3xl mx-auto">
              <ContactInfoForm onSubmit={handleContactSubmit} />
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 py-12 sm:py-20">
              <Card className="max-w-md mx-auto p-8 sm:p-10 text-center shadow-sm border-gray-100 rounded-lg bg-white space-y-8">
                <div className="flex flex-col items-center">
                  <div className="h-14 w-14 rounded-xl bg-blue-50 flex items-center justify-center text-[#5c67f2] mb-6 border border-blue-100">
                    <Rocket size={26} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                    Almost there!
                  </h2>
                  <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
                    We've captured your profile. Please complete the final step
                    to set up your account on our secure portal.
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    onClick={handleFinalRedirect}
                    className="w-full h-12 bg-[#5c67f2] hover:bg-[#4a54d1] text-white rounded-lg font-bold text-[14px] shadow-md shadow-blue-500/10 transition-all flex items-center justify-center gap-2 group"
                  >
                    SET UP ACCOUNT
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <div className="mt-8 flex items-center justify-center gap-2 opacity-40">
                    <div className="h-[1px] w-8 bg-gray-300" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      portal.think4ever.com
                    </span>
                    <div className="h-[1px] w-8 bg-gray-300" />
                  </div>
                </div>
              </Card>
            </div>
          )}
        </>
      )}

      {/* Step 3: Success Message (Only for Blue Plan) */}
      {step === 3 && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 py-12 sm:py-20 text-center">
          <Card className="max-w-md mx-auto p-10 text-center shadow-sm border-gray-100 rounded-lg bg-white space-y-6">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Request Received!
              </h2>
              <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
                Thank you, {contactData.firstName}. We've received your inquiry
                for the enterprise plan. A member of our team will reach out to
                you at{' '}
                <span className="text-gray-900 font-bold">
                  {contactData.email}
                </span>{' '}
                shortly.
              </p>
            </div>

            <Button
              onClick={() => router.push('/')}
              variant="outline"
              className="w-full h-12 rounded-lg font-bold text-[14px]"
            >
              Back to Home
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
};

const EarlyAccessContainer = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-[400px] flex items-center justify-center animate-pulse text-gray-300 font-bold tracking-widest uppercase text-xs">
          Loading profile...
        </div>
      }
    >
      <EarlyAccessContent />
    </Suspense>
  );
};

export default EarlyAccessContainer;
