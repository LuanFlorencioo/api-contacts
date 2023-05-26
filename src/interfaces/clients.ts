import { z } from "zod";
import {
  clientSchemaRequest,
  clientSchemaResponse,
  clientSchemaArray,
} from "../schemas";
import { DeepPartial } from "typeorm";

type iClientRequest = z.infer<typeof clientSchemaRequest>;
type iClientResponse = z.infer<typeof clientSchemaResponse>;
type iClientUpdate = DeepPartial<iClientRequest>;
type iClientArray = z.infer<typeof clientSchemaArray>;

export {
  iClientRequest,
  iClientResponse,
  iClientUpdate,
  iClientArray,
}
