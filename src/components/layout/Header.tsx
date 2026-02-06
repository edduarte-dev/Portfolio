import { ThemeToggle } from "../ui/ThemeToggle";

type Props = {
  onToggleTheme: () => void;
};

export default function Header({ onToggleTheme }: Props) {
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
        <ThemeToggle onToggle={onToggleTheme} />
      </nav>
    </header>
  );
}
