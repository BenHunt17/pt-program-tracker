import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Client } from "../types/clientSchema";
import type { ClientInput } from "../types/clientInputSchema";
import useClientContext from "../../../../main/clientContext/useClientContext";
import { clientService } from "../clientService";

export default function useUpdateClientMutation() {
  const { client } = useClientContext();
  const queryClient = useQueryClient();

  if (!client?.id) {
    throw new Error("No current client Id");
  }

  const { mutate, status } = useMutation<Client, unknown, ClientInput>({
    mutationFn: (variables) => clientService.updateClient(client.id, variables),
    onSuccess: (updatedClient) => {
      queryClient.setQueryData(
        ["client", { id: updatedClient.id }],
        updatedClient
      );
      queryClient.setQueriesData<Client[]>(
        { queryKey: ["clients"] },
        (current) =>
          current?.map((x) => (x.id === updatedClient.id ? updatedClient : x))
      );
    },
  });

  return { updateClient: mutate, loading: status === "pending" };
}
