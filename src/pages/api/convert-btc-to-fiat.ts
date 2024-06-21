import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { btcAmount, fiatCurrency } = req.query;

  if (!btcAmount || !fiatCurrency) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
      params: {
        ids: 'bitcoin',
        vs_currencies: fiatCurrency as string,
      },
    });

    const price = response.data.bitcoin[fiatCurrency as string];
    const convertedValue = parseFloat(btcAmount as string) * price;

    res.status(200).json({ value: convertedValue });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
