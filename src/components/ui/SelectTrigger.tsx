import React from 'react';

interface SelectTriggerProps {
  className?: string;
  value?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const SelectTrigger: React.FC<SelectTriggerProps> = ({ className, children, value }) => {
  return <div className={`select-trigger ${className}`} data-value={value}>{children}</div>;
};

export default SelectTrigger;
