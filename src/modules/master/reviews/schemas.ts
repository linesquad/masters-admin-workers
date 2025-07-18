import { z } from "zod";

export const replySchema = z.object({
  reviewId: z.string(),
  masterReply: z.string().min(1, "reply is required"),
});
