// src/components/ui/Select.tsx
import React from 'react';

interface SelectProps {
  id: string;
  defaultValue: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ children, id, defaultValue, onChange }) => (
  <select
    id={id}
    defaultValue={defaultValue}
    className="w-full border rounded-lg px-4 py-2"
    onChange={(e) => onChange(e.target.value)}
  >
    {children}
  </select>
);

interface SelectTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({ children, className }) => (
  <div className={`cursor-pointer ${className}`}>{children}</div>
);

interface SelectValueProps {
  placeholder: string;
}

export const SelectValue: React.FC<SelectValueProps> = ({ placeholder }) => (
  <span>{placeholder}</span>
);

interface SelectContentProps {
  children: React.ReactNode;
}

export const SelectContent: React.FC<SelectContentProps> = ({ children }) => (
  <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg">{children}</div>
);

interface SelectItemProps {
  children: React.ReactNode;
  value: string;
}

export const SelectItem: React.FC<SelectItemProps> = ({ children, value }) => (
  <option value={value}>{children}</option>
);
