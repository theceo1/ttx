import React from 'react';

const AccountBalance: React.FC = () => {
  // Fetch account balance from your API
  const balance = { amount: 12345.67, btcEquivalent: 1.23 };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Account Balance</h3>
      <div className="text-3xl font-bold">${balance.amount.toFixed(2)}</div>
      <div className="text-gray-500">≈ {balance.btcEquivalent} BTC</div>
    </div>
  );
};

export default AccountBalance;
