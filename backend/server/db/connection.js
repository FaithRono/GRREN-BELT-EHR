import { MongoClient } from 'mongodb';
const uri = process.env.ATLAS_URI || "mongodb+srv://owengitau02:4mKISVcGSu0m3HnR@cluster0.7b8iikw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

let dbConnection;

const connectToServer = (callback) => {
  client.connect((err, db) => {
    if (err || !db) {
      console.error('Failed to connect to MongoDB', err);
      return callback(err);
    }
    dbConnection = db.db('patient_records'); 
    console.log('Successfully connected to MongoDB.');
    return callback();
  });
};

const getDb = () => {
    if (!dbConnection) {
        throw new Error('Database not initialized');
    }
    return dbConnection;
};

export { connectToServer, getDb };
