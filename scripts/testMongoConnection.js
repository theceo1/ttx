import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables from .env.local file
dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

async function testMongoConnection() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB");
    await client.close();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

testMongoConnection();
