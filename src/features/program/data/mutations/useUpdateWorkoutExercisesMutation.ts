import { useMutation, useQueryClient } from "@tanstack/react-query";
import useProgramBuilderContext from "../../context/useProgramBuilderContext";
import { programService } from "../programService";
import type { Program } from "../types/programSchema";

export default function useUpdateWorkoutExercisesMutation(workoutId: number) {
  const { selectedProgram } = useProgramBuilderContext();
  const queryClient = useQueryClient();

  if (!selectedProgram?.id) {
    throw new Error("No current program Id");
  }

  const { mutate, status } = useMutation({
    mutationFn: (input: number[]) =>
      programService.updateWorkoutExercises(
        selectedProgram.id,
        workoutId,
        input
      ),
    onSuccess: (data) => {
      queryClient.setQueriesData<Program[]>(
        { queryKey: ["programs"] },
        (current) => {
          if (current === undefined) {
            return [data];
          }
          if (current.some((x) => x.id === data.id)) {
            return current.map((x) => (x.id === data.id ? data : x));
          }
          return [...current, data];
        }
      );
    },
  });

  return { updateExercises: mutate, loading: status === "pending" };
}
