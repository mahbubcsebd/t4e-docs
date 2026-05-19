'use client';
import React from 'react';
import { LayoutGrid, Rows } from 'lucide-react';
import { cn } from '@/lib/utils';

export const BlogViewSwitcher = ({ view, setView }) => {
  return (
    <div className="flex justify-end mb-6 sm:mb-12">
      <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-100 shadow-sm">
        <button
          onClick={() => setView('single')}
          className={cn(
            "p-1.5 sm:p-2 rounded-md transition-all",
            view === 'single' ? "bg-white text-blue-600 shadow-sm border border-gray-100" : "text-gray-400 hover:text-gray-600"
          )}
          title="Single Column View"
        >
          <Rows size={16} className="sm:w-[18px] sm:h-[18px]" />
        </button>
        <button
          onClick={() => setView('grid')}
          className={cn(
            "p-1.5 sm:p-2 rounded-md transition-all",
            view === 'grid' ? "bg-white text-blue-600 shadow-sm border border-gray-100" : "text-gray-400 hover:text-gray-600"
          )}
          title="3-Column Grid View"
        >
          <LayoutGrid size={16} className="sm:w-[18px] sm:h-[18px]" />
        </button>
      </div>
    </div>
  );
};
