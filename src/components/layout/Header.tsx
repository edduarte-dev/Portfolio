import React from "react";
import { ThemeToggle } from "../ui/ThemeToggle";

type Props = {
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
  language: "pt" | "en";
};

const Header = React.memo(function Header({
  onToggleTheme,
  onToggleLanguage,
  language,
}: Props) {
  return (
    <header className="flex justify-between items-start p-8">
      <div>
        <h1 className="text-lg font-medium">Eduardo Duarte Cunha</h1>
        <p className="text-sm text-[rgb(var(--muted))]">Software Developer</p>
      </div>

      <nav className="flex gap-6 text-sm items-center">
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <ThemeToggle onToggle={onToggleTheme} />
        <button
          onClick={onToggleLanguage}
          className="text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
        >
          {language === "pt" ? "EN" : "PT"}
        </button>
      </nav>
    </header>
  );
});

export default Header;
