import React, { ChangeEvent } from 'react';

interface SelectProps {
  id?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ id, value, onChange, className, children }) => {
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

const SelectItem: React.FC<SelectItemProps> = ({ value, children }) => {
  return (
    <option value={value}>
      {children}
    </option>
  );
};

interface SelectTriggerProps {
  className?: string;
  children: React.ReactNode;
}

const SelectTrigger: React.FC<SelectTriggerProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

interface SelectContentProps {
  className?: string;
  children: React.ReactNode;
}

const SelectContent: React.FC<SelectContentProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

interface SelectValueProps {
  placeholder: string;
}

const SelectValue: React.FC<SelectValueProps> = ({ placeholder }) => {
  return (
    <span>{placeholder}</span>
  );
};

export { Select, SelectItem, SelectTrigger, SelectContent, SelectValue };
