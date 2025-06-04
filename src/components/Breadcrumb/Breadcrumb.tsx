/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: 'slash' | 'arrow' | 'bullet';
  separator?: React.ReactNode;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  variant = 'slash',
  separator,
  className = '',
}) => {
  const defaultSeparators = {
    slash: <span className="mx-2 text-gray-500">/</span>,
    arrow: <span className="mx-2 text-gray-500">&rarr;</span>,
    bullet: <span className="mx-2 text-sky-400">&bull;</span>,
  };

  const currentSeparator = separator || defaultSeparators[variant];

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-sm ${className}`}>
      <ol className="flex items-center space-x-0 rtl:space-x-reverse">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <a
                href={item.href}
                className="flex items-center text-gray-300 hover:text-sky-400 transition-colors"
              >
                {item.icon && <span className="mr-1.5">{item.icon}</span>}
                {item.label}
              </a>
            ) : (
              <span className="flex items-center text-gray-400 cursor-default">
                {item.icon && <span className="mr-1.5">{item.icon}</span>}
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <span aria-hidden="true" className="select-none">
                {currentSeparator}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
