import React from 'react';
import { useGlobalState } from '@/context/GlobalState';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/Avatar';

const RecentTransactions: React.FC = () => {
  const { recentTransactions } = useGlobalState();

  return (
    <Card className="card bg-white text-black">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {recentTransactions.map((transaction, index) => (
            <div className="flex items-center justify-between" key={index}>
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>{transaction.coin}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-sm">{transaction.coin}</div>
                  <div className="text-gray-500 text-xs">{transaction.type} {transaction.amount} {transaction.coin}</div>
                </div>
              </div>
              <div className={`font-medium text-sm ${transaction.type === 'Bought' ? 'text-green-500' : 'text-red-500'}`}>
                {transaction.type === 'Bought' ? '+' : '-'}${transaction.value.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
