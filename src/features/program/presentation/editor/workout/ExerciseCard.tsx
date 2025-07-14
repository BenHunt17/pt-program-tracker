import { cn } from "../../../../../common/functions/classnames";
import type { Exercise } from "../../../data/types/exerciseSchema";

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <div className="bg-primary rounded-md p-4">
      <div className="flex justify-between">
        <h5 className="text-on-primary font-bold">{exercise.name}</h5>
        <div
          className={cn(
            "rounded-lg p-1",
            exercise.type === "Cardio" ? "bg-blue-300" : "bg-emerald-300"
          )}
        >
          {exercise.type}
        </div>
      </div>
    </div>
  );
}
