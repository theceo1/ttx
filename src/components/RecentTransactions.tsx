import React from 'react';
import { useRecentTransactions } from '../services/dataService';

const RecentTransactions: React.FC = () => {
  const { data, error } = useRecentTransactions();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="recent-transactions">
      <h3>Recent Transactions</h3>
      <ul>
        {data.map((transaction: any, index: number) => (
          <li key={index}>
            {transaction.coin} <span>{transaction.details}</span> <span className={transaction.type === 'positive' ? 'positive' : 'negative'}>{transaction.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentTransactions;
