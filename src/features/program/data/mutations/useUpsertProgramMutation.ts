import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ProgramInput } from "../types/input/programInputSchema";
import { programService } from "../programService";
import type { Program } from "../types/programSchema";
export default function useUpsertProgramMutation() {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation({
    mutationFn: (input: ProgramInput) => programService.upsertProgram(input),
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

  return { upsertProgram: mutate, loading: status === "pending" };
}
