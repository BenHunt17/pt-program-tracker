import type { Workout } from "../../data/types/programSchema";
import ExerciseCard from "./ExerciseCard";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <div className="h-full flex flex-col gap-4 p-4 rounded-md border-2 border-primary">
      <h5 className="text-on-background font-bold">{workout.name}</h5>
      {workout.exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
}
