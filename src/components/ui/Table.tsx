import React from 'react';

interface TableProps {
  className?: string;
  children: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ className, children }) => (
  <table className={`table ${className}`}>{children}</table>
);

interface TableBodyProps {
  className?: string;
  children: React.ReactNode;
}

export const TableBody: React.FC<TableBodyProps> = ({ className, children }) => (
  <tbody className={`table-body ${className}`}>{children}</tbody>
);

interface TableCellProps {
  className?: string;
  children: React.ReactNode;
}

export const TableCell: React.FC<TableCellProps> = ({ className, children }) => (
  <td className={`table-cell ${className}`}>{children}</td>
);

interface TableHeadProps {
  className?: string;
  children: React.ReactNode;
}

export const TableHead: React.FC<TableHeadProps> = ({ className, children }) => (
  <th className={`table-head ${className}`}>{children}</th>
);

interface TableHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ className, children }) => (
  <thead className={`table-header ${className}`}>{children}</thead>
);

interface TableRowProps {
  className?: string;
  children: React.ReactNode;
}

export const TableRow: React.FC<TableRowProps> = ({ className, children }) => (
  <tr className={`table-row ${className}`}>{children}</tr>
);
