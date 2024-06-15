import React from 'react';
import { useMarketOverview } from '../services/dataService';

const MarketOverview: React.FC = () => {
  const { data, error } = useMarketOverview();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="market-overview">
      <h3>Top Cryptocurrencies</h3>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin: any) => (
            <tr key={coin.id}>
              <td>
                {coin.name} ({coin.symbol.toUpperCase()})
              </td>
              <td>${coin.current_price.toFixed(2)}</td>
              <td className={coin.price_change_percentage_24h > 0 ? 'positive' : 'negative'}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td>${coin.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketOverview;
