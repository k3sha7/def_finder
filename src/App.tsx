import { Github } from "./pages/Github"
import { useTheme } from "./context/ThemeContext";
import { Password } from "./pages/Password";

function App() {
  const { theme } = useTheme()
  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <Github />
    </div>
  );
}

export default App
