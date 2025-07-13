import { z } from "zod";
import { requiredText } from "../../../../../common/functions/zodExtensions";

export const programInputSchema = z.object({
  id: z.number().optional(),
  name: requiredText(),
  aim: requiredText(),
  isInClientContext: z.boolean().optional(),
});

export type ProgramInput = z.infer<typeof programInputSchema>;
