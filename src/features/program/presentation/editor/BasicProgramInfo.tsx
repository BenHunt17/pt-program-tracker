import { Controller } from "react-hook-form";
import InlineTextInput from "../../../../common/components/form/InlineTextInput";
import PrimaryButton from "../../../../common/components/PrimaryButton";
import useProgramBuilderContext from "../../context/useProgramBuilderContext";
import useProgramForm from "../form/useProgramForm";
import useUpsertProgramMutation from "../../data/mutations/useUpsertProgramMutation";
import type { ProgramInput } from "../../data/types/input/programInputSchema";
import DeleteProgramButton from "./DeleteProgramButton";

export default function BasicProgramInfo() {
  const { selectedProgram } = useProgramBuilderContext();

  const { handleSubmit, control, canUpsert } = useProgramForm(selectedProgram);

  const { upsertProgram, loading } = useUpsertProgramMutation();

  const handleUpsertProgram = (input: ProgramInput) => upsertProgram(input);

  return (
    <div className="flex border-1 p-4 rounded-lg justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h5 className="text-xl font-bold">Program name</h5>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <InlineTextInput
                value={field.value}
                setValue={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />
        </div>
        <div className="flex items-center gap-2">
          <h5 className="text-xl font-bold">Aim</h5>
          <Controller
            control={control}
            name="aim"
            render={({ field, fieldState }) => (
              <InlineTextInput
                value={field.value}
                setValue={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />
        </div>
        {canUpsert && (
          <div>
            <PrimaryButton
              onClick={handleSubmit(handleUpsertProgram)}
              disabled={loading}
            >
              Update
            </PrimaryButton>
          </div>
        )}
      </div>
      <DeleteProgramButton />
    </div>
  );
}
