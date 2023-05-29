import Client from "../entities/client.entities";
import { iContactRequest, iContactResponse } from "../interfaces";
import { clientRepository, contactRepository } from "../repositories";
import { contactSchema } from "../schemas";

const retrieveClient = async (id: number): Promise<Client> => {
  const client = (await clientRepository.findOneBy({ id }))!;
  return client
}

const createContact = async (body: iContactRequest, clientId: number): Promise<iContactResponse> => {
  const contact = contactRepository.create({
    ...body,
    client: await retrieveClient(clientId),
  });
  await contactRepository.save(contact);
  console.log(contact);
  const contactCreated: iContactResponse = contactSchema.parse(contact);

  return contactCreated;
}

export {
  createContact,
}
