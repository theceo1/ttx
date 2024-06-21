import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const client = new MongoClient(uri);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    await client.connect();
    const db = client.db('trustbank');
    const transactions = await db.collection('transactions').find({}).toArray();
    res.status(200).json({ transactions });
  } catch (e) {
    console.error('MongoDB connection error:', e);
    res.status(500).json({ error: 'MongoDB connection error' });
  } finally {
    await client.close();
  }
}
