import React from 'react';

const DropdownMenuSeparator: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={`dropdown-menu-separator ${className}`} />;
};

export default DropdownMenuSeparator;
