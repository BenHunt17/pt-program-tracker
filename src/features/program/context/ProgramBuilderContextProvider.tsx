import { useState } from "react";
import { ProgramBuilderContext } from "./ProgramBuilderContext";
import useProgramsQuery from "../data/queries/useProgramsQuery";

interface ProgramBuilderContextProviderProps {
  children: React.ReactNode;
}

export default function ProgramBuilderContextProvider({
  children,
}: ProgramBuilderContextProviderProps) {
  const [selectedProgramId, setSelectedProgramId] = useState<
    number | undefined
  >(undefined);

  const { programs } = useProgramsQuery();

  const selectedProgram = programs?.find((x) => x.id === selectedProgramId);

  return (
    <ProgramBuilderContext.Provider
      value={{
        selectedProgram,
        setSelectedProgram: (program) => setSelectedProgramId(program.id),
      }}
    >
      {children}
    </ProgramBuilderContext.Provider>
  );
}
