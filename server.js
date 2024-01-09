import express from "express";
// import { MongoClient } from "mongodb";
import db from "./config/connection.js";
import routes from "./routes";

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`SERVER running on port ${PORT}`);
  });
});
