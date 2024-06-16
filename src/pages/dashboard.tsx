import React from 'react';
import AccountBalance from '@/components/AccountBalance';
import RecentTransactions from '@/components/RecentTransactions';
import MarketOverview from '@/components/MarketOverview';
import TradeSection from '@/components/TradeSection';
import MarketChart from '@/components/MarketChart';

const Dashboard: React.FC = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4 text-center">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AccountBalance />
        <MarketOverview />
      </div>
      <div className="mt-4">
        <TradeSection />
      </div>
      <div className="mt-4">
        <RecentTransactions />
      </div>
      <div className="mt-4">
        <MarketChart />
      </div>
    </div>
  );
};

export default Dashboard;
