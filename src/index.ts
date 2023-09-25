import https from "https";
import fs from "fs";
import { app } from "./app";

https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(process.env.PORT, () => {
    console.log(process.env.PORT);
    console.log(`https://localhost:4000`);
    console.log("server is runing at port 4000");
  });
