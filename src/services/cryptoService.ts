// src/services/cryptoService.ts

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

export default { fetchCryptoData };
