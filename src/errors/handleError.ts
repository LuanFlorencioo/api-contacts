import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import AppError from "./AppError";

const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    const {message, statusCode} = err;
    return res.status(statusCode).json({ message });
  }

  if (err instanceof ZodError) {
    const message = err.flatten().fieldErrors;
    return res.status(400).json({ message });
  }

  console.log(err);

  return res.status(500).json({
    message: "Internal server error"
  })
}

export default handleError;
