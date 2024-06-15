import React from 'react';
import { useAccountBalance } from '../services/dataService';

const AccountBalance: React.FC = () => {
  const { data, error } = useAccountBalance();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="account-balance">
      <h2>${data.amount.toFixed(2)}</h2>
      <p>≈ {data.btcEquivalent} BTC</p>
      <button>Deposit</button>
    </div>
  );
}

export default AccountBalance;
