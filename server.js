import express from "express";
import { db } from "./config/connection.js"; // Import the connection object
import routes from "./routes/index.js";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Listening for the 'open' event on the connection
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`SERVER running on port ${PORT}`);
  });
});

// handle connection errors if needed
db.on("error", (err) => {
  console.error("Database connection error:", err);
});
