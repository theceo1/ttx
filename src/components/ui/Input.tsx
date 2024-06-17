// src/components/ui/Input.tsx
import React from 'react';

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ id, type, placeholder, value, onChange }: InputProps) => (
  <input
    id={id}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full border rounded-lg px-4 py-2"
  />
);
