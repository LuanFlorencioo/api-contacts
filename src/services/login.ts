import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import Client from "../entities/client.entities";
import { AppError } from "../errors";
import { iLoginRequest } from "../interfaces";
import { clientRepository } from "../repositories";
import "dotenv/config";
import { iLoginResponse } from "../interfaces/login";

const verifyCredentials = async ({email, password}: iLoginRequest): Promise<Client> => {
  const findClient: Client | null = await clientRepository.findOneBy({ email });

  if (!findClient) throw new AppError("Credentials invalid", 403);

  const isSamePassword: boolean = await compare(password, findClient.password);

  if (!isSamePassword) throw new AppError("Credentials invalid", 403);

  return findClient;
}

const generateToken = async (loginData: iLoginRequest): Promise<iLoginResponse> => {
  const findClient = await verifyCredentials(loginData);

  const jwtPayload = { client_id: findClient.id };
  const jwtSecretKey = process.env.SECRET_KEY!;
  const jwtOptions = {
    expiresIn: "24h",
    subject: findClient.email
  }

  const token = jwt.sign(
    jwtPayload,
    jwtSecretKey,
    jwtOptions
  )

  return {
    token
  }
}

export {
  verifyCredentials,
  generateToken,
}
