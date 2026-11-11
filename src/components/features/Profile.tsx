import avatarDark from "../../assets/avatar-dark.png";
import avatarLight from "../../assets/avatar-light.png";
import type { Theme } from "../../hooks/useTheme";

type ProfileProps = {
  name: string;
  username: string;
  avatarAlt: string;
  theme: Theme;
};

export function Profile({ name, username, avatarAlt, theme }: ProfileProps) {
  const avatarSrc = theme === "dark" ? avatarDark : avatarLight;

  return (
    <header className="flex flex-col items-center gap-2 py-6 text-center">
      <img
        src={avatarSrc}
        alt={avatarAlt}
        className="h-28 w-28 rounded-full border border-[var(--stroke-color)] object-cover"
      />
      <div>
        <p className="text-base font-medium leading-6 text-[var(--text-color)]">{name}</p>
        <p className="text-sm text-[var(--text-color)] opacity-80">{username}</p>
      </div>
    </header>
  );
}
