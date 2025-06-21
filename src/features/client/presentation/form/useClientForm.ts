import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Client } from "../../data/types/clientSchema";
import { clientInputSchema } from "../../data/types/clientInputSchema";
import { useEffect } from "react";

export default function useClientForm(client?: Client) {
  const { control, handleSubmit, formState, reset } = useForm({
    defaultValues: client,
    mode: "all",
    resolver: zodResolver(clientInputSchema),
  });

  useEffect(() => reset(client), [client, reset]);

  const { isDirty, isValid } = formState;
  const canRegister = isValid && isDirty;

  return {
    handleSubmit,
    control,
    canRegister,
  };
}
