import { useQuery } from "@tanstack/react-query";
import { clientService } from "../clientService";

export default function useClientQuery(clientId: number | undefined) {
  const { data: client, status } = useQuery({
    queryKey: ["client", { id: clientId }],
    queryFn: () => {
      if (clientId) {
        return clientService.getClient(clientId);
      }
    },
    enabled: clientId !== undefined,
  });

  return { client, loading: clientId !== undefined && status === "pending" };
}
