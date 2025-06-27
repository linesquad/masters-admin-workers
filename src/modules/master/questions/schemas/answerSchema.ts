import { z } from "zod";

export const answerSchema = z.object({
  answer: z
    .string()
    .min(10, "Answer must be at least 10 characters long")
    .max(250, "Answer cannot exceed 250 characters")
    .trim(),
});

export type AnswerFormData = z.infer<typeof answerSchema>; 