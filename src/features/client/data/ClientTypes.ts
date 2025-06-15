import { z } from "zod";

export const clientSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.string().pipe(z.coerce.date()),
  height: z.number(),
  weight: z.number(),
  email: z.string().optional().nullable(),
  phoneNumber: z.string().optional().nullable(),
  fitnessGoal: z.string().optional().nullable(),
  additionalNotes: z.string().optional().nullable(),
});

export type Client = z.infer<typeof clientSchema>;
