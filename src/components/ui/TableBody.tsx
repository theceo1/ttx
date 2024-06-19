import React from 'react';

interface TableBodyProps {
  className?: string;
  children: React.ReactNode;
}

const TableBody: React.FC<TableBodyProps> = ({ className, children }) => {
  return <tbody className={`table-body ${className}`}>{children}</tbody>;
};

export default TableBody;
