import { Router } from "express";

import {
  visitUrl,
  fetchUrl,
  shrinkUrl,
} from "../controllers/url.controller.js";

const router = Router();

router.get("/", (req, res) => {
  home(req, res);
});

router.get("/url/:code", async (req, res) => {
  await fetchUrl(req, res);
});

router.get("/visit/:code", async (req, res) => {
  await visitUrl(req, res);
});

router.post("/shrink", async (req, res) => {
  await shrinkUrl(req, res);
});

export default router;
