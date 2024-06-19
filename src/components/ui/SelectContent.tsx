import React from 'react';

interface SelectContentProps {
  className?: string;
  children?: React.ReactNode;
}

const SelectContent: React.FC<SelectContentProps> = ({ className, children }) => {
  return <div className={`select-content ${className}`}>{children}</div>;
};

export default SelectContent;
