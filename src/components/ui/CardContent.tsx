import React from 'react';

interface AvatarFallbackProps {
  className?: string;
  children?: React.ReactNode;
}

const AvatarFallback: React.FC<AvatarFallbackProps> = ({
  className,
  children,
}) => {
  return <div className={`avatar-fallback ${className}`}>{children}</div>;
};

export default AvatarFallback;
