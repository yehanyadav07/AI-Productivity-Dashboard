import { useState, useEffect } from "react";

function TaskList() {
  const deleteTask = (index) => {
  const updated = tasks.filter((_, i) => i !== index);
  setTasks(updated);
};

  const [tasks, setTasks] = useState(() => {
    // 🔥 load from localStorage correctly
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");

  // 🔥 save whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;

    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };
const editTask = (index) => {
  const newText = prompt("Edit task:", tasks[index].text);

  // ❗ important checks
  if (newText === null) return;        // user pressed cancel
  if (!newText.trim()) return;        // empty input

  const updated = [...tasks];
  updated[index].text = newText;

  setTasks(updated);
};


  const completedCount = tasks.filter(t => t.completed).length;


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
      <p className="ai-tip">
  💡 Tip: Complete your hardest task first for better focus.<br></br>
     Click on the task to remove/Mark completed 
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