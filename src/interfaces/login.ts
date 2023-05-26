import { z } from "zod";
import { loginSchemaRequest, loginSchemaResponse } from "../schemas";

type iLoginRequest = z.infer<typeof loginSchemaRequest>;
type iLoginResponse = z.infer<typeof loginSchemaResponse>;

export {
  iLoginRequest,
  iLoginResponse,
}
