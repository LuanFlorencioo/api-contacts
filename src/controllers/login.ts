import { Request, Response } from "express";
import { iLoginRequest } from "../interfaces";
import services from "../services";

const login = async (req: Request, res: Response): Promise<Response> => {
  const loginData: iLoginRequest = req.body;
  const token = await services.generateToken(loginData);

  return res.status(200).json(token);
}

export {
  login,
}
