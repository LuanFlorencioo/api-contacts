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

const services = {
  verifyCredentials,
  generateToken,
  createClient,
  readClient,
  updateClient,
  deleteClient,
}

export default services;
