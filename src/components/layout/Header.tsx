import { ThemeToggle } from "../ui/ThemeToggle";
import { useTheme } from "../../hooks/useTheme";

export default function Header() {
  const { toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-start p-8">
      <div>
        <h1 className="text-lg font-medium">Eduardo Duarte Cunha</h1>
        <p className="text-sm text-[rgb(var(--muted))]">
          Software Developer
        </p>
      </div>

      <nav className="flex gap-6 text-sm items-center">
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <ThemeToggle onToggle={toggleTheme} />
      </nav>
    </header>
  );
}
