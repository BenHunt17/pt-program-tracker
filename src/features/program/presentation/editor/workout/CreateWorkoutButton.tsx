import { Controller } from "react-hook-form";
import Modal from "../../../../../common/components/layout/Modal";
import TextInput from "../../../../../common/components/form/TextInput";
import PrimaryButton from "../../../../../common/components/PrimaryButton";
import useWorkoutForm from "../../form/useWorkoutForm";
import useUpsertWorkoutMutation from "../../../data/mutations/useUpsertWorkoutMutation";
import type { WorkoutInput } from "../../../data/types/input/workoutInputSchema";
import { useState } from "react";

export default function CreateWorkoutButton() {
  const { handleSubmit, control, canUpsert } = useWorkoutForm();

  const { upsertWorkout, loading } = useUpsertWorkoutMutation();

  const handleUpsertProgram = (input: WorkoutInput) => {
    upsertWorkout(input);
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PrimaryButton onClick={() => setIsOpen(true)}>
        Create workout
      </PrimaryButton>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col gap-8">
          <h3 className="text-xl font-bold">Create workout</h3>
          <div className="flex flex-col gap-2">
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState }) => (
                <TextInput
                  label="Workout name"
                  isRequired
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
