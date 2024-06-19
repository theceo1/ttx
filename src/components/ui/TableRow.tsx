import React from 'react';

interface TableRowProps {
  className?: string;
  children: React.ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({ className, children }) => {
  return <tr className={`table-row ${className}`}>{children}</tr>;
};

export default TableRow;
