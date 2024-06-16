import React from 'react';

const RecentTransactions: React.FC = () => {
  const transactions = [
    { id: 1, type: 'Bought', amount: '0.05 BTC', status: 'Success' },
    { id: 2, type: 'Sold', amount: '0.25 ETH', status: 'Failed' },
    { id: 3, type: 'Deposited', amount: '$500 USDC', status: 'Success' },
  ];

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="mb-2 p-2 border rounded-lg">
            <span className="block text-lg">{transaction.type}</span>
            <span className="block text-gray-500">{transaction.amount}</span>
            <span className={`block ${transaction.status === 'Success' ? 'text-green-500' : 'text-red-500'}`}>
              {transaction.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
