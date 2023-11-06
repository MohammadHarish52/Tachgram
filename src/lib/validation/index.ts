import * as z from "zod";

export const SignupValidation = z.object({
  name: z
    .string()
    .min(2, {
      message: "Too  short",
    })
    .max(45),
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(8, {
      message: "Too short bitch",
    })
    .max(16),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, {
      message: "Too short bitch",
    })
    .max(16),
});

export const postValidation = z.object({
  caption: z.string().max(2200),
  location: z.string().min(5).max(100),
  file: z.custom<File[]>(),
  tags: z.string(),
});
