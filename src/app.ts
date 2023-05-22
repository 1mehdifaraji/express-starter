import express from "express";
import { initMiddlewares } from "@middleware/init";
import { dataSource } from "@config/db";

const PORT = process.env.PORT;
const app = express();

initMiddlewares(app);

export const runServer = () => {
  dataSource.initialize().then(() =>
    app.listen(PORT, () => {
      console.log("Server ran on " + PORT);
    })
  );
};
