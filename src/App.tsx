import { lazy, Suspense } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import { useTheme } from "./hooks/useTheme";
import { useLanguage } from "./hooks/useLanguage";

const LiquidEther = lazy(() => import("./components/background/LiquidEther"));

function App() {
  const { toggleTheme } = useTheme();
  const { content, toggleLanguage, language } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Suspense fallback={null}>
        <div className="absolute inset-0">
          <LiquidEther />
        </div>
      </Suspense>

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
