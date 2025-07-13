import { createContext } from "react";
import type { Program } from "../data/types/programSchema";

interface ProgramBuilderContext {
  selectedProgram: Program | undefined;
  setSelectedProgram: (program: Program | undefined) => void;
}

export const ProgramBuilderContext = createContext<ProgramBuilderContext>({
  selectedProgram: undefined,
  setSelectedProgram: () => {},
});
