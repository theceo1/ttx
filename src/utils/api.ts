import axios from 'axios';

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

export const fetchAccountBalance = async (): Promise<number> => {
  const response = await axios.get('/api/account-balance');
  return response.data.balance;
};

export const fetchRecentTransactions = async (): Promise<Transaction[]> => {
  const response = await axios.get('/api/transactions');
  return response.data.transactions;
};

export const fetchMarketOverview = async (): Promise<MarketData[]> => {
  const response = await axios.get('/api/market-overview');
  return response.data.marketOverview;
};

export const fetchBtcToFiat = async (btcAmount: number): Promise<string> => {
  const response = await axios.get('/api/btc-to-fiat', { params: { btcAmount } });
  return response.data.fiatValue;
};
