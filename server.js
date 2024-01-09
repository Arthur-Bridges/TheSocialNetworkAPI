import express from "express";
import { MongoClient } from "mongodb";
import routes from "./routes";

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbName = "TheSocialNetworkDB";

client
  .connect()
  .then(() => {
    console.log("Connected successfully to MongoDB");
    db = client.db(dbName);

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Mongo connection error: ", err.message);
  });
