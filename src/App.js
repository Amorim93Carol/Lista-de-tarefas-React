import React, { useState } from "react";
import "./styles.css";
import Navbar from "./Components/NavBar/Navbar";
import Tasklist from "./Components/List/Tasklist";

const task = {
  id: 0,
  title: "Nova tarefa",
  state: "Pendente"
};
let idAdd = 0;
const generateId = () => {
  idAdd = idAdd + 1;
  return idAdd;
};

export default function App() {
  const [task, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTask) => {
      return [...existingTask, newTask];
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Tasklist title="Pendente" onAddTask={addTask} />
        <Tasklist title="Tarefa 2" />
        <Tasklist title="Tarefa 3" />
      </div>
    </div>
  );
}
