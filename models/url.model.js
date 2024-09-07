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
  },
  {
    timestamps: true,
  }
);

const Url = model("Url", urlSchema);

export default Url;
