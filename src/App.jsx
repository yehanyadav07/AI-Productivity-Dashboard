import { useState } from "react";
import Dashboard from "./Pages/Dashboard";
import "./index.css";
import TaskList from "./components/TaskList";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`dashboard ${theme}`}>
      <Dashboard theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;