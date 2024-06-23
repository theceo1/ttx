import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { MongoClient } from 'mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Please add your Mongo URI to .env.local');
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('trustbank');
  const usersCollection = db.collection('users');

  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { name, email } = req.body;

  try {
    await usersCollection.updateOne(
      { email: session.user.email },
      { $set: { name, email } },
    );
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  } finally {
    await client.close();
  }
};

export default handler;
