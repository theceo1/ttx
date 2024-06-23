// src/components/ui/Input.tsx
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  const baseStyles =
    'appearance-none rounded-md px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm';
  const combinedStyles = `${baseStyles} ${className}`;

  return <input className={combinedStyles} {...props} />;
};

export default Input;
