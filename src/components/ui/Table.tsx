// src/components/ui/table.tsx
import React from 'react';

export const Table = ({ children }: { children: React.ReactNode }) => (
  <table className="w-full">{children}</table>
);

export const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <thead className="bg-gray-100">{children}</thead>
);

export const TableRow = ({ children }: { children: React.ReactNode }) => (
  <tr>{children}</tr>
);

export const TableHead = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <th className={`text-left px-4 py-2 ${className}`}>{children}</th>
);

export const TableBody = ({ children }: { children: React.ReactNode }) => (
  <tbody>{children}</tbody>
);

export const TableCell = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <td className={`px-4 py-2 ${className}`}>{children}</td>
);
