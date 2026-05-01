import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";

function Dashboard({ theme, setTheme }) {
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <TaskList />
    </>
  );
}

export default Dashboard;