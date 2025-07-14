import { z } from "zod";
import { requiredText } from "../../../../../common/functions/zodExtensions";

export const workoutInputSchema = z.object({
  id: z.number().optional(),
  name: requiredText(),
});

export type WorkoutInput = z.infer<typeof workoutInputSchema>;
