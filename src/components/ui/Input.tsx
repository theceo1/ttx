// src/components/ui/input.tsx
import React from 'react';

export const Input = ({ id, type, placeholder }: { id: string, type: string, placeholder: string }) => (
  <input id={id} type={type} placeholder={placeholder} className="w-full border rounded-lg px-4 py-2" />
);
