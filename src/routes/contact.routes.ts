import { Router } from "express";
import { ensuresAuth, ensuresClientExists, ensuresContactExists, validateBody } from "../middlewares";
import { contactSchemaRequest, contactSchemaUpdate } from "../schemas";
import { createContact, deleteContact, readContacts, updateContact } from "../controllers";

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

contactRouter.patch(
  "/:contact_id",
  ensuresAuth,
  ensuresClientExists,
  ensuresContactExists,
  validateBody(contactSchemaUpdate),
  updateContact
)

contactRouter.delete(
  "/:contact_id",
  ensuresAuth,
  ensuresClientExists,
  ensuresContactExists,
  deleteContact
)

export default contactRouter;
