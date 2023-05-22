import { RequestHandler } from 'express';

export const notFound = ((req, res, next) => {
  const error: Error = new Error('Route not found');
  error.statusCode = 404;
  next(error);
}) as RequestHandler;
