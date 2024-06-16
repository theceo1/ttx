import React from 'react';

const MarketOverview: React.FC = () => {
  const marketData = [
    { coin: 'Bitcoin', symbol: 'BTC', price: '$56,789.00', change: '+2.5%', marketCap: '$1.2T' },
    { coin: 'Ethereum', symbol: 'ETH', price: '$1,789.00', change: '-1.2%', marketCap: '$210B' },
    { coin: 'USDC', symbol: 'USDC', price: '$1.00', change: '+0.1%', marketCap: '$55B' },
  ];

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Market Overview</h3>
      <ul>
        {marketData.map((data, index) => (
          <li key={index} className="mb-2 p-2 border rounded-lg">
            <span className="block text-lg">{data.coin} ({data.symbol})</span>
            <span className="block">{data.price}</span>
            <span className={`block ${data.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {data.change}
            </span>
            <span className="block text-gray-500">{data.marketCap}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketOverview;
