import { Request, Response } from "express";

class ExampleController {
  helloWorld(_req: Request, res: Response) {
    res.send("Hello world");
  }
}

export default new ExampleController();
