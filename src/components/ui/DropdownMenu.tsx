import React from 'react';

interface DropdownMenuProps {
  children: React.ReactNode;
}

export const DropdownMenu = ({ children }: DropdownMenuProps) => (
  <div className="dropdown-menu">{children}</div>
);

export const DropdownMenuTrigger = ({ children }: DropdownMenuProps) => (
  <button className="dropdown-menu-trigger">{children}</button>
);

export const DropdownMenuContent = ({ children }: DropdownMenuProps) => (
  <div className="dropdown-menu-content">{children}</div>
);

export const DropdownMenuItem = ({ children }: DropdownMenuProps) => (
  <div className="dropdown-menu-item">{children}</div>
);

export const DropdownMenuSeparator = () => (
  <div className="dropdown-menu-separator" />
);
