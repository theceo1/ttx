import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

const WalletBalance: React.FC = () => {
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get('/api/wallet-balance');
        setBalance(response.data.balance);
      } catch (error) {
        console.error('Failed to fetch wallet balance', error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <Card className="card bg-teal-600 text-white">
      <CardHeader>
        <CardTitle>Wallet Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">
          ${balance !== null ? balance.toFixed(2) : 'Loading...'}
        </div>
        <div className="text-xs">Your current wallet balance</div>
      </CardContent>
    </Card>
  );
};

export default WalletBalance;
