import {
  verifyCredentials,
  generateToken,
} from "./login";
import {
  createClient,
  readClient,
  updateClient,
} from "./clients";

const services = {
  verifyCredentials,
  generateToken,
  createClient,
  readClient,
  updateClient,
}

export default services;
