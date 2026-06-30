import { z } from "zod";

export const bookingSchema = z.object({
  service: z.string().min(1, "Please select a service"),

  name: z.string().min(2, "Name is required"),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number must be 10 digits"),

  instagram: z.string().optional(),

  notes: z.string().optional(),
});

export type BookingSchema = z.infer<typeof bookingSchema>;