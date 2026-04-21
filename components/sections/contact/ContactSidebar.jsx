'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';

const ContactSidebar = ({ onCalendarOpen }) => {
  return (
    <div className="w-full lg:w-[360px] space-y-6">
      
      {/* Schedule Demo */}
      <div className="bg-white border border-gray-100 rounded-md p-6 shadow-sm overflow-hidden">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-50 text-[#5c67f2] rounded-md">
            <CalendarIcon size={16} />
          </div>
          <h3 className="text-[15px] font-bold text-[#1f2937]">Schedule a Demo</h3>
        </div>
        <p className="text-[12px] text-gray-500 leading-relaxed mb-6 font-medium">
          Book a time directly with our team — no back-and-forth needed.
        </p>
        
        <div className="bg-gray-50/50 rounded-md p-5 border border-dashed border-gray-200 flex flex-col items-center">
          <div className="h-8 w-8 rounded-md bg-white shadow-sm flex items-center justify-center mb-3 text-gray-400">
              <CalendarIcon size={16} strokeWidth={2.5} />
          </div>
          <p className="font-bold text-[14px] text-[#1f2937] mb-0.5 tracking-tight">Book Your Session</p>
          <p className="text-center text-[11px] text-gray-400 mb-5 leading-normal font-bold">Choose a time that works for you. 30-minute sessions Mon–Fri.</p>
          <Button 
            onClick={onCalendarOpen}
            variant="outline" 
            className="w-full h-9 border-[#5c67f2]/20 bg-blue-50/30 text-[#5c67f2] hover:bg-blue-50 text-[11px] font-bold rounded-md flex items-center gap-2 transition-colors"
          >
            <ExternalLink size={12} strokeWidth={3} />
            Open Calendar
          </Button>
        </div>
      </div>

      {/* Office Information */}
      <div className="bg-white border border-gray-100 rounded-md p-6 shadow-sm">
        <h3 className="text-[15px] font-bold text-[#1f2937] mb-6">Office Information</h3>
        <div className="space-y-6">
          <div className="flex gap-3 items-start group">
            <div className="h-8 w-8 shrink-0 rounded-md bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-[#5c67f2] transition-colors mt-0.5">
              <MapPin size={16} />
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-gray-900 leading-none">Headquarters</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed mt-1.5 font-bold">
                161 Bay Street, 27th Floor<br />Toronto, ON M5J2S1
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start group">
            <div className="h-8 w-8 shrink-0 rounded-md bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-[#5c67f2] transition-colors mt-0.5">
              <Phone size={16} />
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-gray-900 leading-none">Phone</h4>
              <p className="text-[11px] text-gray-500 mt-1.5 font-bold">+1 (416) 111-1111</p>
            </div>
          </div>

          <div className="flex gap-3 items-start group">
            <div className="h-8 w-8 shrink-0 rounded-md bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-[#5c67f2] transition-colors mt-0.5">
              <Mail size={16} />
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-gray-900 leading-none">Email</h4>
              <p className="text-[11px] text-gray-500 mt-1.5 font-bold">info@think4ever.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Help Card */}
      <div className="bg-[#f5f8ff] border border-[#dbeafe] rounded-md p-6 flex flex-col items-center">
        <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 text-[#5c67f2]">
          <MessageCircle size={20} strokeWidth={2.5} />
        </div>
        <h4 className="font-bold text-[#1f2937] text-[15px] mb-1.5 tracking-tight">Need Immediate Help?</h4>
        <p className="text-center text-[11px] text-gray-400 mb-5 leading-relaxed font-bold">
          Chat with our team in real-time. Average response time under 2 minutes.
        </p>
        <Button className="w-full h-10 bg-[#5c67f2] hover:bg-[#4a54d1] text-white font-bold rounded-md text-[12px] flex items-center gap-2 transition-all shadow-sm shadow-blue-500/20">
          <MessageSquare size={14} />
          Start Live Chat
        </Button>
      </div>
    </div>
  );
};

export default ContactSidebar;
