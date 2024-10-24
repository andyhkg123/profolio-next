// lib/mongodb.js
import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://andywong3111:mongodb3111@cluster0.mxtfb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
let clientPromise;

if (!client) {
  client = new MongoClient(uri, options);
  clientPromise = client
    .connect()
    .then(() => {
      console.log("connected");
      return client;
    })
    .catch((err) => {
      console.error("Failed to connect to database:", err);
      process.exit(1);
    });
}

async function connectToDatabase() {
  return clientPromise.then((client) => client.db("profolio"));
}

export { connectToDatabase };
