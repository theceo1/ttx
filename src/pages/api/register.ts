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
    const { username, email, password } = req.body;

    // Ensure the user does not already exist
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Insert new user
    const result = await db.collection('users').insertOne({
      username,
      email,
      password,
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (e) {
    console.error('MongoDB connection error:', e);
    res.status(500).json({ error: 'MongoDB connection error' });
  } finally {
    await client.close();
  }
}
