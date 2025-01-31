import React from "react";

const ToDoItem = ({ task, index, onDelete }) => {
  return (
    <li className="todo-item">
      <span>{task}</span>
      <button onClick={() => onDelete(index)}>❌</button>
    </li>
  );
};

export default ToDoItem;
