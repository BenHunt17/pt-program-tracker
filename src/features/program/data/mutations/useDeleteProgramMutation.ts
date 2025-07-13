import { useMutation, useQueryClient } from "@tanstack/react-query";
import useProgramBuilderContext from "../../context/useProgramBuilderContext";
import { programService } from "../programService";
import type { Program } from "../types/programSchema";

export default function useDeleteProgramMutation(onDeleted: () => void) {
  const { selectedProgram } = useProgramBuilderContext();
  const queryClient = useQueryClient();

  if (!selectedProgram?.id) {
    throw new Error("No current program Id");
  }

  const { mutate, status } = useMutation({
    mutationFn: () => programService.deleteProgram(selectedProgram.id),
    onSuccess: () => {
      queryClient.setQueriesData<Program[]>(
        { queryKey: ["programs"] },
        (current) => current?.filter((x) => x.id !== selectedProgram.id)
      );
      onDeleted();
    },
  });

  return { deleteProgram: mutate, loading: status === "pending" };
}
