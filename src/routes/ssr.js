import express from "express";
const ssr = express.Router();

ssr.get("/", async (req, res) => { const theHtml = `<html><head><title>My First SSR</title></head><body><h1>My First Server Side Render</h1><div id="reactele">{{{reactele}}}</div><script src="/app.js" charset="utf-8"></script><script src="/vendor.js" charset="utf-8"></script></body></html>`; res.send(theHtml); });
export default ssr;
