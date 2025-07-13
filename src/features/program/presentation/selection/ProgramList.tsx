import useClientContext from "../../../../main/clientContext/useClientContext";
import useProgramsQuery from "../../data/queries/useProgramsQuery";
import CreateProgramButton from "../CreateProgramButton";
import ProgramListItem from "./ProgramListItem";

export default function ProgramList() {
  const { client } = useClientContext();

  const { programs, loading } = useProgramsQuery();

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h5 className="text-xl font-bold">Programs</h5>
        <CreateProgramButton />
      </div>
      <div className="border-t-2 pt-2">
        <h6 className="font-bold mb-2">Programs for {client?.fullName}</h6>
        {programs
          ?.filter((x) => x.isClientSpecific)
          .map((x) => (
            <ProgramListItem key={x.id} program={x} />
          ))}
      </div>
      <div>
        <h6 className="font-bold mb-2">Common programs</h6>
        {programs
          ?.filter((x) => !x.isClientSpecific)
          .map((x) => (
            <ProgramListItem key={x.id} program={x} />
          ))}
      </div>
    </div>
  );
}
