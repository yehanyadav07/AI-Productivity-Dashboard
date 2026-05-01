function Navbar({ theme, setTheme }) {
  return (
    <div className="navbar">
      <h3>AI Dashboard</h3>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle
      </button>
    </div>
  );
}

export default Navbar;