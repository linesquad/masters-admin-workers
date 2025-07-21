import { z } from "zod";

export const masterProofSchema = z.object({
  billingLogId: z.string(),
  proofUrl: z
    .union([
      z.instanceof(File),
      z.string().transform((value) => (value === "" ? undefined : value)),
    ])
    .optional(),
  proofNote: z.string(),
});

export type MasterBillingInput = z.infer<typeof masterProofSchema>;
