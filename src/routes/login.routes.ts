import { Router } from "express";
import { validateBody } from "../middlewares";
import { loginSchemaRequest } from "../schemas";
import { login } from "../controllers";

const loginRouter: Router = Router();

loginRouter.post(
  "",
  validateBody(loginSchemaRequest),
  login
)

export default loginRouter;
