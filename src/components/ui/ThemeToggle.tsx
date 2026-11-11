import { MoonStars, Sun } from "@phosphor-icons/react";
import type { Theme } from "../../hooks/useTheme";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";
  const label = isDark ? "Ativar modo claro" : "Ativar modo escuro";

  return (
    <div className="relative mx-auto my-4 flex w-16 items-center">
      <button
        type="button"
        onClick={onToggle}
        aria-label={label}
        title={label}
        aria-pressed={isDark}
        className="absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--stroke-color)] bg-white text-black shadow-sm transition-transform hover:bg-white data-[theme=dark]:translate-x-8 data-[theme=dark]:bg-[#1e1e22] data-[theme=dark]:text-white"
        data-theme={theme}
      >
        {isDark ? <MoonStars size={16} aria-hidden="true" /> : <Sun size={16} aria-hidden="true" />}
      </button>
      <span
        aria-hidden="true"
        className="block h-6 w-16 rounded-full border border-[var(--stroke-color)] bg-[var(--surface-color)] backdrop-blur-sm"
      />
    </div>
  );
}
