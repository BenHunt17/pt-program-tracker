import axios from "axios";
import { clientSchema } from "./ClientTypes";
import { z } from "zod";

async function getClient(id: number) {
  try {
    const response = await axios.get(`https://localhost:58929/Client/${id}`);

    return clientSchema.parse(response.data);
  } catch (e) {
    console.log(e);
    //todo - toast?
  }
}

async function findAllClients() {
  try {
    const response = await axios.get("https://localhost:58929/Client");

    return z.array(clientSchema).parse(response.data);
  } catch (e) {
    console.log(e);
    //todo - toast?
  }
}

async function createClient(input: object) {
  try {
    const response = await axios.post("https://localhost:58929/Client", input);

    return clientSchema.parse(response.data);
  } catch (e) {
    console.log(e);
    //todo - toast?
  }
}

export const clientService = {
  getClient,
  findAllClients,
  createClient,
};
