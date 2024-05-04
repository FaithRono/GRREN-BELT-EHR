import { MongoClient, ServerApiVersion } from "mongodb";

const URI = process.env.ATLAS_URI || "mongodb+srv://owengitau02:4mKISVcGSu0m3HnR@cluster0.7b8iikw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

let db = client.db("patient_record");

export default db;