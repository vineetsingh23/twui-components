/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export interface CardProps {
  variant?: 'default' | 'elevated' | 'flat';
  title?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  title,
  footer,
  children,
  className = '',
}) => {
  const baseStyles = "rounded-lg overflow-hidden";

  const variantStyles = {
    default: 'bg-gray-800 border border-gray-700 shadow-lg',
    elevated: 'bg-gray-800 shadow-2xl', // More prominent shadow
    flat: 'bg-gray-750 border border-gray-600', // Slightly different bg, less/no shadow
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {title && (
        <div className="px-6 py-4 border-b border-gray-700">
          {typeof title === 'string' ? <h3 className="text-xl font-semibold text-gray-100">{title}</h3> : title}
        </div>
      )}
      <div className="px-6 py-4 text-gray-300">
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 border-t border-gray-700 bg-gray-850">
          {footer}
        </div>
      )}
    </div>
  );
};
