import { Controller } from "react-hook-form";
import InlineTextInput from "../../../../../common/components/form/InlineTextInput";
import type { Workout } from "../../../data/types/programSchema";
import useWorkoutForm from "../../form/useWorkoutForm";
import PrimaryButton from "../../../../../common/components/PrimaryButton";
import useUpsertWorkoutMutation from "../../../data/mutations/useUpsertWorkoutMutation";
import type { WorkoutInput } from "../../../data/types/input/workoutInputSchema";
import WorkoutExercises from "./WorkoutExercises";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  const { control, canUpsert, handleSubmit } = useWorkoutForm(workout);

  const { upsertWorkout, loading } = useUpsertWorkoutMutation();

  const handleUpsertWorkout = (input: WorkoutInput) => upsertWorkout(input);

  return (
    <div className="h-full flex flex-col gap-4 p-4 rounded-md border-2 border-primary">
      <div className="flex flex-col gap-2 pb-6 border-b-2 border-primary">
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
        {canUpsert && (
          <div>
            <PrimaryButton
              onClick={handleSubmit(handleUpsertWorkout)}
              disabled={loading}
            >
              Save
            </PrimaryButton>
          </div>
        )}
      </div>
      <WorkoutExercises workout={workout} />
    </div>
  );
}
