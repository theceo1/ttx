import React from 'react';

interface SelectItemProps {
  className?: string;
  value: string;
  children?: React.ReactNode;
}

const SelectItem: React.FC<SelectItemProps> = ({
  className,
  value,
  children,
}) => {
  return (
    <div className={`select-item ${className}`} data-value={value}>
      {children}
    </div>
  );
};

export default SelectItem;
