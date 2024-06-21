import React, { ChangeEvent } from 'react';

interface SelectProps {
  id?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ id, value, onChange, className, children }) => {
  return (
    <select id={id} value={value} onChange={onChange} className={className}>
      {children}
    </select>
  );
};

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

export const SelectItem: React.FC<SelectItemProps> = ({ value, children }) => {
  return (
    <option value={value}>
      {children}
    </option>
  );
};

// Dummy components to fulfill the missing exports
export const SelectTrigger: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const SelectContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>{children}</div>
);
