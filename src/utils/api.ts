export const fetchAccountBalance = async (): Promise<number> => {
  // Mocking an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(12345.67);
    }, 1000);
  });
};

export const fetchRecentTransactions = async (): Promise<Transaction[]> => {
  // Mocking an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, type: 'Bought', coin: 'BTC', amount: 0.5, value: 20000 },
        { id: 2, type: 'Sold', coin: 'ETH', amount: 1.2, value: 1500 },
      ]);
    }, 1000);
  });
};

export const fetchMarketOverview = async (): Promise<MarketData[]> => {
  // Mocking an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { coin: 'BTC', price: 40000, change: 2.5, marketCap: 750000000 },
        { coin: 'ETH', price: 2500, change: -1.2, marketCap: 300000000 },
      ]);
    }, 1000);
  });
};

export const fetchBtcToFiat = async (btcAmount: number): Promise<string> => {
  // Mocking an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const fiatValue = btcAmount * 40000; // Example conversion rate
      resolve(`$${fiatValue.toFixed(2)}`);
    }, 1000);
  });
};
