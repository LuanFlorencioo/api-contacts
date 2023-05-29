import { Router } from "express";
import { ensuresAuth, ensuresClientExists, validateBody } from "../middlewares";
import { contactSchemaRequest } from "../schemas";
import { createContact, readContacts } from "../controllers";

const contactRouter: Router = Router();

contactRouter.post(
  "",
  ensuresAuth,
  ensuresClientExists,
  validateBody(contactSchemaRequest),
  createContact
)

contactRouter.get(
  "",
  ensuresAuth,
  ensuresClientExists,
  readContacts
)

export default contactRouter;
