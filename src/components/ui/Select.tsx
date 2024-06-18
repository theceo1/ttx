import React, { useState } from 'react';

interface SelectProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ id, value, onChange, children }) => {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-lg px-4 py-2 appearance-none"
      >
        {children}
      </select>
      <SelectTrigger className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" />
    </div>
  );
};

interface SelectTriggerProps {
  className?: string;
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({ className }) => (
  <div className={`cursor-pointer ${className}`}>
    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
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
