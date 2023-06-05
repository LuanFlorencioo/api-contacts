import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

const validateBody =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const { body } = req;
    const validateData = schema.parse(body);
    req.body = validateData;

    return next();
  }

export default validateBody;
