import path from "path";
import express from "express";
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

app.get("/", (req, res) => {
  const data = {
    title: "Link Shortener",
    message:
      "This is a REST API for shortening URLs, built using Express.js.<br />The API provides several endpoints for generating short URLs, retrieving original URLs, and managing records.",
    docs: [
      {
        heading: "Shrink long URL",
        route: "POST /shrink",
        details:
          "This route generates the 8-character hash code for the long URL passed in the JSON format.",
      },
      {
        heading: "Fetch long URL",
        route: "GET /url/:code",
        details:
          "This route returns the long URL corresponding to the 8-character hash code sent as the query parameter.",
      },
      {
        heading: "Visit long URL",
        route: "GET /visit/:code",
        details:
          "This route redirects to the webpage whose URL corresponds to the 8-character hash code sent as the query parameter.",
      },
      {
        heading: "All records",
        route: "GET /all",
        details:
          "This route enlists all the long URLs alongwith their hashed codes.",
      },
    ],
  };
  res.render("home", data);
});

app.use("/", router);

app.listen(PORT, async () => {
  console.log(`Server is live on port ${PORT}`);
});
