import { Request, Response } from "express";
import { iContactRequest } from "../interfaces";
import services from "../services";

const createContact = async (req: Request, res: Response): Promise<Response> => {
  const body: iContactRequest = req.body;
  const clientId: number = res.locals.client_id;
  const contactCreated = await services.createContact(body, clientId);

  return res.status(201).json(contactCreated);
}

const readContacts = async (req: Request, res: Response): Promise<Response> => {
  const clientId: number = res.locals.client_id;
  const contacts = await services.readContacts(clientId);

  return res.json(contacts);
}

export {
  createContact,
  readContacts,
}
