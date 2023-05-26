import { Request, Response } from "express";
import { iClientRequest } from "../interfaces";
import services from "../services";

const createClient = async (req: Request, res: Response): Promise<Response> => {
  const body: iClientRequest = req.body;
  const clientCreated = await services.createClient(body);

  return res.status(201).json(clientCreated);
}

export {
  createClient,
}
