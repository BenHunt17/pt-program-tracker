import { useState } from "react";
import Modal from "../../../common/components/layout/Modal";
import PrimaryButton from "../../../common/components/PrimaryButton";
import TextInput from "../../../common/components/form/TextInput";
import useProgramForm from "./form/useProgramForm";
import useUpsertProgramMutation from "../data/mutations/useUpsertProgramMutation";
import type { ProgramInput } from "../data/types/input/programInputSchema";
import { Controller } from "react-hook-form";
import useClientContext from "../../../main/clientContext/useClientContext";
import CheckboxInput from "../../../common/components/form/Checkbox";

export default function CreateProgramButton() {
  const { client } = useClientContext();

  const { handleSubmit, control, canUpsert } = useProgramForm();

  const { upsertProgram, loading } = useUpsertProgramMutation();

  const handleUpsertProgram = (input: ProgramInput) => {
    upsertProgram(input);
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PrimaryButton onClick={() => setIsOpen(true)}>
        Create program
      </PrimaryButton>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col gap-8">
          <h3 className="text-xl font-bold">Create program</h3>
          <div className="flex flex-col gap-2">
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState }) => (
                <TextInput
                  label="Program name"
                  isRequired
                  value={field.value}
                  setValue={field.onChange}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="aim"
              render={({ field, fieldState }) => (
                <TextInput
                  isRequired
                  label="Aim"
                  value={field.value}
                  setValue={field.onChange}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="isInClientContext"
              render={({ field, fieldState }) => (
                <CheckboxInput
                  label={`Is specifically for ${client?.fullName}`}
                  value={field.value}
                  setValue={field.onChange}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>
          <div className="flex justify-end">
            <PrimaryButton
              onClick={handleSubmit(handleUpsertProgram)}
              disabled={!canUpsert && loading}
            >
              Create
            </PrimaryButton>
          </div>
        </div>
      </Modal>
    </>
  );
}
