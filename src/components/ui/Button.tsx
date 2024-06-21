// src/components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant, size, className, ...props }) => {
  const baseStyles = 'py-2 px-4 rounded-md font-semibold';
  const variantStyles = variant === 'outline' ? 'border border-teal-500 text-teal-500' : 'bg-teal-500 text-white';
  const sizeStyles = size === 'sm' ? 'text-sm' : 'text-lg';
  const combinedStyles = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
