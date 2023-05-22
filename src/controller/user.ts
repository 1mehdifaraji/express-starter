import { RequestHandler } from "express";

import { resolve } from "@util/resolve";
import { getUser as User } from "@service/user";

export const getUser = (async (req, res, next) => {
  if (req.query?.userId) {
    const { userId } = req.query as any;
    const user = await User(userId, next);
    resolve(res, user);
  } else {
    const error = new Error("User id not provided in query .");
    next(error);
  }
}) as RequestHandler;

export const createUser = (async (req, res, next) => {
  const { userId } = req.query as any;
  const user = await User(userId, next);
  resolve(res, user);
}) as RequestHandler;
