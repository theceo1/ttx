import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TradeHistory: React.FC = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const response = await axios.get('/api/trades');
        setTrades(response.data);
      } catch (error) {
        console.error('Failed to fetch trades', error);
      }
    };

    fetchTrades();
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Trade History</h3>
      <ul>
        {trades.map((trade: any) => (
          <li key={trade.id} className="mb-2 p-2 border rounded-lg">
            <span className="block text-lg">{trade.type}</span>
            <span className="block text-gray-500">{trade.amount} {trade.crypto} at {trade.price}</span>
            <span className={`block ${trade.status === 'Success' ? 'text-green-500' : 'text-red-500'}`}>
              {trade.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TradeHistory;
