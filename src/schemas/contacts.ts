import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
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

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaUpdate,
}
