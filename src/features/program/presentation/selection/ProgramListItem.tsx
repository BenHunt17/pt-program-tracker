import { cn } from "../../../../common/functions/classnames";
import useProgramBuilderContext from "../../context/useProgramBuilderContext";
import type { Program } from "../../data/types/programSchema";

interface ProgramListItemProps {
  program: Program;
}

export default function ProgramListItem({ program }: ProgramListItemProps) {
  const { selectedProgram, setSelectedProgram } = useProgramBuilderContext();

  return (
    <div
      onClick={() => setSelectedProgram(program)}
      className={cn(
        "cursor-pointer p-1 rounded-md",
        selectedProgram?.id === program.id ? "bg-accent text-on-accent" : ""
      )}
    >
      {program.name}
    </div>
  );
}
