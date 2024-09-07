import { Router } from "express";

import { hello, helloUser } from "../controllers/url.controller.js";

const router = Router();

router.get("/", async (req, res) => {
  await hello(req, res);
});

router.get("/:id", async (req, res) => {
  await helloUser(req, res);
});

export default router;
