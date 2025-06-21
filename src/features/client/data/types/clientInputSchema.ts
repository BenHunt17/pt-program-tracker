import z from "zod";
import {
  requiredNumber,
  requiredText,
} from "../../../../common/functions/zodExtensions";

export const clientInputSchema = z.object({
  firstName: requiredText().max(50),
  lastName: z.string().nonempty().max(50),
  dateOfBirth: z.coerce.date(),
  height: requiredNumber({ min: 0, max: 999 }),
  weight: requiredNumber({ min: 0, max: 999 }),
  email: z.string().optional().nullable(),
  phoneNumber: z.string().optional().nullable(),
  fitnessGoal: z.string().optional().nullable(),
  additionalNotes: z.string().optional().nullable(),
});

export type ClientInput = z.infer<typeof clientInputSchema>;
