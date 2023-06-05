import { Request, Response, NextFunction } from "express";
import { clientRepository } from "../repositories";
import { AppError } from "../errors";

const ensuresClientExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const clientId = res.locals.client_id;
  const existsClient: boolean = await clientRepository.exist({
    where: {
      id: clientId
    }
  })

  if (!existsClient) {
    throw new AppError("Client not exists", 404);
  }

  return next();
}

export default ensuresClientExists;
