import express from "express";
const ssr = express.Router();

ssr.get("/", (req, res) => {
  res.status(201).send("Hello world");
});

export default ssr;
