import React from 'react';

interface ButtonProps {
  variant?: 'outline' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'solid', size = 'md', className, onClick, children }) => (
  <button className={`button ${variant} ${size} ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
