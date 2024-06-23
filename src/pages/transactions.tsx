import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Transaction {
  id: number;
  type: string;
  amount: number;
  status: string;
}

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('/api/transactions');
        setTransactions(response.data);
      } catch (error) {
        console.error('Failed to fetch transactions', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Transaction History
      </h1>
      <div className="bg-white p-4 shadow rounded-lg">
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id} className="mb-2 p-2 border rounded-lg">
              <span className="block text-lg">{transaction.type}</span>
              <span className="block text-gray-500">{transaction.amount}</span>
              <span
                className={`block ${transaction.status === 'Success' ? 'text-green-500' : 'text-red-500'}`}
              >
                {transaction.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Transactions;
