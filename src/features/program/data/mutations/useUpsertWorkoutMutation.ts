import { useMutation, useQueryClient } from "@tanstack/react-query";
import { programService } from "../programService";
import type { Program } from "../types/programSchema";
import useProgramBuilderContext from "../../context/useProgramBuilderContext";
import type { WorkoutInput } from "../types/input/workoutInputSchema";

export default function useUpsertWorkoutMutation() {
  const { selectedProgram } = useProgramBuilderContext();

  const queryClient = useQueryClient();

  if (!selectedProgram?.id) {
    throw new Error("No current program Id");
  }

  const { mutate, status } = useMutation({
    mutationFn: (input: WorkoutInput) =>
      programService.upsertWorkout(selectedProgram.id, input),
    onSuccess: (data) => {
      queryClient.setQueriesData<Program[]>(
        { queryKey: ["programs"] },
        (current) => {
          if (current === undefined) {
            return [data];
          }
          return current.map((x) => (x.id === data.id ? data : x));
        }
      );
    },
  });

  return { upsertWorkout: mutate, loading: status === "pending" };
}
