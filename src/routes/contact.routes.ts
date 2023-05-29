import { Router } from "express";
import { ensuresAuth, ensuresClientExists, validateBody } from "../middlewares";
import { contactSchemaRequest } from "../schemas";
import { createContact } from "../controllers";

const contactRouter: Router = Router();

contactRouter.post(
  "",
  ensuresAuth,
  ensuresClientExists,
  validateBody(contactSchemaRequest),
  createContact
)

export default contactRouter;
