import { Schema, model } from "mongoose";

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
    createdAt: {
      type: Date,
      default: Date.now,
      expires: "30d",
    },
  },
  {
    timestamps: true,
  }
);

const Url = model("Url", urlSchema);

export default Url;
