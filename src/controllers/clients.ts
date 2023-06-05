import { Request, Response } from "express";
import { iClientRequest, iClientUpdate } from "../interfaces";
import services from "../services";

const createClient = async (req: Request, res: Response): Promise<Response> => {
  const body: iClientRequest = req.body;
  const clientCreated = await services.createClient(body);

  return res.status(201).json(clientCreated);
}

const readClient = async (req: Request, res: Response): Promise<Response> => {
  const clientId: number = res.locals.client_id;
  const clientFinded = await services.readClient(clientId);

  return res.json(clientFinded);
}

const updateClient = async (req: Request, res: Response): Promise<Response> => {
  const body: iClientUpdate = req.body;
  const clientId: number = res.locals.client_id;
  const clientUpdated = await services.updateClient(body, clientId);

  return res.json(clientUpdated);
}

const deleteClient = async (req: Request, res: Response): Promise<Response> => {
  const clientId: number = res.locals.client_id;
  await services.deleteClient(clientId);

  return res.status(204).json();
}

export {
  createClient,
  readClient,
  updateClient,
  deleteClient,
}
