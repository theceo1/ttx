// src/components/ui/Switch.tsx
import React from 'react';

interface SwitchProps {
  id: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({ id, checked, onChange, className }) => {
  return (
    <label htmlFor={id} className={`switch ${className}`}>
      <input id={id} type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
