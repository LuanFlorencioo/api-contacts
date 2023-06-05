import { Request, Response } from "express";
import { iContactRequest, iContactUpdate } from "../interfaces";
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

const updateContact = async (req: Request, res: Response): Promise<Response> => {
  const body: iContactUpdate = req.body;
  const clientId: number = res.locals.client_id;
  const contactId = req.params.contact_id;
  const contactUpdated = await services.updateContact(body, clientId, contactId);

  return res.json(contactUpdated);
}

const deleteContact = async (req: Request, res: Response): Promise<Response> => {
  const clientId: number = res.locals.client_id;
  const contactId: string = req.params.contact_id;
  await services.deleteContact(clientId, contactId);

  return res.status(204).json();
}

export {
  createContact,
  readContacts,
  updateContact,
  deleteContact,
}
