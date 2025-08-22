import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3000);

app.get("/health", (_req, res) => res.json({ ok: true, service: "credverse-scaffold" }));
app.get("/", (_req, res) => res.send("CredVerse Scaffold is running."));

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
