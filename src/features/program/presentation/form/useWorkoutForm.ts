import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import type { Workout } from "../../data/types/programSchema";
import { workoutInputSchema } from "../../data/types/input/workoutInputSchema";

export default function useWorkoutForm(workout?: Workout) {
  const { control, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      id: workout?.id,
      name: workout?.name,
    },
    mode: "all",
    resolver: zodResolver(workoutInputSchema),
  });

  useEffect(
    () =>
      reset({
        id: workout?.id,
        name: workout?.name,
      }),
    [workout, reset]
  );

  const { isDirty, isValid } = formState;

  const canUpsert = isValid && isDirty;

  return {
    handleSubmit,
    control,
    canUpsert,
  };
}
