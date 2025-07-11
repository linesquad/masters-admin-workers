import z from "zod";

export const jobAssignmentFormSchema = z.object({
  priceMin: z
    .number()
    .int("Minimum price must be a whole number")
    .min(1, "Minimum price must be at least 1₾")
    .max(100000, "Minimum price cannot exceed 100,000₾"),
  priceMax: z
    .number()
    .int("Maximum price must be a whole number")
    .min(1, "Maximum price must be at least 1₾")
    .max(100000, "Maximum price cannot exceed 100,000₾"),
  durationMinutes: z
    .number()
    .int("Duration must be a whole number")
    .min(5, "Duration must be at least 5 minutes")
    .max(1440, "Duration cannot exceed 24 hours")
    .optional(),
  note: z.string().max(500, "Note cannot exceed 500 characters").optional(),
});

export type JobAssignmentFormData = z.infer<typeof jobAssignmentFormSchema>;
