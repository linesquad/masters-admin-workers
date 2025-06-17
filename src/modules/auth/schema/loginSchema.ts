import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email format")
    .max(255, "Email too long")
    .toLowerCase(),
  password: z
    .string()
    .min(1, "Password is required")
    .max(100, "Password too long"),
});
export type LoginFormData = z.infer<typeof loginSchema>;