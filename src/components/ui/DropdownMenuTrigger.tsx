import React from 'react';

interface DropdownMenuTriggerProps {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({
  className,
  onClick,
  children,
}) => {
  return (
    <button className={`dropdown-menu-trigger ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default DropdownMenuTrigger;
