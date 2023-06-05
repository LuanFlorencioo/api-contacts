import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { handleError } from "./errors";
import mainRoutes from "./routes/main.routes";
import cors from "cors";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use(mainRoutes);

app.use(handleError);

export default app;
