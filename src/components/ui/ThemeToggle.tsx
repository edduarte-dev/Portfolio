type Props = {
  onToggle: () => void;
};

export function ThemeToggle({ onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className="
        text-sm
        text-[rgb(var(--muted))]
        hover:text-[rgb(var(--text))]
        transition-colors
      "
    >
      Alternar tema
    </button>
  );
}
