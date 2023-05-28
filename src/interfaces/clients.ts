import { z } from "zod";
import {
  clientSchemaRequest,
  clientSchemaResponse,
} from "../schemas";
import { DeepPartial } from "typeorm";

type iClientRequest = z.infer<typeof clientSchemaRequest>;
type iClientResponse = z.infer<typeof clientSchemaResponse>;
type iClientUpdate = DeepPartial<iClientRequest>;

export {
  iClientRequest,
  iClientResponse,
  iClientUpdate,
}
