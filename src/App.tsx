import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import { useTheme } from "./hooks/useTheme";
import { useLanguage } from "./hooks/useLanguage";
import LiquidEther from "./components/background/LiquidEther";

function App() {
  const { toggleTheme } = useTheme();
  const { content, toggleLanguage, language } = useLanguage();

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <LiquidEther />
      </div>
      
      <div className="relative z-10">
        <Header
          onToggleTheme={toggleTheme}
          onToggleLanguage={toggleLanguage}
          language={language}
        />

        <Hero content={content.hero} />
        <About content={content.about} />
        <Projects content={content.projects} />
      </div>
    </div>
  );
}


export default App;
