import { z } from "zod";

// Schema for form inputs (what react-hook-form receives)
export const profileSettingsFormSchema = z.object({
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
  city: z.string().min(1, "City is required").max(100, "City name is too long"),
  image: z.instanceof(FileList).optional(),
});

// Schema for processed data (what gets sent to the API)
export const profileSettingsSchema = profileSettingsFormSchema.transform((data) => ({
  ...data,
  image: data.image && data.image.length > 0 ? data.image[0] : undefined,
}));

export type ProfileSettingsFormData = z.infer<typeof profileSettingsFormSchema>;
export type ProfileSettingsData = z.infer<typeof profileSettingsSchema>;
