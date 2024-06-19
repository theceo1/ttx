import React from 'react';

interface TableHeadProps {
  className?: string;
  children: React.ReactNode;
}

const TableHead: React.FC<TableHeadProps> = ({ className, children }) => {
  return <th className={`table-head ${className}`}>{children}</th>;
};

export default TableHead;
