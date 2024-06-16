// scripts/testMongoConnection.ts
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
