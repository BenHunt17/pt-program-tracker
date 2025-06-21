import { useQuery } from "@tanstack/react-query";
import { clientService } from "../clientService";

export default function useClientsQuery() {
  const { data: clients, status } = useQuery({
    queryKey: ["clients"],
    queryFn: () => clientService.findAllClients(),
  });

  return { clients, loading: status === "pending" };
}
