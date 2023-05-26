import { Router } from "express";
import clientRouter from "./client.routes";
import contactRouter from "./contact.routes";
import loginRouter from "./login.routes";

const mainRoutes: Router = Router();

mainRoutes.use("/clients", clientRouter);
mainRoutes.use("/contacts", contactRouter);
mainRoutes.use("/login", loginRouter);

export default mainRoutes;
