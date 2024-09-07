import crypto from "crypto";

import Url from "../models/url.model.js";

export function hashUrl(url) {
  const hash = crypto.createHash("sha256").update(url);
  const shortCode = hash.digest("hex");
  return shortCode.slice(0, 8);
}

export async function getShortCode(longUrl) {
  const prevEntry = await Url.findOne({
    longUrl: longUrl,
  });
  if (prevEntry !== null) {
    return prevEntry["shortCode"];
  }
  const shortCode = hashUrl(longUrl);
  const newEntry = await Url.create({
    longUrl: longUrl,
    shortCode: shortCode,
  });
  return newEntry["shortCode"];
}

export async function getLongUrl(shortCode) {
  const entry = await Url.findOne({
    shortCode: shortCode,
  });
  return entry !== null ? entry["longUrl"] : entry;
}
