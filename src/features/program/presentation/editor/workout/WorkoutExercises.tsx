import FilterSelect from "../../../../../common/components/FilterSelect";
import useExercsisesQuery from "../../../data/queries/useExercisesQuery";
import useWorkoutExercisesForm from "../../form/useWorkoutExercisesForm";
import ExerciseCard from "./ExerciseCard";
import PrimaryButton from "../../../../../common/components/PrimaryButton";
import useUpdateWorkoutExercisesMutation from "../../../data/mutations/useUpdateWorkoutExercisesMutation";
import type { Workout } from "../../../data/types/programSchema";

interface WorkoutExercisesProps {
  workout: Workout;
}

export default function WorkoutExercises({ workout }: WorkoutExercisesProps) {
  const { fields, canUpdate, appendExercise, removeExercise } =
    useWorkoutExercisesForm(workout.exercises);

  const { updateExercises, loading } = useUpdateWorkoutExercisesMutation(
    workout.id
  );

  const { exercises } = useExercsisesQuery();

  const handleUpdateExercises = () => updateExercises(fields.map((x) => x.id));

  const exercsiseOptions =
    exercises?.filter((x) => !fields.some((xx) => xx.id === x.id)) ?? [];

  return (
    <>
      {fields.map((x) => (
        <ExerciseCard key={x.id} exercise={x} />
      ))}
      <FilterSelect
        value={undefined}
        onSelect={appendExercise}
        options={exercsiseOptions}
        labelFn={(opt) => opt.name}
      />
      {canUpdate && (
        <PrimaryButton onClick={handleUpdateExercises} disabled={loading}>
          Save
        </PrimaryButton>
      )}
    </>
  );
}
