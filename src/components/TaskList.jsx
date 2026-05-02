import { useState, useEffect } from "react";

function TaskList({ tasks, setTasks }) {
  const [input, setInput] = useState("");

  // 🔥 Load from localStorage (only if tasks empty)
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved && tasks.length === 0) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  // 🔥 Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ➕ Add Task
  const addTask = () => {
    if (!input.trim()) return;

    const today = new Date().toLocaleDateString();

    setTasks([
      ...tasks,
      { text: input, completed: false, date: today }
    ]);

    setInput("");
  };

  // ✅ Toggle Complete
  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  // ✏️ Edit Task
  const editTask = (index) => {
    const newText = prompt("Edit task:", tasks[index].text);

    if (newText === null) return;
    if (!newText.trim()) return;

    const updated = [...tasks];
    updated[index].text = newText;
    setTasks(updated);
  };

  // ❌ Delete Task
  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  // 📊 Stats
  const completedCount = tasks.filter(t => t.completed).length;

  const today = new Date().toLocaleDateString();
  const todayCompleted = tasks.filter(
    t => t.completed && t.date === today
  ).length;

  return (
    <div className="task-container">
      <h2>Task Manager</h2>

      <div className="task-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      <p className="stats">
        {completedCount} of {tasks.length} completed
      </p>

      <p className="stats">
        Today Completed: {todayCompleted}
      </p>

      <p className="ai-tip">
        💡 Tip: Complete your hardest task first for better focus.
      </p>

      <ul>
        {tasks.map((task, i) => (
          <li key={i} className={task.completed ? "completed" : ""}>

            <span
              className="task-text"
              onClick={() => toggleTask(i)}
            >
              {task.text}
            </span>

            <div className="task-actions">
              <button onClick={() => editTask(i)}>✏️</button>
              <button onClick={() => deleteTask(i)}>❌</button>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;