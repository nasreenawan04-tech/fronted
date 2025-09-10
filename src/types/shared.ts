
import { z } from "zod";

// User schema
export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  createdAt: z.date().optional(),
});

export type User = z.infer<typeof UserSchema>;

// PDF file schema
export const PDFFileSchema = z.object({
  id: z.string(),
  filename: z.string(),
  originalName: z.string(),
  size: z.number(),
  uploadedAt: z.date(),
  userId: z.string().optional(),
});

export type PDFFile = z.infer<typeof PDFFileSchema>;

// API response schemas
export const ApiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
  data: z.any().optional(),
});

export type ApiResponse<T = any> = {
  success: boolean;
  message?: string;
  data?: T;
};
