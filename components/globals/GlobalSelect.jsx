import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { forwardRef, useEffect, useRef, useState } from 'react';

const GlobalSelect = forwardRef(
  (
    {
      label,
      placeholder = 'Select',
      required = false,
      error,
      helperText,
      options = [],
      className = '',
      labelClassName = '',
      selectClassName = '',
      containerClassName = '',
      disabled = false,
      value,
      isReadOnly = false,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);
    const triggerRef = useRef(null);

    // Find selected option
    useEffect(() => {
      const option = options.find((opt) => opt.value === value);
      setSelectedOption(option || null);
    }, [value, options]);

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target) &&
          triggerRef.current &&
          !triggerRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (option) => {
      if (option.disabled || option.value === '') return;
      setSelectedOption(option);
      setIsOpen(false);
      if (onChange) {
        onChange(option.value);
      }
    };

    return (
      <div className={cn('w-full relative', containerClassName)}>
        {/* Label */}
        {label && (
          <label className={cn('block text-[13px] font-bold text-gray-700 mb-1.5', labelClassName)}>
            {label}
            {required && <span className="ml-1 text-[#e25d24]">*</span>}
          </label>
        )}

        {/* Select Trigger */}
        <div className="relative">
          <button
            ref={triggerRef}
            type="button"
            disabled={disabled}
            onClick={() => !disabled && !isReadOnly && setIsOpen(!isOpen)}
            className={cn(
              'w-full h-11 px-4 bg-white border rounded-md text-gray-900 transition-all duration-200 outline-none flex items-center justify-between',
              error
                ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-100'
                : 'border-gray-200 focus:border-[#5c67f2] focus:ring-1 focus:ring-blue-100',
              (disabled || isReadOnly) && 'bg-gray-50 cursor-not-allowed opacity-60',
              selectClassName,
            )}
            {...props}
          >
            <span
              className={cn(
                'text-sm truncate overflow-hidden whitespace-nowrap text-ellipsis text-left',
                selectedOption && selectedOption.value !== '' ? 'text-gray-900' : 'text-gray-400',
              )}
            >
              {selectedOption && selectedOption.label ? selectedOption.label : placeholder}
            </span>

            {!isReadOnly && (
              <ChevronDown
                className={cn(
                  'w-4 h-4 text-gray-400 transition-transform duration-200',
                  isOpen && 'transform rotate-180',
                )}
              />
            )}
          </button>

          {/* Dropdown - Fixed positioning issue */}
          {isOpen && !disabled && (
            <div
              ref={dropdownRef}
              className="absolute left-0 top-full z-[100] w-full mt-1 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] max-h-60 py-1"
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  disabled={option.disabled}
                  onClick={() => handleSelect(option)}
                  className={cn(
                    'w-full px-4 py-2.5 text-left text-sm transition-colors duration-150',
                    option.className,
                    !option.disabled &&
                      'hover:bg-gray-50 focus:bg-gray-50 focus:outline-none cursor-pointer',
                    selectedOption?.value === option.value &&
                      'bg-blue-50 text-[#5c67f2] font-semibold',
                    option.disabled && 'cursor-not-allowed opacity-40 text-gray-500',
                  )}
                >
                  {option.label}
                </button>
              ))}
              {options.length === 0 && (
                <div className="px-4 py-3 text-sm text-center text-gray-400">
                  No options
                </div>
              )}
            </div>
          )}
        </div>

        {/* Helper Text or Error */}
        {(helperText || error) && (
          <p className={cn('mt-1.5 text-[11px] font-medium', error ? 'text-red-500' : 'text-gray-500')}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  },
);

GlobalSelect.displayName = 'GlobalSelect';

export default GlobalSelect;
