const express = require("express");
const { uuid } = require("uuidv4");

const app = express();
app.use(express.json())

const projects = [];

app.get("/projects", (req, res) => {
  const { title, owner } = req.query;

  return res.json(projects);
});

app.post("/projects", (req, res) => {
  const { title, owner } = req.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

  return res.json(project);
});

app.put("/projects/:id", (req, res) => {
  return res.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});

app.listen(3333, () => {
  console.log("Back-end started! 👻");
});
