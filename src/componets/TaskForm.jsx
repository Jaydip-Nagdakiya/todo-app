import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [input, setInput] = useState("");
  function handleSubmit() {
    if (input.trim() === "") {
      return;
    } else {
      onAddTask(input);
      setInput("");
    }
  }

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Write a New Task"
        className="task-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="add-btn" onClick={handleSubmit}>
        + Add
      </button>
    </div>
  );
}

export default TaskForm;
