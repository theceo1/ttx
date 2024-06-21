import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';
const API_PARAMS = {
  vs_currency: 'usd',
  order: 'market_cap_desc',
  per_page: 10,
  page: 1,
  sparkline: false,
};

export const fetchCryptoData = async () => {
  try {
    const response = await axios.get(API_URL, { params: API_PARAMS });
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    return [];
  }
};

export const fetchUserPortfolio = async (userId: string) => {
  try {
    const response = await axios.get(`/api/user/${userId}/portfolio`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user portfolio:', error);
    throw error;
  }
};

export const fetchAccountBalance = async () => {
  try {
    const response = await axios.get('/api/account/balance');
    return response.data;
  } catch (error) {
    console.error('Error fetching account balance', error);
    throw error;
  }
};

export const fetchRecentTransactions = async () => {
  try {
    const response = await axios.get('/api/account/recent-transactions');
    return response.data;
  } catch (error) {
    console.error('Error fetching recent transactions', error);
    throw error;
  }
};

export const fetchMarketOverview = async () => {
  try {
    const response = await axios.get('/api/market-overview');
    return response.data;
  } catch (error) {
    console.error('Error fetching market overview', error);
    throw error;
  }
};

export const fetchBtcToFiat = async (btcAmount: number, fiatCurrency: string) => {
  try {
    const response = await axios.get('/api/convert-btc-to-fiat', {
      params: { btcAmount, fiatCurrency }
    });
    return response.data;
  } catch (error) {
    console.error('Error converting BTC to fiat', error);
    throw error;
  }
};

const cryptoService = { fetchCryptoData, fetchUserPortfolio, fetchAccountBalance, fetchRecentTransactions, fetchMarketOverview, fetchBtcToFiat };

export default cryptoService;
