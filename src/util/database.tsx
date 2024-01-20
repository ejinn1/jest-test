import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://ejinn1:dmlwls123@cluster0.wnzdedb.mongodb.net/?retryWrites=true&w=majority";
const options: any = { useNewUrlParser: true };
let connecDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connecDB = global._mongo;
} else {
  connecDB = new MongoClient(url, options).connect();
}

export { connecDB };
