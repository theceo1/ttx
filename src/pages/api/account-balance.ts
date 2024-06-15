import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    amount: 12345.67,
    btcEquivalent: 1.23
  });
}
