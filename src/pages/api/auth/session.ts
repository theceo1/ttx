import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import bcrypt from 'bcryptjs';
import clientPromise from '../../../lib/mongodbClient';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const session = await getSession({ req });
      if (session) {
        return res.status(200).json(session);
      } else {
        return res.status(401).json({ message: 'Unauthorized' });
      }
    } catch (error) {
      console.error('Error fetching session:', error);
      return res.status(500).json({ error: 'Failed to fetch session' });
    }
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST', 'GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('trustbank');
    const usersCollection = db.collection('users');

    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    return res.status(200).json({ message: 'Authenticated successfully' });
  } catch (error) {
    console.error('Error during authentication:', error);
    return res.status(500).json({ error: 'Failed to authenticate user' });
  }
};

export default handler;
