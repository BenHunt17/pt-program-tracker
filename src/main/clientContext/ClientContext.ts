import { createContext } from "react";
import type { Client } from "../../features/client/data/types/clientSchema";

interface ClientContext {
  clientId: number | undefined;
  setClientId: (clientId: number | undefined) => void;
  client: Client | undefined;
  loading: boolean;
}

export const ClientContext = createContext<ClientContext>({
  clientId: undefined,
  setClientId: () => {},
  client: undefined,
  loading: false,
});
