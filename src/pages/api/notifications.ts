import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { MongoClient } from 'mongodb';

const getClient = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Please add your Mongo URI to .env.local');
  }
  const client = new MongoClient(uri);
  await client.connect();
  return client;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const client = await getClient();
    const db = client.db('trustbank');
    const notificationsCollection = db.collection('notifications');

    const notifications = await notificationsCollection
      .find({ email: session.user.email })
      .toArray();

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
};

export default handler;
