import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api';

export const fetchAccountBalance = async () => {
  const response = await axios.get(`${API_BASE_URL}/account-balance`);
  return response.data;
};

export const fetchRecentTransactions = async () => {
  const response = await axios.get(`${API_BASE_URL}/recent-transactions`);
  return response.data;
};

export const fetchMarketOverview = async () => {
  const response = await axios.get(`${API_BASE_URL}/market-overview`);
  return response.data;
};

export const fetchUserProfile = async () => {
  const response = await axios.get(`${API_BASE_URL}/user-profile`);
  return response.data;
};

export const fetchNotifications = async () => {
  const response = await axios.get(`${API_BASE_URL}/notifications`);
  return response.data;
};
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api';

export const fetchAccountBalance = async () => {
  const response = await axios.get(`${API_BASE_URL}/account-balance`);
  return response.data;
};

export const fetchRecentTransactions = async () => {
  const response = await axios.get(`${API_BASE_URL}/recent-transactions`);
  return response.data;
};

export const fetchMarketOverview = async () => {
  const response = await axios.get(`${API_BASE_URL}/market-overview`);
  return response.data;
};

export const fetchUserProfile = async () => {
  const response = await axios.get(`${API_BASE_URL}/user-profile`);
  return response.data;
};

export const fetchNotifications = async () => {
  const response = await axios.get(`${API_BASE_URL}/notifications`);
  return response.data;
};
