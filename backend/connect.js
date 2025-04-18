
const { MongoClient, ServerApiVersion } = require('mongodb');
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let database;

    database = client.db("FoundIt");
};

export const getDb =() =>{
    return database;
};

export default {connectToServer, getDb};