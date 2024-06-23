import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import clientPromise from '../../../lib/mongodbClient';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('trustbank');
    const usersCollection = db.collection('users');

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      username,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    };

    await usersCollection.insertOne(newUser);

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during user registration:', error);
    return res.status(500).json({ error: 'Failed to register user' });
  }
};

export default handler;
