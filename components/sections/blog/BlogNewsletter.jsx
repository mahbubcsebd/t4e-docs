'use client';
import React from 'react';

export const BlogNewsletter = () => {
  return (
    <footer className="border-t border-gray-100 mt-20 py-16 sm:py-24 bg-[#fafafa]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-[22px] sm:text-[28px] font-bold text-gray-900 mb-3 sm:mb-4">Stay updated</h2>
        <p className="text-[14px] sm:text-[16px] text-gray-500 mb-8 sm:mb-10 max-w-[500px] mx-auto px-4">
          Get the latest insights on architecture-first agentic development delivered to your inbox.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 px-4">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3 text-[14px] sm:text-[15px] focus:outline-none focus:border-blue-500 transition-colors h-11 sm:h-auto"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg text-[14px] sm:text-[15px] hover:bg-blue-700 transition-all active:scale-95 shadow-md shadow-blue-500/10 h-11 sm:h-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};
