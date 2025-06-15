import { createContext } from "react";

interface ClientContext {
  clientId: number | undefined;
  setClientId: (clientId: number | undefined) => void;
}

export const ClientContext = createContext<ClientContext>({
  clientId: undefined,
  setClientId: () => {},
});
