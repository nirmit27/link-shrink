import Url from "../models/url.model.js";
import { getLongUrl, getShortCode } from "./hashing.js";

export async function fetchUrl(req, res) {
  try {
    const code = req.params.code;
    const longUrl = await getLongUrl(code);
    if (longUrl === null)
      return res.status(404).json({
        error: `No URLs found for code '${code}'`,
      });
    res.redirect(longUrl);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export async function fetchAll(req, res) {
  try {
    const allUrls = await Url.find({});
    res.status(200).json(allUrls);
  } catch (error) {
    res.status(404).json({ error: error });
  }
}

export async function shrinkUrl(req, res) {
  try {
    const { longUrl } = req.body;
    const shortCode = await getShortCode(longUrl);
    res.status(201).json({ shortCode: shortCode });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
