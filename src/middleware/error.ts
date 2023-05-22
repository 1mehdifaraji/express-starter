import { NextFunction, Request, Response } from "express";

type ErrorHandlerType = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => Response;

export const errorHandler = ((err, req, res, next) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    data: [],
  });
}) as ErrorHandlerType;
