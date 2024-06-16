import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { MongoClient } from 'mongodb';

const uri = 'your_mongodb_connection_string'; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    await client.connect();
    const db = client.db('your_database_name'); // Replace with your database name
    const transactionsCollection = db.collection('transactions');

    if (req.method === 'GET') {
      const transactions = await transactionsCollection.find({ userId: session.user.id }).toArray();
      res.status(200).json(transactions);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch transactions', error });
  } finally {
    await client.close();
  }
}
