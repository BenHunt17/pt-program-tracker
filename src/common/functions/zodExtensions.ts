import { z } from "zod";

export function requiredText() {
  return z.string().nonempty({ message: "Required" });
}

export function requiredNumber(options?: { min?: number; max?: number }) {
  return z.coerce
    .number()
    .min(options?.min ?? -Infinity)
    .max(options?.max ?? Infinity);
}
