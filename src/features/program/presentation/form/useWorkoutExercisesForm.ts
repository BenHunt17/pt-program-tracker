import { useFieldArray, useForm } from "react-hook-form";
import { exerciseSchema, type Exercise } from "../../data/types/exerciseSchema";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

export default function useWorkoutExercisesForm(exercises: Exercise[]) {
  const { control, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      exercises: exercises.map((x) => ({
        id: x.id,
        name: x.name,
        type: x.type,
      })),
    },
    mode: "all",
    resolver: zodResolver(z.object({ exercises: z.array(exerciseSchema) })),
  });

  const { fields, append, remove } = useFieldArray({
    keyName: "FieldArrayId",
    control,
    name: "exercises",
  });

  useEffect(
    () =>
      reset({
        exercises: exercises.map((x) => ({
          id: x.id,
          name: x.name,
          type: x.type,
        })),
      }),
    [exercises, reset]
  );

  const { isDirty, isValid } = formState;

  const canUpdate = isValid && isDirty;

  return {
    handleSubmit,
    canUpdate,
    fields,
    appendExercise: append,
    removeExercise: remove,
  };
}
