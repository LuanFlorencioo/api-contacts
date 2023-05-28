import { z } from "zod";
import {
  contactSchema,
  contactSchemaRequest,
} from "../schemas";
import { DeepPartial } from "typeorm";

type iContactRequest = z.infer<typeof contactSchemaRequest>;
type iContactResponse = z.infer<typeof contactSchema>;
type iContactUpdate = DeepPartial<iContactRequest>;

export {
  iContactRequest,
  iContactResponse,
  iContactUpdate,
}
