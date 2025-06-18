import { z } from "zod";

export const registerSchema = z.object({
  email: z
    .string()
    .email("Invalid email format")
    .max(255, "Email too long")
    .toLowerCase(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password too long")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name too long")
    .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\+995/, "Phone number must start with +995")
    .max(13, "Phone number too long")
    .regex(/^\+995\d{9}$/, "Phone number must be in format +995XXXXXXXXX"),
  role: z
    .enum(["admin", "master", "client"], {
      required_error: "Please select a role",
      invalid_type_error: "Invalid role selected",
    }),
});

 