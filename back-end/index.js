// Imports 
import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

// App Config
const app = express();
const PORT = 4000;
dotenv.config({path: './.env'});

const url = process.env.MONGO_URL ?? '';
const client = new MongoClient(url);

// Database Name
const dbName = 'testDB';
 
async function main() {
  await client.connect();
  const db = client.db(dbName);
  db.collection('documents');
  console.log('Connected to the database 🚀');
}

// Middleware
main().catch(console.error);

app.get('/', (req, res) => {
    res.json("I love docker!");
});

app.listen(PORT, () => {
    console.log('Your server is running on PORT:',PORT);
});