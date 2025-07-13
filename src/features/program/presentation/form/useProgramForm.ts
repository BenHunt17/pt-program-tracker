import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { programInputSchema } from "../../data/types/input/programInputSchema";
import type { Program } from "../../data/types/programSchema";

export default function useProgramForm(program?: Program) {
  const { control, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      id: program?.id,
      name: program?.name,
      aim: program?.aim,
      isInClientContext: program?.isClientSpecific,
    },
    mode: "all",
    resolver: zodResolver(programInputSchema),
  });

  useEffect(
    () =>
      reset({
        id: program?.id,
        name: program?.name,
        aim: program?.aim,
        isInClientContext: program?.isClientSpecific,
      }),
    [program, reset]
  );

  const { isDirty, isValid } = formState;

  const canUpsert = isValid && isDirty;

  return {
    handleSubmit,
    control,
    canUpsert,
  };
}
