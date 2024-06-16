import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { MongoClient } from 'mongodb';

const uri = 'your_mongodb_connection_string'; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session || !session.user) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    await client.connect();
    const db = client.db('your_database_name'); // Replace with your database name
    const tradesCollection = db.collection('trades');

    if (req.method === 'POST') {
      const { action, crypto, amount, price, orderType } = req.body;
      const trade = {
        userId: session.user.email, // Using email as an identifier, adjust if necessary
        action,
        crypto,
        amount,
        price,
        orderType,
        status: 'Success', // Dummy status, replace with actual logic
        timestamp: new Date(),
      };

      await tradesCollection.insertOne(trade);
      res.status(201).json(trade);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to execute trade', error });
  } finally {
    await client.close();
  }
}
