import { clientSchema } from "./types/clientSchema";
import { z } from "zod";
import { axiosClient } from "../../../common/functions/axiosClient";
import { parseApiResponse } from "../../../common/functions/parseApiResponse";

async function getClient(id: number) {
  const response = await axiosClient.get(`Client/${id}`);

  return parseApiResponse(clientSchema, response.data);
}

async function findAllClients() {
  const response = await axiosClient.get("Client");

  return parseApiResponse(z.array(clientSchema), response.data);
}

async function createClient(input: object) {
  const response = await axiosClient.post("Client", input);

  return parseApiResponse(clientSchema, response.data);
}

async function updateClient(id: number, input: object) {
  const response = await axiosClient.put(`Client/${id}`, input);

  return parseApiResponse(clientSchema, response.data);
}

async function deleteClient(id: number) {
  await axiosClient.delete(`Client/${id}`);
}

export const clientService = {
  getClient,
  findAllClients,
  createClient,
  updateClient,
  deleteClient,
};
