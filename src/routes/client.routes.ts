import { Router } from "express";
import {
  validateBody,
  isEmailUnique,
} from "../middlewares";
import {
  createClient,
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

export default clientRouter;
