import { Response } from "express";

export const resolve = (res: Response, data: any) => {
  const resolveStatus = data?.statusCode || 200;
  const resolveMsg = data?.message || "Successfully fetched data .";
  res.json({
    success: true,
    status: resolveStatus,
    message: resolveMsg,
    data,
  });
};
