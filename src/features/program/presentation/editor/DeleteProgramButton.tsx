import SecondaryButton from "../../../../common/components/SecondaryButton";
import useProgramBuilderContext from "../../context/useProgramBuilderContext";
import useDeleteProgramMutation from "../../data/mutations/useDeleteProgramMutation";

//TODo - delete confirmation modal

export default function DeleteProgramButton() {
  const { setSelectedProgram } = useProgramBuilderContext();

  const { deleteProgram, loading } = useDeleteProgramMutation(() =>
    setSelectedProgram(undefined)
  );

  return (
    <SecondaryButton onClick={deleteProgram} disabled={loading}>
      Delete program
    </SecondaryButton>
  );
}
