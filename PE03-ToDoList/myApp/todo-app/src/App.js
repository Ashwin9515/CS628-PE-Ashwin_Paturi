import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./styles.css"; // Import styles

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (!task.trim()) return; // Avoid empty tasks
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h2>📝 To-Do List</h2>
      <div className="input-area">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={handleAddTask}>➕ Add</button>
      </div>
      <ToDoList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;
