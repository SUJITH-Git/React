import { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Add task
  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([
      ...tasks,
      { id: Date.now(), text: input, completed: false },
    ]);
    setInput("");
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Mark task as complete
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h1>To-Do List APP</h1>

      <input
        type="text"
        value={input}
        placeholder="Enter task"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => toggleComplete(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              {task.text}
            </span>

            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;



/*
info
---
...tasks is called the spread operator.
It is used to copy all elements of the tasks array into a new array.
*/