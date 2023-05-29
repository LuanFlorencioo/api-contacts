import {
  verifyCredentials,
  generateToken,
} from "./login";
import {
  createClient,
  readClient,
  updateClient,
  deleteClient,
} from "./clients";
import {
  createContact,
} from "./contacts";

const services = {
  verifyCredentials,
  generateToken,
  createClient,
  readClient,
  updateClient,
  deleteClient,
  createContact,
}

export default services;
