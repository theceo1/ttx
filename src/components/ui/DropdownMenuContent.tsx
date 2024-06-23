import React from 'react';

interface DropdownMenuContentProps {
  className?: string;
  children?: React.ReactNode;
}

const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({
  className,
  children,
}) => {
  return <div className={`dropdown-menu-content ${className}`}>{children}</div>;
};

export default DropdownMenuContent;
