'use client';
import React, { useState } from 'react';
import ContactForm from '@/components/sections/contact/ContactForm';
import ContactSidebar from '@/components/sections/contact/ContactSidebar';
import CalendarModal from '@/components/sections/contact/CalendarModal';

const ContactUs = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Main Content Area */}
        <ContactForm />

        {/* Sidebar Area */}
        <ContactSidebar onCalendarOpen={() => setIsCalendarOpen(true)} />
      </div>

      {/* Reusable Calendar Modal */}
      <CalendarModal 
        isOpen={isCalendarOpen} 
        onClose={() => setIsCalendarOpen(false)}
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
      />
    </div>
  );
};

export default ContactUs;
