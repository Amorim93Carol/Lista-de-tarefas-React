import React from "react";
import "./Tasklist.css";
import PropTypes from "prop-types";

export default function Tasklist({ title, onAddtask }) {
  const addTask = () => {
    onAddtask("Nova Tarefa", "Pendente");
  };

  return (
    <div className="Tasklist">
      <div className="titleList"> {title} </div>
      <div className="content"> </div>
      <button onClick={addTask}>Adicionar Tarefa</button>
    </div>
  );
}

Tasklist.proptypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired
};
