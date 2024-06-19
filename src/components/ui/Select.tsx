import React, { ReactNode } from 'react';

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ value, onValueChange, className, children }) => (
  <select className={`select ${className}`} value={value} onChange={(e) => onValueChange(e.target.value)}>
    {children}
  </select>
);

interface SelectTriggerProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({ className, onClick, children }) => (
  <div className={`select-trigger ${className}`} onClick={onClick}>
    {children}
  </div>
);

interface SelectContentProps {
  className?: string;
  children: React.ReactNode;
}

export const SelectContent: React.FC<SelectContentProps> = ({ className, children }) => (
  <div className={`select-content ${className}`}>{children}</div>
);

interface SelectItemProps {
  value: string;
  className?: string;
  children?: React.ReactNode;
}

export const SelectItem: React.FC<SelectItemProps> = ({ value, className, children }) => (
  <option className={`select-item ${className}`} value={value}>
    {children}
  </option>
);

interface SelectValueProps {
  className?: string;
  children: ReactNode;
}

export const SelectValue: React.FC<SelectValueProps> = ({ className, children }) => (
  <div className={`select-value ${className}`}>{children}</div>
);
