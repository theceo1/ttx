import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const client = new MongoClient(uri);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await client.connect();
    const db = client.db('trustbank');
    // Your database operations here
    res.status(200).json({ message: 'Success' });
  } catch (e) {
    console.error('MongoDB connection error:', e);
    res.status(500).json({ error: 'MongoDB connection error' });
  } finally {
    await client.close();
  }
}
