import { z } from "zod";
import { exerciseSchema } from "./exerciseSchema";

export const programSchema = z.object({
  id: z.number(),
  name: z.string(),
  aim: z.string().optional(),
  isClientSpecific: z.boolean(),
  workouts: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      exercises: z.array(exerciseSchema),
    })
  ),
});

export type Program = z.infer<typeof programSchema>;
export type Workout = z.infer<typeof programSchema>["workouts"][number];
