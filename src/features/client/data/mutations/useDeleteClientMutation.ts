import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Client } from "../types/clientSchema";
import useClientContext from "../../../../main/clientContext/useClientContext";
import { clientService } from "../clientService";

export default function useDeleteClientMutation(onDeleted: () => void) {
  const { client } = useClientContext();
  const queryClient = useQueryClient();

  if (!client?.id) {
    throw new Error("No current client Id");
  }

  const { mutate, status } = useMutation({
    mutationFn: () => clientService.deleteClient(client.id),
    onSuccess: () => {
      queryClient.setQueriesData<Client[]>(
        { queryKey: ["clients"] },
        (current) => current?.filter((x) => x.id !== client.id)
      );
      onDeleted();
    },
  });

  return { deleteClient: mutate, loading: status === "pending" };
}
