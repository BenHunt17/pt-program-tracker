import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clientService } from "../clientService";
import type { ClientInput } from "../types/clientInputSchema";
import type { Client } from "../types/clientSchema";

export default function useCreateClientMutation(
  onCreated: (createdClient: Client) => void
) {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation({
    mutationFn: (input: ClientInput) => clientService.createClient(input),
    onSuccess: (data) => {
      queryClient.setQueriesData<Client[]>(
        { queryKey: ["clients"] },
        (current) => {
          if (current === undefined) {
            return [data];
          }
          return [...current, data];
        }
      );
      onCreated(data);
    },
  });

  return { createClient: mutate, loading: status === "pending" };
}
