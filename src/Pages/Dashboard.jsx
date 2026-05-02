import { useState } from "react";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import CalendarView from "../components/CalendarView.jsx";
import bg from "../assets/bg.jpg";

function Dashboard({ theme, setTheme }) {
  // 🔥 MAIN STATE (shared)
  const [tasks, setTasks] = useState([]);

  return (
    
    <div style={{ width: "100%", maxWidth: "700px" }}>
      
      <Navbar theme={theme} setTheme={setTheme} />

      <div
  className={`dashboard ${theme}`}
  style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
></div>
<div className="dashboard">
  
  <Navbar theme={theme} setTheme={setTheme} />

  <div className="dashboard-layout">
    <TaskList tasks={tasks} setTasks={setTasks} />
    <CalendarView tasks={tasks} />
  </div>

</div>
    </div>
    
  );
}

export default Dashboard;