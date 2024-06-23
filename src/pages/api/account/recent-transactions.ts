import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session || !session.user || !session.user.id) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (!uri) {
    return res.status(500).json({ error: 'MONGODB_URI not defined' });
  }

  try {
    const client = await MongoClient.connect(uri);
    const db = client.db('trustBank');
    const transactions = await db
      .collection('transactions')
      .find({ userId: session.user.id })
      .toArray();

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
