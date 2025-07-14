import { useQuery } from "@tanstack/react-query";
import { exerciseService } from "../exerciseService";

export default function useExercsisesQuery() {
  const { data: exercises, status } = useQuery({
    queryKey: ["exercises"],
    queryFn: () => exerciseService.findAllExercises(),
  });

  return { exercises, loading: status === "pending" };
}
