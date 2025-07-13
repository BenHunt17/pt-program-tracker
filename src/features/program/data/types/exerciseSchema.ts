import { z } from "zod";

export const exerciseSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.union([
    z.literal("NotSet"),
    z.literal("Cardio"),
    z.literal("Strength"),
  ]),
});

export type Exercise = z.infer<typeof exerciseSchema>;
export type ExerciseType = z.infer<typeof exerciseSchema>["type"];
