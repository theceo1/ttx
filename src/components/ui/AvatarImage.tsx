import React from 'react';

const AvatarImage: React.FC<{ src: string, className?: string }> = ({ src, className }) => {
  return <img className={`avatar-image ${className}`} src={src} alt="avatar" />;
};

export default AvatarImage;
