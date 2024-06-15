// src/components/ui/avatar.tsx
import React from 'react';

interface AvatarProps {
  children: React.ReactNode;
  className?: string;
}

export const Avatar = ({ children, className }: AvatarProps) => (
  <div className={`rounded-full overflow-hidden ${className}`}>{children}</div>
);

interface AvatarImageProps {
  src: string;
}

export const AvatarImage = ({ src }: AvatarImageProps) => (
  <img src={src} alt="Avatar" className="w-full h-full object-cover" />
);

export const AvatarFallback = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center w-full h-full bg-gray-300 text-gray-700">{children}</div>
);
