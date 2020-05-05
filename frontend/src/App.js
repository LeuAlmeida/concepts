import React, { useState } from "react";

import "./App.css";
import backgroundImage from "./assets/background.jpeg";

import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([
    "Desevolvimento Mobile, Desenvolvimento Front-end",
  ]);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />

      <img width={300} src={backgroundImage} />

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
