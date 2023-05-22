import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";

import { errorHandler } from "@middleware/error";
import { notFound } from "@middleware/404";
import { initRoutes } from "@route/init";

export const initMiddlewares = (app: Application) => {
  app.use(cors());
  app.use(compression());
  app.use(morgan("tiny"));
  app.use(express.json());
  app.use("/static", express.static("src/public"));
  initRoutes(app, "/api/v1");
  app.use(notFound);
  app.use(errorHandler);
};
