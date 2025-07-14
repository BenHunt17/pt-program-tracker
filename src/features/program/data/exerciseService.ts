import { z } from "zod";
import { axiosClient } from "../../../common/functions/axiosClient";
import { parseApiResponse } from "../../../common/functions/parseApiResponse";
import { exerciseSchema } from "./types/exerciseSchema";

async function findAllExercises() {
  const response = await axiosClient.get("Exercise");

  return parseApiResponse(z.array(exerciseSchema), response.data);
}

export const exerciseService = {
  findAllExercises,
};
