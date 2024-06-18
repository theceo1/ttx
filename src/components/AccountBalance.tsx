import React, { useEffect, useState } from 'react';
import { fetchAccountBalance } from '../utils/api';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const AccountBalance: React.FC = () => {
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const getBalance = async () => {
      const balance = await fetchAccountBalance();
      setBalance(balance);
    };
    getBalance();
  }, []);

  return (
    <Card className="card bg-teal-600 text-white">
      <CardHeader>
        <CardTitle>Account Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div>
            <div className="text-4xl font-bold">${balance !== null ? balance.toFixed(2) : 'Loading...'}</div>
            <div className="text-xs">≈ 1.23 BTC</div>
          </div>
          <Button variant="outline" size="sm" className="text-white border-white">
            Deposit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountBalance;
