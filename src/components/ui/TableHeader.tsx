import React from 'react';

interface TableHeaderProps {
  className?: string;
  children: React.ReactNode;
}

const TableHeader: React.FC<TableHeaderProps> = ({ className, children }) => {
  return <thead className={`table-header ${className}`}>{children}</thead>;
};

export default TableHeader;
