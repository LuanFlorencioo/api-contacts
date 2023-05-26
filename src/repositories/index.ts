import { Repository } from "typeorm";
import Client from "../entities/client.entities";
import Contact from "../entities/contact.entities";
import AppDataSource from "../data-source";

const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);
const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

export {
  clientRepository,
  contactRepository,
}
