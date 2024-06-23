import React, { useEffect, useState } from 'react';
import {
  fetchAccountBalance,
  fetchRecentTransactions,
  fetchMarketOverview,
  fetchBtcToFiat,
} from '../utils/api';

type Transaction = {
  id: number;
  type: string;
  coin: string;
  amount: number;
  value: number;
};

type MarketData = {
  coin: string;
  price: number;
  change: number;
  marketCap: number;
};

const Dashboard: React.FC = () => {
  const [balance, setBalance] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [btcToFiat, setBtcToFiat] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const balance = await fetchAccountBalance();
      setBalance(balance);

      const transactions = await fetchRecentTransactions();
      setTransactions(transactions);

      const marketOverview = await fetchMarketOverview();
      setMarketData(marketOverview);

      const btcToFiat = await fetchBtcToFiat(1); // Example conversion for 1 BTC
      setBtcToFiat(btcToFiat);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Account Balance</h2>
        {balance !== null ? <p>${balance}</p> : <p>Loading...</p>}
      </div>
      <div>
        <h2>Recent Transactions</h2>
        {transactions.length > 0 ? (
          <ul>
            {transactions.map((transaction) => (
              <li key={transaction.id}>
                {transaction.type} {transaction.coin} - {transaction.amount} @ $
                {transaction.value}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        <h2>Market Overview</h2>
        {marketData.length > 0 ? (
          <ul>
            {marketData.map((data, index) => (
              <li key={index}>
                {data.coin}: ${data.price} ({data.change}%) - Market Cap: $
                {data.marketCap}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        <h2>BTC to Fiat</h2>
        {btcToFiat ? <p>{btcToFiat}</p> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Dashboard;
