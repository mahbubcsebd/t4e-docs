'use client';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import 'react-day-picker/dist/style.css';

const CalendarModal = ({ isOpen, onClose, selectedDate, onDateSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-md rounded-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-[#fbfcfe]">
          <div>
            <h3 className="font-bold text-[#1f2937] text-[16px] tracking-tight">Select a Date</h3>
            <p className="text-[11px] text-gray-400 font-bold">Available Mon–Fri for a 30-min demo</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-md transition-colors">
            <X size={18} className="text-gray-400" />
          </button>
        </div>
        
        <div className="p-6 flex flex-col items-center">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={(date) => date && onDateSelect(date)}
            disabled={{ dayOfWeek: [0, 6] }} // Disable weekends
            className="calendar-custom"
            modifiersStyles={{
              selected: { backgroundColor: '#5c67f2', color: 'white' }
            }}
          />
          
          <div className="w-full mt-6 space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-md border border-blue-100/50">
              <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Selected Date:</span>
              <span className="text-[12px] font-black text-[#5c67f2]">{format(selectedDate, 'PPP')}</span>
            </div>
            <Button 
               onClick={() => {
                 alert(`Demo requested for ${format(selectedDate, 'PPP')}`);
                 onClose();
               }}
               className="w-full h-11 bg-[#5c67f2] hover:bg-[#4a54d1] rounded-md text-sm font-bold shadow-md shadow-blue-500/20 transition-all active:scale-[0.98]"
            >
              Confirm & Schedule
            </Button>
          </div>
        </div>

        {/* Custom Calendar CSS */}
        <style jsx global>{`
          .calendar-custom .rdp {
            --rdp-cell-size: 44px;
            --rdp-accent-color: #5c67f2;
            --rdp-background-color: #f0f4ff;
            margin: 0;
          }
          .calendar-custom .rdp-day_selected {
            background-color: var(--rdp-accent-color) !important;
            color: white !important;
            font-weight: bold;
          }
          .calendar-custom .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
            background-color: #f0f4ff;
            color: #5c67f2;
          }
          .calendar-custom .rdp-head_cell {
            font-size: 11px;
            font-weight: 800;
            color: #94a3b8;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          .calendar-custom .rdp-nav_button {
            color: #94a3b8;
          }
          .calendar-custom .rdp-nav_button:hover {
            color: #5c67f2;
            background-color: #f0f4ff;
          }
        `}</style>
      </div>
    </div>
  );
};

export default CalendarModal;
