import axios from 'axios';
import useSWR from 'swr';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const useMarketOverview = () => {
  return useSWR(`${COINGECKO_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`, fetcher);
};

// Mock functions for other hooks to avoid breaking changes, replace these with actual implementations when available
export const useAccountBalance = () => {
  return useSWR('/api/account-balance', fetcher);
};

export const useRecentTransactions = () => {
  return useSWR('/api/recent-transactions', fetcher);
};

export const useUserProfile = () => {
  return useSWR('/api/user-profile', fetcher);
};

export const useNotifications = () => {
  return useSWR('/api/notifications', fetcher);
};
