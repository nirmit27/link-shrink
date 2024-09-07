import path from "path";
import express from "express";
import { configDotenv } from "dotenv";

import router from "./routes/url.route.js";

configDotenv();
const PORT = process.env.PORT || 3000;

const app = express();
const __dirname = import.meta.dirname;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const data = {
    title: "Link Shortener",
    message: "This is a REST API for shortening long URLs.",
  };
  res.render("home", data);
});

app.use("/", router);

app.listen(PORT, async () => {
  console.log(`Server is live on port ${PORT}`);
});
