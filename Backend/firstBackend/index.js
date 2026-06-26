import dotenv from "dotenv"; //dotenv configuration
dotenv.config(); // environment variable
import express from "express";
import AuthRouter from "./src/routers/auth.route.js"
import PublicRouter from "./src/routers/public.route.js"
import connectDB from "./src/config/dbConnection.config.js";
const app = express(); //object

//middleware
app.use(express.json());

// API

app.use("/auth", AuthRouter);
app.use("/public",PublicRouter);

// DEFAULT API
app.get("/", (req, res) => {
  console.log("Server Started Default Get API hit");
  res.json({ message: "Welcome to my first backend project" });
});

// app.post("/login", (req, res) => {
//   res.json({ message: "Login Successfull" });
// });

// app.get
// ("/logout", (req, res) => {
//   res.json({ message: "Logout Successfull" });
// });
// app.get("/register", (req, res) => {
//   res.json({ message: "Register Successfull" });
// });
// app.put("/update", (req, res) => {
//   res.json({ message: "Update Successfull" });
// });
// app.delete("/delete", (req, res) => {
//   res.json({ message: "Delete Successfull" });
// });

// default error handler

app.use((err,req,res,next)=>{
  const ErrMessage = err.message || "Internal Server Error";
  const ErrStatusCode = err.statusCode || 500;

  res.status(ErrStatusCode).json({message:"Internal Server Error"})
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server Started at port :", port);
  connectDB()
});
