import {
  verifyCredentials,
  generateToken,
} from "./login";
import {
  createClient,
  readClient,
} from "./clients";

const services = {
  verifyCredentials,
  generateToken,
  createClient,
  readClient,
}

export default services;
