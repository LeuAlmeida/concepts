import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "leo@webid.net.br",
    password: "123456",
    techs: ["ReactJS", "Node.js", { title: "Título", experience: 12 }],
  });

  return response.json({ message: "Hello World" });
}
