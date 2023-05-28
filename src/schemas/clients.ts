import { z } from "zod";
import { contactSchema } from "./contacts";

const clientSchema = z.object({
  id: z.number(),
  full_name: z.string().min(5).max(127),
  email: z.string().email().max(50),
  password: z.string().min(6).max(16),
  phone: z.string().max(25),
  created_at: z.date(),
  contacts: z.array(contactSchema),
})

const clientSchemaRequest = clientSchema.omit({
  id: true,
  created_at: true,
  contacts: true,
})

const clientSchemaUpdate = clientSchemaRequest.partial();

const clientSchemaResponse = clientSchema.omit({
  password: true,
})

export {
  clientSchema,
  clientSchemaRequest,
  clientSchemaUpdate,
  clientSchemaResponse,
}
