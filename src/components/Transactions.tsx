import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('/api/transactions');
        setTransactions(response.data.transactions);
      } catch (error) {
        console.error('Failed to fetch transactions', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <Card className="card bg-white text-black">
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id} className="mb-2 p-2 border rounded-lg">
              <span className="block text-lg">{transaction.type} {transaction.amount} {transaction.coin}</span>
              <span className="block text-gray-500">{transaction.date}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Transactions;
