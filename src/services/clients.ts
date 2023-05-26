import Client from "../entities/client.entities";
import { clientRepository } from "../repositories";
import { iClientRequest, iClientResponse } from "../interfaces";
import { clientSchemaResponse } from "../schemas";

const createClient = async (body: iClientRequest): Promise<iClientResponse> => {
  const client: Client = clientRepository.create(body);
  await clientRepository.save(client);
  const clientCreated: iClientResponse = clientSchemaResponse.parse(client);

  return clientCreated;
}

export {
  createClient,
}
