import { z } from "zod";

export const profileSettingsSchema = z.object({
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
  city: z.string().min(1, "City is required").max(100, "City name is too long"),
});

export type ProfileSettingsData = z.infer<typeof profileSettingsSchema>;
