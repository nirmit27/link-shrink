import { connect, Schema, model } from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

try {
  await connect(`${MONGODB_URI}/${DB_NAME}`);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(`MongoDB connection error : ${error}`);
  process.exit(1);
}

const urlSchema = new Schema(
  {
    longUrl: {
      type: String,
      required: [true, "Please enter the long URL."],
    },
    shortCode: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Url = model("Url", urlSchema);

export default Url;
