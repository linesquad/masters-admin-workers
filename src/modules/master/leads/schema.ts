import { z } from "zod";

export const completeLeadSchema = z.object({
  leadId: z.string().uuid(),
  price: z.coerce.number().min(1),
});
