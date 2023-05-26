import {
  verifyCredentials,
  generateToken,
} from "./login";
import {
  createClient,
} from "./clients";

const services = {
  verifyCredentials,
  generateToken,
  createClient,
}

export default services;
