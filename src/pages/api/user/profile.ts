import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { MongoClient } from 'mongodb';

const clientPromise = MongoClient.connect(process.env.MONGODB_URI as string);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const client = await clientPromise;
  const db = client.db('trustBank');

  const user = await db.collection('users').findOne({ email: session.user?.email });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json({
    name: user.name,
    email: user.email,
    avatar: user.avatar || '/default-avatar.png',
  });
};
