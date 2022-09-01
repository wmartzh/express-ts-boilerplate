import { Application } from "express";
import exampleController from "./controllers/example.controller";

export default function router(app: Application): void {
  app.use("/", exampleController.helloWorld);
}
