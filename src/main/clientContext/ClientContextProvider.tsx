import { useState } from "react";
import { localStorageKeys } from "../../common/constants/localStorageKeys";
import { ClientContext } from "./ClientContext";
import useClientQuery from "../../features/client/data/queries/useClientQuery";

interface ClientContextProviderProps {
  children: React.ReactNode;
}

export default function ClientContextProvider({
  children,
}: ClientContextProviderProps) {
  const previouslySelectedClientIdValue = localStorage.getItem(
    localStorageKeys.previouslySelectedClientId
  );

  let previouslySelectedClientId = previouslySelectedClientIdValue
    ? parseInt(previouslySelectedClientIdValue)
    : undefined;

  if (previouslySelectedClientId && isNaN(previouslySelectedClientId)) {
    previouslySelectedClientId = undefined;
  }

  const [clientId, setClientId] = useState<number | undefined>(
    previouslySelectedClientId
  );

  const { client, loading } = useClientQuery(clientId);

  const handleSetClientId = (clientId: number | undefined) => {
    if (clientId) {
      localStorage.setItem(
        localStorageKeys.previouslySelectedClientId,
        clientId.toString()
      );
    } else {
      localStorage.removeItem(localStorageKeys.previouslySelectedClientId);
    }
    setClientId(clientId);
  };

  return (
    <ClientContext.Provider
      value={{ clientId, setClientId: handleSetClientId, client, loading }}
    >
      {children}
    </ClientContext.Provider>
  );
}
