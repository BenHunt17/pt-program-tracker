import { useContext } from "react";
import { ProgramBuilderContext } from "./ProgramBuilderContext";

export default function useProgramBuilderContext() {
  return useContext(ProgramBuilderContext);
}
