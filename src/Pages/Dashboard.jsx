import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import CalendarView from "../components/CalendarView";

function Dashboard({ theme, setTheme }) {

  // ✅ Load from localStorage
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="dashboard">

      <Navbar theme={theme} setTheme={setTheme} />

      <div className="dashboard-layout">
        <TaskList tasks={tasks} setTasks={setTasks} />
        <CalendarView tasks={tasks} />
      </div>

    </div>
  );
}

export default Dashboard;