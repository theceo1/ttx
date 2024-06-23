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
  alt?: string;
  width: number;
  height: number;
}

export const AvatarImage: React.FC<AvatarImageProps> = ({
  src,
  className,
  alt = 'Avatar',
  width,
  height,
}) => (
  <Image
    src={src}
    className={`avatar-image ${className}`}
    alt={alt}
    width={width}
    height={height}
  />
);

interface AvatarFallbackProps {
  className?: string;
  children: React.ReactNode;
}

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({
  className,
  children,
}) => <div className={`avatar-fallback ${className}`}>{children}</div>;
