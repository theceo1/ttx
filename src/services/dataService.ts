import axios from 'axios';
import useSWR from 'swr';

const API_BASE_URL = 'http://localhost:5001/api';
const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useAccountBalance = () => {
  return useSWR(`${API_BASE_URL}/account-balance`, fetcher);
};

export const useRecentTransactions = () => {
  return useSWR(`${API_BASE_URL}/recent-transactions`, fetcher);
};

export const useUserProfile = () => {
  return useSWR(`${API_BASE_URL}/user-profile`, fetcher);
};

export const useNotifications = () => {
  return useSWR(`${API_BASE_URL}/notifications`, fetcher);
};

export const useMarketOverview = () => {
  return useSWR(
    `${COINGECKO_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`,
    fetcher,
  );
};
