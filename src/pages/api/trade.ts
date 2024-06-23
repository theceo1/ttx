import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (!uri) {
    return res.status(500).json({ error: 'MONGODB_URI not defined' });
  }

  const { coin, amount, action } = req.body;

  if (!coin || !amount || !action) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (amount <= 0) {
    return res.status(400).json({ error: 'Amount must be greater than zero' });
  }

  let client: MongoClient | null = null;

  try {
    client = new MongoClient(uri);
    await client.connect();
    const db = client.db('trustBank');
    const user = await db
      .collection('users')
      .findOne({ email: session.user?.email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    let newBalance = user.balance;
    if (action === 'buy') {
      if (newBalance < amount) {
        return res.status(400).json({ error: 'Insufficient funds' });
      }
      newBalance -= amount;
    } else if (action === 'sell') {
      newBalance += amount;
    } else {
      return res.status(400).json({ error: 'Invalid action' });
    }

    await db
      .collection('users')
      .updateOne(
        { email: session.user?.email },
        { $set: { balance: newBalance } },
      );

    await db.collection('transactions').insertOne({
      userId: user._id,
      coin,
      amount,
      action,
      date: new Date(),
    });

    res.status(200).json({ message: 'Trade successful', newBalance });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (client) {
      await client.close();
    }
  }
};

export default handler;
