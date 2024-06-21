// src/components/icons/BitcoinIcon.tsx
import React from 'react';

interface CoinsIconProps extends React.SVGProps<SVGSVGElement> {}

const CoinsIcon: React.FC<CoinsIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 12h12" />
      <path d="M6 6h12" />
      <path d="M6 18h12" />
    </svg>
  );
};

export default CoinsIcon;
