import path from "path";
import express from "express";
import favicon from "serve-favicon";

import { configDotenv } from "dotenv";
import { inject } from "@vercel/analytics";

import router from "./routes/url.route.js";

inject();
configDotenv();
const PORT = process.env.PORT || 3000;

const app = express();
const __dirname = import.meta.dirname;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.get("/", (req, res) => {
  const data = {
    title: "Link Shortener API",
    message:
      "This is a RESTful API built with Express.js for shortening and managing URLs. It provides endpoints for generating, retrieving, and visiting short URLs.",
    docs: [
      {
        heading: "Generate Short URL",
        route: "POST /shrink",
        details:
          "Accepts a long URL in JSON format and returns an 8-character hash code as the shortened URL.",
      },
      {
        heading: "Retrieve Original URL",
        route: "GET /url/:code",
        details:
          "Takes an 8-character hash code as a path parameter and returns the corresponding long URL.",
      },
      {
        heading: "Redirect to Original URL",
        route: "GET /visit/:code",
        details:
          "Redirects the user to the original URL based on the provided 8-character hash code.",
      },
    ],
  };
  res.render("home", data);
});

app.use("/", router);
app.use((req, res) => {
  res.status(404).json({ error: "Requested route does not exist." });
});

app.listen(PORT, async () => {
  console.log(`Server is live on port ${PORT}`);
});
