import React from 'react';
import TradeHistory from '@/components/TradeHistory';

const TradeHistoryPage: React.FC = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4 text-center">Trade History</h1>
      <TradeHistory />
    </div>
  );
};

export default TradeHistoryPage;
