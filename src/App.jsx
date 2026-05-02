import { useState } from "react";
import Dashboard from "./Pages/Dashboard";
import "./index.css";
import TaskList from "./components/TaskList";
import Calendar from "react-calendar";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`dashboard ${theme}`}>
      <Dashboard theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;