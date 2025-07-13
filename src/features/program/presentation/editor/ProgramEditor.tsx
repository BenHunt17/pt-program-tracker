import useProgramBuilderContext from "../../context/useProgramBuilderContext";
import CreateProgramButton from "../CreateProgramButton";
import BasicProgramInfo from "./BasicProgramInfo";
import WorkoutCard from "./WorkoutCard";

export default function ProgramEditor() {
  const { selectedProgram } = useProgramBuilderContext();

  if (selectedProgram === undefined) {
    return (
      <div className="h-full flex-col flex justify-center items-center gap-1">
        <h4 className="text-xl font-bold">No program selected</h4>
        <CreateProgramButton />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <BasicProgramInfo />
      {selectedProgram.workouts.length > 0 && (
        <div>
          <h4 className="text-xl text-on-background font-bold">Workouts</h4>
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-4">
            {selectedProgram.workouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
