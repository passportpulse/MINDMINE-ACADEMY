const { MongoClient } = require("mongodb");

// Use your Atlas SRV connection string
const uri = "mongodb://admin:admin123@mindmine-cluster-shard-00-00.n1zahcb.mongodb.net:27017,cluster-shard-00-01.n1zahcb.mongodb.net:27017,cluster-shard-00-02.n1zahcb.mongodb.net:27017/?ssl=true&replicaSet=atlas-xxxx-shard-0&authSource=admin&retryWrites=true&w=majority";

async function connectAtlas() {
  try {
    const client = new MongoClient(uri, {
      // Optional: force IPv4 if needed
      family: 4,
    });

    await client.connect();
    console.log("✅ Connected to MongoDB Atlas successfully!");

    // Example: list databases
    const databases = await client.db().admin().listDatabases();
    console.log("Databases:", databases.databases.map(db => db.name));

    await client.close();
    console.log("🔒 Connection closed");
  } catch (err) {
    console.error("❌ Failed to connect:", err.message);
  }
}

connectAtlas();