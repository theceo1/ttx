// src/utils/api.js
export const fetchAccountBalance = async () => {
  return 12345.67;
};

export const fetchRecentTransactions = async () => {
  return [
    { id: 1, type: 'buy', coin: 'BTC', amount: 0.05, value: 1250.0 },
    { id: 2, type: 'sell', coin: 'ETH', amount: 0.25, value: 750.0 },
    { id: 3, type: 'deposit', coin: 'USDC', amount: 500, value: 500.0 },
  ];
};

export const fetchMarketOverview = async () => {
  return [
    { coin: 'BTC', price: 56789.0, change: 2.5, marketCap: 1200000000000 },
    { coin: 'ETH', price: 1789.0, change: -1.2, marketCap: 210000000000 },
    { coin: 'USDC', price: 1.0, change: 0.1, marketCap: 55000000000 },
  ];
};
