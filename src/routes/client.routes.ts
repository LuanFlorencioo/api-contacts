import { Router } from "express";
import {
  validateBody,
  isEmailUnique,
  ensuresAuth,
  ensuresClientExists,
} from "../middlewares";
import {
  createClient,
  readClient,
  updateClient,
  deleteClient,
} from "../controllers";
import {
  clientSchemaRequest, clientSchemaUpdate,
} from "../schemas";

const clientRouter: Router = Router();

clientRouter.post(
  "",
  validateBody(clientSchemaRequest),
  isEmailUnique,
  createClient
)

clientRouter.get(
  "",
  ensuresAuth,
  ensuresClientExists,
  readClient
)

clientRouter.patch(
  "",
  ensuresAuth,
  ensuresClientExists,
  validateBody(clientSchemaUpdate),
  isEmailUnique,
  updateClient
)

clientRouter.delete(
  "",
  ensuresAuth,
  ensuresClientExists,
  deleteClient
)

export default clientRouter;
