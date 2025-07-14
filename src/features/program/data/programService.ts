import { z } from "zod";
import { axiosClient } from "../../../common/functions/axiosClient";
import { parseApiResponse } from "../../../common/functions/parseApiResponse";
import { programSchema } from "./types/programSchema";
import type { ProgramInput } from "./types/input/programInputSchema";
import type { WorkoutInput } from "./types/input/workoutInputSchema";

async function findAllPrograms() {
  const response = await axiosClient.get("Program");

  return parseApiResponse(z.array(programSchema), response.data);
}

async function upsertProgram(input: ProgramInput) {
  const response = await axiosClient.post("Program", input);

  return parseApiResponse(programSchema, response.data);
}

async function upsertWorkout(id: number, input: WorkoutInput) {
  const response = await axiosClient.put(`Program/${id}/workouts`, input);

  return parseApiResponse(programSchema, response.data);
}

async function updateWorkoutExercises(
  programId: number,
  workoutId: number,
  exerciseIds: number[]
) {
  const response = await axiosClient.put(
    `Program/${programId}/workouts/${workoutId}/exercises`,
    exerciseIds
  );

  return parseApiResponse(programSchema, response.data);
}

async function deleteProgram(id: number) {
  await axiosClient.delete(`program/${id}`);
}

export const programService = {
  findAllPrograms,
  upsertProgram,
  upsertWorkout,
  updateWorkoutExercises,
  deleteProgram,
};
