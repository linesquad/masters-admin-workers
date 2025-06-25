import { z } from "zod";

export const createCitySchema = z.object({
  name: z
    .string()
    .min(1, "City name is required")
    .min(2, "City name must be at least 2 characters")
    .max(100, "City name must not exceed 100 characters"),
  image: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Please select an image")
    .refine(
      (files) => files.length === 0 || files[0]?.size <= 5000000,
      "Image must be less than 5MB"
    )
    .refine(
      (files) =>
        files.length === 0 ||
        ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
          files[0]?.type
        ),
      "Only JPEG, PNG, and WebP images are allowed"
    ),
});

export type CreateCityFormData = z.infer<typeof createCitySchema>; 