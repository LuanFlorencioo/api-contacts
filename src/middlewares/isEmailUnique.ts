import { NextFunction, Request, Response } from "express";
import Client from "../entities/client.entities";
import { clientRepository } from "../repositories";
import { AppError } from "../errors";

const isEmailUnique = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const emailBodyRequest = req.body.email;

  if (emailBodyRequest) {
    const isEmailExists: Client | null = await clientRepository.findOneBy({email: emailBodyRequest});
  
    if (isEmailExists) {
      throw new AppError("This Email already exists", 409);
    }
  }

  return next();
}

export default isEmailUnique;
