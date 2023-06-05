import { z } from "zod";
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaArray,
} from "../schemas";
import { DeepPartial } from "typeorm";

type iContactRequest = z.infer<typeof contactSchemaRequest>;
type iContactResponse = z.infer<typeof contactSchema>;
type iContactUpdate = DeepPartial<iContactRequest>;
type iContactArray = z.infer<typeof contactSchemaArray>;

export {
  iContactRequest,
  iContactResponse,
  iContactUpdate,
  iContactArray,
}
