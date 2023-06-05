import { z } from "zod";
import { contactSchema } from "./contacts";

const clientSchema = z.object({
  id: z.number(),
  full_name: z.string().min(5).max(127),
  email: z.string().email().max(50),
  password: z.string().min(6).max(16),
  phone: z.string().max(25),
  created_at: z.date(),
})

const clientSchemaRequest = clientSchema.omit({
  id: true,
  created_at: true,
})

const clientSchemaUpdate = clientSchemaRequest.partial();

const clientSchemaResponse = clientSchema.omit({
  password: true,
})

const clientSchemaRetrieve = clientSchemaResponse.extend({
  contacts: z.array(contactSchema),
})

export {
  clientSchema,
  clientSchemaRequest,
  clientSchemaUpdate,
  clientSchemaResponse,
  clientSchemaRetrieve,
}
