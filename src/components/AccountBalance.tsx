// src/components/AccountBalance.tsx

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
    <Card className="card card-account-balance">
      <CardHeader className="card-header">
        <CardTitle className="card-title">Account Balance</CardTitle>
      </CardHeader>
      <CardContent className="card-content">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
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
