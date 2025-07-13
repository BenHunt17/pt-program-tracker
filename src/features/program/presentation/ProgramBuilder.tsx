import ProgramBuilderContextProvider from "../context/ProgramBuilderContextProvider";
import ProgramEditor from "./editor/ProgramEditor";
import ProgramList from "./selection/ProgramList";

export default function ProgramBuilder() {
  return (
    <ProgramBuilderContextProvider>
      <div className="h-full grid grid-cols-[1fr_5fr] border-t-1">
        <div className="h-full bg-secondary w-full p-4 border-r-1 border-primary border-dashed rounded-tl-md">
          <ProgramList />
        </div>
        <div className="h-full w-full p-4">
          <ProgramEditor />
        </div>
      </div>
    </ProgramBuilderContextProvider>
  );
}
