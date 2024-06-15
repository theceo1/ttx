// src/components/ui/dropdown-menu.tsx
import React, { useState } from 'react';

export const DropdownMenu = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">{children}</div>
);

export const DropdownMenuTrigger = ({ children, asChild }: { children: React.ReactNode, asChild: boolean }) => (
  <div className="cursor-pointer">{children}</div>
);

export const DropdownMenuContent = ({ children, align }: { children: React.ReactNode, align: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`absolute ${align === 'end' ? 'right-0' : 'left-0'} mt-2 bg-white border rounded-lg shadow-lg`}>
      {children}
    </div>
  );
};

export const DropdownMenuItem = ({ children }: { children: React.ReactNode }) => (
  <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{children}</div>
);

export const DropdownMenuSeparator = () => (
  <div className="border-t border-gray-200"></div>
);
