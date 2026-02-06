type Props = {
  onToggle: () => void;
};

export function ThemeToggle({ onToggle }: Props) {
  return (
    <button
      onClick={() => {
        console.log("toggle clicked");
        onToggle();
      }}
    >
      Alternar tema
    </button>
  );
}
