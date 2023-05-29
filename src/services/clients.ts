import Client from "../entities/client.entities";
import { clientRepository } from "../repositories";
import { iClientRequest, iClientResponse, iClientUpdate } from "../interfaces";
import { clientSchemaResponse, clientSchemaRetrieve } from "../schemas";

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

  const client: iClientResponse = clientSchemaRetrieve.parse(findClient);

  return client;
}

const updateClient = async (body: iClientUpdate, clientId: number): Promise<iClientResponse> => {
  const client = await clientRepository.findOneBy({ id: clientId });
  const update = clientRepository.create({
    ...client,
    ...body,
  })
  await clientRepository.save(update);
  const clientUpdated = clientSchemaResponse.parse(update);

  return clientUpdated;
}

export {
  createClient,
  readClient,
  updateClient,
}
