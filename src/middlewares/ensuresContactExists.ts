import { Request, Response, NextFunction } from "express";
import { contactRepository } from "../repositories";
import { AppError } from "../errors";

const ensuresContactExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const contactId = req.params.contact_id;

  const regex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

  if (!regex.test(contactId)) {
    throw new AppError("Id invalid");
  }

  const existsContact = await contactRepository.findOne({
    where: {
      id: contactId,
      client: { id: res.locals.client_id }
    }
  })

  if (!existsContact) {
    throw new AppError("Contact not exists", 404);
  }

  return next();
}

export default ensuresContactExists;
