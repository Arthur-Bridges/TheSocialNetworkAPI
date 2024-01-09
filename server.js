import express from "express";
import mongoose from "mongoose";
import connectDb from "./config/connection.js";
import routes from "./routes/index.js";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

connectDb()
  .then(() => {
    mongoose.connection.once("open", () => {
      app.listen(PORT, () => {
        console.log(`SERVER running on port ${PORT}`);
      });
    });
  })
  .catch((err) => {
    console.error("Database connection failed", err);
  });
