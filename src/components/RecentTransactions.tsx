// src/components/RecentTransactions.tsx

import React from 'react';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({ transactions }) => {
  if (transactions.length === 0) {
    return <div>No recent transactions found</div>;
  }

  return (
    <ul>
      {transactions.map(transaction => (
        <li key={transaction.id}>
          {transaction.description}: ${transaction.amount} on {transaction.date}
        </li>
      ))}
    </ul>
  );
};

export default RecentTransactions;
