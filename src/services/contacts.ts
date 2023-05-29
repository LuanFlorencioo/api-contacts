import Client from "../entities/client.entities";
import {
  iContactArray,
  iContactRequest,
  iContactResponse,
  iContactUpdate,
} from "../interfaces";
import { clientRepository, contactRepository } from "../repositories";
import { contactSchema, contactSchemaArray } from "../schemas";

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

const readContacts = async (clientId: number): Promise<iContactArray> => {
  const findContacts = await contactRepository.find({
    where: { client: { id: clientId } },
  })
  const contacts = contactSchemaArray.parse({
    contacts: findContacts
  });

  return contacts;
}

const updateContact = async (body: iContactUpdate, clientId: number, contactId: string): Promise<iContactResponse> => {
  const contact = await contactRepository.findOneBy({
    id: contactId,
    client: { id: clientId },
  })

  const update = contactRepository.create({
    ...contact,
    ...body,
  })
  await contactRepository.save(update);
  const contactUpdated: iContactResponse = contactSchema.parse(update);

  return contactUpdated;
}

const deleteContact = async (clientId: number, contactId: string): Promise<void> => {
  const contact = await contactRepository.findOneBy({
    id: contactId,
    client: { id: clientId },
  })
  await contactRepository.remove(contact!);
}

export {
  createContact,
  readContacts,
  updateContact,
  deleteContact,
}
