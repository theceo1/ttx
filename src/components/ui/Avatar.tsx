import React from 'react';
import Image from 'next/image';

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
  <Image src={src} className={`avatar-image ${className}`} alt="Avatar" />
);

interface AvatarFallbackProps {
  className?: string;
  children: React.ReactNode;
}

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ className, children }) => (
  <div className={`avatar-fallback ${className}`}>{children}</div>
);
