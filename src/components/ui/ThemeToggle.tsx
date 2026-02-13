import React from 'react';

type Props = {
  onToggle: () => void;
};

export const ThemeToggle = React.memo(function ThemeToggleComponent({ onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className="transition-colors"
    >
      Alternar tema
    </button>
  );
});
