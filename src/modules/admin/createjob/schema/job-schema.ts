import z from "zod";

export const createJobSchema = z.object({
    categoryId: z.string().min(1, "Please select a category"),
    title: z.object({
      en: z.string().min(1, "English title is required"),
      ru: z.string().min(1, "Russian title is required"),
      ka: z.string().min(1, "Georgian title is required"),
    }),
    description: z.object({
      en: z.string().min(1, "English description is required"),
      ru: z.string().min(1, "Russian description is required"),
      ka: z.string().min(1, "Georgian description is required"),
    }),
  });
  
  export type CreateJobFormData = z.infer<typeof createJobSchema>;