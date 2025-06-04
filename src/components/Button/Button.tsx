/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-150";
  
  const variantStyles = {
    primary: `bg-sky-500 hover:bg-sky-600 text-white focus:ring-sky-400 ${disabled ? 'bg-sky-300 hover:bg-sky-300 cursor-not-allowed' : ''}`,
    secondary: `bg-gray-600 hover:bg-gray-700 text-gray-100 border border-gray-500 focus:ring-gray-400 ${disabled ? 'bg-gray-400 hover:bg-gray-400 border-gray-300 text-gray-300 cursor-not-allowed' : ''}`,
    ghost: `bg-transparent hover:bg-gray-700 text-sky-400 focus:ring-sky-400 ${disabled ? 'text-gray-500 hover:bg-transparent cursor-not-allowed' : ''}`,
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
