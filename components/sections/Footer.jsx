import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-[#94a3b8] py-12 px-6 lg:px-8 border-t border-[#1e293b]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright */}
        <div className="text-[13px] tracking-wide">
          © 2026 think4ever. All rights reserved.
        </div>

        {/* Legal Links */}
        <div className="flex items-center gap-8 text-[13px]">
          <Link 
            href="/privacy" 
            className="hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms" 
            className="hover:text-white transition-colors duration-200"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};
