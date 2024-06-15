// src/components/ui/button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'outline' | 'ghost';
  size?: 'sm' | 'icon';
}

export const Button = ({ children, variant, size }: ButtonProps) => {
  const baseStyle = 'py-2 px-4 font-semibold rounded-lg shadow-md';
  const variantStyle = variant === 'outline' ? 'border border-gray-300' : 'bg-blue-500 text-white';
  const sizeStyle = size === 'sm' ? 'text-sm' : 'text-base';

  return (
    <button className={`${baseStyle} ${variantStyle} ${sizeStyle}`}>
      {children}
    </button>
  );
};
