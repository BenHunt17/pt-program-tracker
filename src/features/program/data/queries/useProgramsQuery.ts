import { useQuery } from "@tanstack/react-query";
import { programService } from "../programService";

export default function useProgramsQuery() {
  const { data: programs, status } = useQuery({
    queryKey: ["programs"],
    queryFn: () => programService.findAllPrograms(),
  });

  return { programs, loading: status === "pending" };
}
