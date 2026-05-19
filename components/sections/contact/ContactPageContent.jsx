'use client';
import React from 'react';
import ContactForm from '@/components/sections/contact/ContactForm';
import ContactSidebar from '@/components/sections/contact/ContactSidebar';

const ContactPageContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <ContactForm />
        <ContactSidebar />
      </div>
    </div>
  );
};

export default ContactPageContent;
