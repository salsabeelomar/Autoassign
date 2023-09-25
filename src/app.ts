import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from express server.");
});
app.use(express.static(path.join(__dirname, "..", "public")));

export { app };
