import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ tasks, onDelete }) => (
  <ul className="todo-list">
    {tasks.length === 0 ? (
      <p className="empty-message">No tasks yet. Add one! 😊</p>
    ) : (
      tasks.map((task, index) => (
        <ToDoItem
          key={index}
          index={index}
          task={task}
          onDelete={onDelete}
        />
      ))
    )}
  </ul>
);

export default ToDoList;
