import { useState } from "react";
import { localStorageKeys } from "../../common/constants/localStorageKeys";
import { ClientContext } from "./ClientContext";

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

  return (
    <ClientContext.Provider value={{ clientId, setClientId }}>
      {children}
    </ClientContext.Provider>
  );
}
