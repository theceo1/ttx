// src/pages/api/wallet.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (!uri) {
    return res.status(500).json({ error: 'MONGODB_URI not defined' });
  }

  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db('trustBank');
    const user = await db.collection('users').findOne({ email: session.user?.email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (req.method === 'GET') {
      res.status(200).json({ balance: user.balance });
    } else if (req.method === 'POST') {
      const { amount, action } = req.body;

      if (!amount || !action) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      let newBalance = user.balance;
      if (action === 'deposit') {
        newBalance += amount;
      } else if (action === 'withdraw' && newBalance >= amount) {
        newBalance -= amount;
      } else {
        return res.status(400).json({ error: 'Invalid action or insufficient funds' });
      }

      await db.collection('users').updateOne(
        { email: session.user?.email },
        { $set: { balance: newBalance } }
      );

      res.status(200).json({ message: 'Action successful', newBalance });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
