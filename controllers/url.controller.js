// import mongoose from "mongoose";

export async function hello(req, res) {
  res.status(200).json({
    message: "Hello friend.",
  });
}

export async function helloUser(req, res) {
  const id = req.params.id;
  res.status(200).json({
    message: `Hello user #${id}.`,
  });
}
