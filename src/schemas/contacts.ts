import { z } from "zod";

const contactSchema = z.object({
  id: z.string(),
  full_name: z.string().min(5).max(127),
  email: z.string().email().max(50),
  phone: z.string().max(25),
  created_at: z.date(),
})

const contactSchemaRequest = contactSchema.omit({
  id: true,
  created_at: true,
})

const contactSchemaUpdate = contactSchemaRequest.partial();

const contactSchemaArray = z.object({
  contacts: contactSchema.array()
})

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaUpdate,
  contactSchemaArray,
}
