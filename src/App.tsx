import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { toggleTheme } = useTheme();

  return (
    <>
      <Header onToggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default App;
