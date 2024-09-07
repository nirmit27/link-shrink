import { Router } from "express";

import {
  visitUrl,
  fetchUrl,
  fetchAll,
  shrinkUrl,
} from "../controllers/url.controller.js";

const router = Router();

router.get("/", (req, res) => {
  home(req, res);
});

router.get("/all", async (req, res) => {
  await fetchAll(req, res);
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
