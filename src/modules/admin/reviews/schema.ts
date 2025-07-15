import { z } from "zod";
import { ReviewStatus } from "./api/reviews";

export const adminUpdateStatusSchema = z.object({
  reviewId: z.string(),
  status: z.nativeEnum(ReviewStatus),
  adminNote: z
    .string()
    .min(1, { message: "Admin note is required" })
    .max(1000, { message: "Admin note must be less than 1000 characters" })
    .optional(),
});
