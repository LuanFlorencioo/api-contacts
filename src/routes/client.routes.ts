import { Router } from "express";
import {
  validateBody,
  isEmailUnique,
  ensuresAuth,
} from "../middlewares";
import {
  createClient,
  readClient,
} from "../controllers";
import {
  clientSchemaRequest,
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
  readClient,
)

export default clientRouter;
