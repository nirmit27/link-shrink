import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

async function connectDB() {
  try {
    await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`MongoDB connection error : ${error}`);
    process.exit(1);
  }
}

export default connectDB;
