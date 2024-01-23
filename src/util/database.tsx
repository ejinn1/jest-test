import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://ejinn1:dmlwls123@cluster0.wnzdedb.mongodb.net/?retryWrites=true&w=majority";

let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}

export { connectDB };
