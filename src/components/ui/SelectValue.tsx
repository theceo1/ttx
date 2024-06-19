import React from 'react';

const SelectValue: React.FC<{ className?: string, placeholder?: string }> = ({ className, placeholder }) => {
  return <div className={`select-value ${className}`}>{placeholder}</div>;
};

export default SelectValue;
