import { Router } from "express";

import { fetchUrl, fetchAll, shrinkUrl } from "../controllers/url.controller.js";

const router = Router();

router.get("/all", async (req, res) => {
  await fetchAll(req, res);
});

router.get("/:code", async (req, res) => {
  await fetchUrl(req, res);
});


router.post("/shrink", async (req, res) => {
  await shrinkUrl(req, res);
});

export default router;

// 1467931a