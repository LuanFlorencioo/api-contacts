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

const readClient = async (clientId: number): Promise<iClientResponse> => {
  const findClient: Client | null = await clientRepository.findOne({
    where: { id: clientId },
    relations: { contacts: true },
  })

  const client: iClientResponse = clientSchemaResponse.parse(findClient);

  return client;
}

export {
  createClient,
  readClient,
}
