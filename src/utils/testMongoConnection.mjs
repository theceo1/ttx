import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;
console.log('MONGODB_URI:', uri);

const testMongoConnection = async () => {
  if (!uri) {
    throw new Error('Please add your Mongo URI to .env.local');
  }

  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db('trustbank');
    const collections = await db.listCollections().toArray();
    console.log('Collections:', collections);
    await client.close();
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

testMongoConnection();
