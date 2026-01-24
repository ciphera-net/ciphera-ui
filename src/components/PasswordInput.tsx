import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon, LockIcon } from '../icons/generated';
import { Input, InputProps } from './Input';

export interface PasswordInputProps extends Omit<InputProps, 'type' | 'icon'> {
  label?: string;
  required?: boolean;
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, label, required, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className={className}>
        {label && (
          <label className="block mb-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {label}
            {required && <span className="text-brand-orange text-xs ml-1">(Required)</span>}
          </label>
        )}
        <div className="relative group">
          <Input
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            error={error}
            icon={<LockIcon className="w-5 h-5" />}
            className="pr-12" // Extra padding for toggle button
            {...props}
          />
          
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 focus:outline-none"
          >
            {showPassword ? (
              <EyeOffIcon className="w-5 h-5" />
            ) : (
              <EyeIcon className="w-5 h-5" />
            )}
          </button>
        </div>
        {error && <p className="mt-1 text-xs text-red-500 font-medium ml-1">{error}</p>}
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
