import React from 'react';

function TrendingDownIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="22 3 22 17 13.5 13.5" />
      <polyline points="22 17 13.5 13.5 8.5 13.5" />
    </svg>
  )
}

export default TrendingDownIcon;

