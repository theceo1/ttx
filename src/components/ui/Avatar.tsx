import React from 'react';

interface AvatarProps {
  className?: string;
  children: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({ className, children }) => (
  <div className={`avatar ${className}`}>{children}</div>
);

interface AvatarImageProps {
  src: string;
  className?: string;
}

export const AvatarImage: React.FC<AvatarImageProps> = ({ src, className }) => (
  <img src={src} className={`avatar-image ${className}`} alt="Avatar" />
);

interface AvatarFallbackProps {
  className?: string;
}

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ className, children }) => (
  <div className={`avatar-fallback ${className}`}>{children}</div>
);
