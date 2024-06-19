import React from 'react';

interface DropdownMenuItemProps {
  className?: string;
  children?: React.ReactNode;
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ className, children }) => {
  return <div className={`dropdown-menu-item ${className}`}>{children}</div>;
};

export default DropdownMenuItem;
