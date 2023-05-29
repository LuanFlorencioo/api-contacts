import { Router } from "express";
import {
  validateBody,
  isEmailUnique,
  ensuresAuth,
} from "../middlewares";
import {
  createClient,
  readClient,
  updateClient,
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
  readClient
)

clientRouter.patch(
  "",
  ensuresAuth,
  validateBody(clientSchemaUpdate),
  isEmailUnique,
  updateClient
)

export default clientRouter;
