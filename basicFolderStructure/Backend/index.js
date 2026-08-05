import express from "express";
import connectDB from "./src/config/dbConnection.config.js";
const app = express();

const PORT = process.env.PORT || 4500;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectDB();
});
