import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import clientPromise from '@/lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('trustBank');
    const preferences = await db.collection('preferences').findOne({ userId: session.user.email });

    if (!preferences) {
      return res.status(404).json({ message: 'Preferences not found' });
    }

    res.status(200).json(preferences);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};
