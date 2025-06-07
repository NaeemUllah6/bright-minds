import React, { useState, forwardRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Input = forwardRef(({ 
  label, 
  placeholder, 
  type = 'text', 
  id, 
  icon,
  className,
  value,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  required = false,
  autoComplete,
  name,
  error,
  ...rest 
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;
  
  const togglePassword = () => setShowPassword(prev => !prev);
  
  const handleFocus = (e) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };
  
  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };
  
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className='flex flex-col gap-2 relative w-full'>
      {label && (
        <label 
          className={`text-sm md:text-xl transition-colors duration-200 ${
            error 
              ? 'text-red-500' 
              : isFocused 
                ? 'text-[#F47D43]' 
                : 'text-[#949494]'
          }`} 
          htmlFor={inputId}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <input
          ref={ref}
          className={`
            border-b-[1.5px] w-full focus:outline-0 transition-all duration-200
            text-[#404040] placeholder:text-[#949494] font-semibold
            bg-transparent pb-2 pr-10
            ${error 
              ? 'border-red-500 focus:border-red-500' 
              : isFocused 
                ? 'border-[#F47D43] border-b-2' 
                : 'border-[#F47D43]'
            }
            ${disabled 
              ? 'opacity-50 cursor-not-allowed bg-gray-50' 
              : 'hover:border-[#e06b34]'
            }
            ${className || ''}
          `}
          type={inputType}
          placeholder={placeholder}
          id={inputId}
          name={name || inputId}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...rest}
        />
        
        {icon && isPassword && (
          <button
            type="button"
            className={`
              absolute right-2 bottom-2 cursor-pointer transition-colors duration-200
              ${error ? 'text-red-500' : 'text-[#F47D43] hover:text-[#e06b34]'}
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            onClick={togglePassword}
            disabled={disabled}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            tabIndex={0}
          >
            {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </button>
        )}
      </div>
      
      {error && (
        <span 
          id={`${inputId}-error`}
          className="text-red-500 text-sm font-medium"
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;