import { z } from "zod";

export const reviewBillingSchema = z.object({
  billingId: z.string(),
  status: z.enum(["approve", "reject"]),
  adminNote: z.string().optional(),
});

export type ReviewBillingSchema = z.infer<typeof reviewBillingSchema>;
