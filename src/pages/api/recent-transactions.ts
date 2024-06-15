import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { coin: 'Bitcoin', details: 'Bought 0.05 BTC', type: 'positive', amount: '+ $1,250.00' },
    { coin: 'Ethereum', details: 'Sold 0.25 ETH', type: 'negative', amount: '- $750.00' },
    { coin: 'USDC', details: 'Deposited $500', type: 'positive', amount: '+ $500.00' },
  ]);
}
