import express from "express";
import compression from "compression";
import ssr from "./routes/ssr";


const app = express();

app.use(compression());
app.use(express.static("public"));

app.use("/firstssr", ssr);

const port = 3030;
app.listen(port, () => {
  console.log(`Lstenning on port ${port}. Go to http://localhost:${port}`);
});
