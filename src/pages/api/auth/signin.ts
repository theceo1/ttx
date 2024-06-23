import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import clientPromise from '../../../lib/mongodbClient';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
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
