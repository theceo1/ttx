// src/components/Wallet.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const Wallet: React.FC = () => {
  const [balance, setBalance] = useState<number | null>(null);
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get('/api/wallet');
        setBalance(response.data.balance);
      } catch (error) {
        setMessage('Failed to fetch balance');
      }
    };

    fetchBalance();
  }, []);

  const handleAction = async (action: 'deposit' | 'withdraw') => {
    try {
      const response = await axios.post('/api/wallet', { amount: parseFloat(amount), action });
      setMessage(response.data.message);
      setBalance(response.data.newBalance);
    } catch (error) {
      setMessage('Action failed');
    }
  };

  return (
    <div className="wallet-section p-4 bg-white shadow rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Wallet</h2>
        <div>
          <span className="text-xl font-bold">${balance !== null ? balance.toFixed(2) : 'Loading...'}</span>
        </div>
      </div>
      <div className="grid gap-2 mt-4">
        <label htmlFor="amount" className="text-sm">Amount</label>
        <Input id="amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Button className="bg-teal-500 text-white hover:bg-teal-600" onClick={() => handleAction('deposit')}>Deposit</Button>
        <Button className="bg-red-500 text-white hover:bg-red-600" onClick={() => handleAction('withdraw')}>Withdraw</Button>
      </div>
      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </div>
  );
};

export default Wallet;
