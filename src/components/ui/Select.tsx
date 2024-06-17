// src/components/ui/Select.tsx
import React from 'react';

interface SelectProps {
  children: React.ReactNode;
  id: string;
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ children, id, defaultValue, onChange }: SelectProps) => (
  <select id={id} defaultValue={defaultValue} onChange={onChange} className="w-full border rounded-lg px-4 py-2">
    {children}
  </select>
);

export const SelectTrigger = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`cursor-pointer ${className}`}>{children}</div>
);

export const SelectValue = ({ placeholder }: { placeholder: string }) => (
  <span>{placeholder}</span>
);

export const SelectContent = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg">{children}</div>
);

export const SelectItem = ({ children, value }: { children: React.ReactNode, value: string }) => (
  <option value={value}>{children}</option>
);
