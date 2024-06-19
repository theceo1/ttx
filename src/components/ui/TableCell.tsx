import React from 'react';

interface TableCellProps {
  className?: string;
  children: React.ReactNode;
}

const TableCell: React.FC<TableCellProps> = ({ className, children }) => {
  return <td className={`table-cell ${className}`}>{children}</td>;
};

export default TableCell;
