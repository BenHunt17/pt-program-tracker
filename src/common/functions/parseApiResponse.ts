import toast from "react-hot-toast";
import { ZodSchema, ZodError, z } from "zod";

export function parseApiResponse<T>(
  schema: ZodSchema<T>,
  data: unknown
): z.infer<typeof schema> {
  try {
    return schema.parse(data);
  } catch (error) {
    if (error instanceof ZodError) {
      toast.error(error.message);
    }
    throw error;
  }
}
