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
    message: "This is a REST API for shortening URLs built using Express.",
    docs: [
      {
        heading: "Home",
        route: "/",
        details: "This is the home page, which contains the API documentation.",
      },
      {
        heading: "Shrink long URL",
        route: "/shrink",
        details:
          "This route handles the POST requests and generates the 8-character hash code for the long URL passed in the JSON format.",
      },
      {
        heading: "Fetch long URL",
        route: "/url/:code",
        details:
          "This route returns the long URL corresponding to the 8-character hash code sent as the query parameter.",
      },
      {
        heading: "Visit long URL",
        route: "/visit/:code",
        details:
          "This route redirects to the webpage whose URL corresponds to the 8-character hash code sent as the query parameter.",
      },
      {
        heading: "All records",
        route: "/all",
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
