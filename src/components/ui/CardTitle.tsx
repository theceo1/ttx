import React from 'react';

interface CardTitleProps {
  className?: string;
  children?: React.ReactNode;
}

const CardTitle: React.FC<CardTitleProps> = ({ className, children }) => {
  return <div className={`card-title ${className}`}>{children}</div>;
};

export default CardTitle;
