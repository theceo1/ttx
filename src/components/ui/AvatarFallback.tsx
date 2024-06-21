import React from 'react';

interface AvatarFallbackProps {
  children: React.ReactNode;
  className?: string;
}

const AvatarFallback: React.FC<AvatarFallbackProps> = ({ children, className }) => {
  return (
    <div className={`avatar-fallback ${className}`}>
      {children}
    </div>
  );
};

export default AvatarFallback;
