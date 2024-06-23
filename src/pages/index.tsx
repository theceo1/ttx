// src/pages/index.tsx

import React from 'react';
import RecentTransactions from '@/components/RecentTransactions';

const Home = () => {
  // Example transactions data, replace with actual data as needed
  const transactions = [
    { id: 1, description: 'Transaction 1', amount: 100, date: '2024-06-01' },
    { id: 2, description: 'Transaction 2', amount: 200, date: '2024-06-02' }
  ];

  return (
    <div>
      <h1>trustBank</h1>
      {/* Other content */}
      <RecentTransactions transactions={transactions} />
    </div>
  );
};

export default Home;
