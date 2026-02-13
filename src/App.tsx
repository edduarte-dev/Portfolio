import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import { useTheme } from "./hooks/useTheme";
import { useLanguage } from "./hooks/useLanguage";
import LiquidEther from "./components/ui/LiquidEther";

function App() {
  const { toggleTheme } = useTheme();
  const { content, toggleLanguage, language } = useLanguage();

  return (
    <>
      <div className="fixed inset-0 z-50 pointer-events-none">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={75}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
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
