import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { name: 'Bitcoin', symbol: 'BTC', price: 56789.00, change: 2.5, marketCap: '1.2T' },
    { name: 'Ethereum', symbol: 'ETH', price: 1789.00, change: -1.2, marketCap: '210B' },
    { name: 'USDC', symbol: 'USDC', price: 1.00, change: 0.1, marketCap: '55B' },
  ]);
}
