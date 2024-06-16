// src/components/ui/Input.tsx
import React, { ChangeEvent } from 'react';

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ id, type, placeholder, value, onChange }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border rounded-lg px-4 py-2"
    />
  );
};
