import dotenv from "dotenv"; //dotenv configuration
dotenv.config(); // environment variable
import express from "express";

const app = express(); //object
// API
app.get("/", (req,res) => {
  console.log("Server Started");
  res.json({ message: "Welcome to my first backend project" });
});

app.post("/login" , (req,res) => {
    res.json({message:"Login Successfull"})
})
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server Started at port :", port);
});
