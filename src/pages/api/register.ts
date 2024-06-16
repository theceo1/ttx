import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { MongoClient } from 'mongodb';

const uri = 'your_mongodb_connection_string'; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    await client.connect();
    const db = client.db('your_database_name'); // Replace with your database name
    const usersCollection = db.collection('users');

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await usersCollection.insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to register user', error });
  } finally {
    await client.close();
  }
}
