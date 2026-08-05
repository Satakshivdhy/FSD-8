import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Mongo DB connected successfully");
        console.log("MongoDB Connected: ",conn.connection.host);
        console.log("MongoDB Connected:" ,conn.connection.name);
    } catch (error){
        console.log("Error:" ,error.message);
        process.exit(1);
    }
}
export default connectDB;