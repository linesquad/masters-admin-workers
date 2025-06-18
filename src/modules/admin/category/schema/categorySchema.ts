import { z } from "zod";

export const createCategorySchema = z.object({
  en: z.string()
    .min(1, "English name is required")
    .min(2, "English name must be at least 2 characters")
    .max(50, "English name must not exceed 50 characters"),
  
  ka: z.string()
    .min(1, "Georgian name is required")
    .min(2, "Georgian name must be at least 2 characters")
    .max(50, "Georgian name must not exceed 50 characters"),
  
  ru: z.string()
    .min(1, "Russian name is required")
    .min(2, "Russian name must be at least 2 characters")
    .max(50, "Russian name must not exceed 50 characters"),
});

export type CreateCategoryData = z.infer<typeof createCategorySchema>; 