import { Router } from "express";

import { getUser } from "@controller/user";

export const userRouter = Router();

userRouter.get("/user", getUser);
