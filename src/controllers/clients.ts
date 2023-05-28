import { Request, Response } from "express";
import { iClientRequest } from "../interfaces";
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

export {
  createClient,
  readClient,
}
