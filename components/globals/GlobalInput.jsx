import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';
import { forwardRef, useState } from 'react';

const GlobalInput = forwardRef(
  (
    {
      label,
      type = 'text',
      placeholder,
      required = false,
      error,
      helperText,
      className = '',
      labelClassName = '',
      inputClassName = '',
      containerClassName = '',
      isTextarea = false,
      rows = 4,
      disabled = false,
      isReadOnly = false,
      maxLength,
      rightElement = null,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;

    return (
      <div className={cn('w-full', containerClassName)}>
        {/* Label */}
        {label && (
          <label className={cn('block text-[15px] font-semibold text-gray-700 mb-1.5', labelClassName)}>
            {label}
            {required && <span className="ml-1 text-[#e25d24]">*</span>}
          </label>
        )}

        {/* Input/Textarea Container */}
        <div className="relative">
          {isTextarea ? (
            <textarea
              ref={ref}
              rows={rows}
              disabled={disabled}
              placeholder={placeholder}
              readOnly={isReadOnly}
              maxLength={maxLength}
              className={cn(
                'text-base w-full px-4 py-3 bg-white border rounded-md text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none resize-none',
                error
                  ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-100'
                  : 'border-gray-200 focus:border-[#5c67f2] focus:ring-1 focus:ring-blue-50',
                (disabled || isReadOnly) && 'bg-gray-50 cursor-not-allowed opacity-60',
                inputClassName,
              )}
              {...props}
            />
          ) : (
            <input
              ref={ref}
              type={inputType}
              disabled={disabled}
              maxLength={maxLength}
              placeholder={placeholder}
              readOnly={isReadOnly}
              className={cn(
                'text-base w-full px-4 py-3 bg-white border rounded-md text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none h-11',
                error
                  ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-100'
                  : 'border-gray-200 focus:border-[#5c67f2] focus:ring-1 focus:ring-blue-50',
                (isPassword || rightElement) && 'pr-12',
                (disabled || isReadOnly) && 'bg-gray-50 cursor-not-allowed opacity-60',
                inputClassName,
              )}
              {...props}
            />
          )}

          {/* RENDER THE SEARCH BUTTON / LOADER HERE */}
          {rightElement && (
            <div className="absolute flex items-center -translate-y-1/2 right-3 top-1/2">
              {rightElement}
            </div>
          )}

          {/* Password Eye Icon */}
          {isPassword && !disabled && !rightElement && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-gray-400 transition-colors -translate-y-1/2 right-3 top-1/2 hover:text-gray-600"
            >
              {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
            </button>
          )}
        </div>

        {/* Helper Text or Error */}
        {(helperText || error) && (
          <p className={cn('mt-1.5 text-[13px]', error ? 'text-red-500' : 'text-gray-500')}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  },
);

GlobalInput.displayName = 'GlobalInput';

export default GlobalInput;
