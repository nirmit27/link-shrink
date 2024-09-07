import express from "express";
import { configDotenv } from "dotenv";

import router from "./routes/url.route.js";

configDotenv();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

app.listen(PORT, async () => {
  console.log(`Server is live on port ${PORT}`);
});
