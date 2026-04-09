import { ThemeToggle } from "../ui/ThemeToggle";

type Props = {
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
  language: "pt" | "en";
  activeSection?: "about" | "projects";
};

export default function Header({
  onToggleTheme,
  onToggleLanguage,
  language,
  activeSection,
}: Props) {
  const navLinkBase =
    "relative text-[14px] font-medium px-[14px] py-[7px] rounded-lg tracking-[0.1px] transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-white/90 hover:bg-white/[0.06]";

  const activeClass = "text-[rgb(var(--text))]";

  const inactiveClass = "text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]";

  return (
    <header
      className="flex justify-between items-center px-10 py-7 border-b border-white/[0.06]"
      role="banner"
    >
      <div>
        <h1 className="text-[17px] font-medium tracking-[-0.3px] text-[rgb(var(--text))]">
          Eduardo Duarte Cunha
        </h1>
        <p className="text-[13px] font-normal text-[rgb(var(--muted))] mt-[3px] tracking-[0.2px]">
          Software Developer
        </p>
      </div>

      <nav
        role="navigation"
        aria-label="Navegação principal"
        className="flex items-center gap-2"
      >
        <a
          href="#about"
          aria-current={activeSection === "about" ? "page" : undefined}
          className={`${navLinkBase} ${activeSection === "about" ? activeClass : inactiveClass}`}
        >
          {activeSection === "about" && (
            <span className="absolute bottom-[-2px] left-[14px] right-[14px] h-[1.5px] bg-[rgb(var(--text))] rounded-full" />
          )}
          {language === "pt" ? "Sobre" : "About"}
        </a>

        <a
          href="#projects"
          aria-current={activeSection === "projects" ? "page" : undefined}
          className={`${navLinkBase} ${activeSection === "projects" ? activeClass : inactiveClass}`}
        >
          {activeSection === "projects" && (
            <span className="absolute bottom-[-2px] left-[14px] right-[14px] h-[1.5px] bg-[rgb(var(--text))] rounded-full" />
          )}
          {language === "pt" ? "Projetos" : "Projects"}
        </a>

        <div
          role="separator"
          aria-hidden="true"
          className="w-px h-[18px] bg-white/[0.12] mx-1"
        />
        <ThemeToggle onToggle={onToggleTheme} />
        <button
          onClick={onToggleLanguage}
          aria-label={language === "pt" ? "Switch to English" : "Mudar para Português"}
          title={language === "pt" ? "Switch to English" : "Mudar para Português"}
          className="text-[13px] font-medium tracking-[0.3px] text-[rgb(var(--muted))] border border-white/10 rounded-[7px] px-3 py-[6px] transition-colors duration-200 outline-none hover:text-[rgb(var(--text))] hover:border-white/25 hover:bg-white/[0.05] focus-visible:ring-2 focus-visible:ring-white/90"
        >
          {language === "pt" ? "EN" : "PT"}
        </button>
      </nav>
    </header>
  );
}