import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import { useTheme } from "./hooks/useTheme";
import { useLanguage } from "./hooks/useLanguage";

function App() {
  const { toggleTheme } = useTheme();
  const { content, toggleLanguage, language } = useLanguage();

  return (
    <>
      <Header
        onToggleTheme={toggleTheme}
        onToggleLanguage={toggleLanguage}
        language={language}
      />
      <Hero content={content.hero} />
      <About content={content.about} />
      <Projects content={content.projects} />
    </>
  );
}

export default App;
