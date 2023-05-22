import { Application } from "express";
import { userRouter } from "@route/user";

export const initRoutes = (app: Application, baseUrl: string) =>
  app.use(baseUrl, userRouter);
