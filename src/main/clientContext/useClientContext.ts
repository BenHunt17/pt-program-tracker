import { useContext } from "react";
import { ClientContext } from "./ClientContext";

export default function useClientContext() {
  return useContext(ClientContext);
}
