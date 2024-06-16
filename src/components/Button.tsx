import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'outline';
  size?: 'icon' | 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ variant, size, className, children, ...props }) => {
  const baseClasses = 'py-2 px-4 font-semibold rounded-lg';
  const variantClasses = variant === 'ghost' ? 'bg-transparent' : 'border';
  const sizeClasses = size === 'icon' ? 'w-8 h-8' : size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-md';

  return (
    <button className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
