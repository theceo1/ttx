import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { MongoClient } from 'mongodb';

const uri = 'your_mongodb_connection_string'; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session || !session.user?.email) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  const { email } = session.user;

  try {
    await client.connect();
    const db = client.db('your_database_name'); // Replace with your database name
    const usersCollection = db.collection('users');

    if (req.method === 'GET') {
      const user = await usersCollection.findOne({ email });
      res.status(200).json(user);
    } else if (req.method === 'PUT') {
      const { username, email: newEmail } = req.body;
      await usersCollection.updateOne(
        { email },
        { $set: { username, email: newEmail } }
      );
      res.status(200).json({ message: 'User updated successfully' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to update user', error });
  } finally {
    await client.close();
  }
}

export default handler;
