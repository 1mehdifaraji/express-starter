import { RequestHandler } from "express";

export const homeMiddleware = ((req, res, next) => {
  res.locals.name = "mehdi";
  next();
}) as RequestHandler;
