import "./App.css";
import bgDesktopDark from "./assets/bg-desktop-dark.png";
import bgDesktopLight from "./assets/bg-desktop-light.png";
import bgMobileDark from "./assets/bg-mobile-dark.png";
import bgMobileLight from "./assets/bg-mobile-light.png";
import { LinkButton } from "./components/features/LinkButton";
import { Profile } from "./components/features/Profile";
import { SocialLinks } from "./components/features/SocialLinks";
import { ThemeToggle } from "./components/ui/ThemeToggle";
import { links } from "./data/links";
import { profile } from "./data/profile";
import { socialLinks } from "./data/socialLinks";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="app-shell min-h-screen bg-cover bg-top bg-no-repeat px-6 py-8 transition-colors"
      style={
        {
          "--bg-mobile": `url(${isDark ? bgMobileDark : bgMobileLight})`,
          "--bg-desktop": `url(${isDark ? bgDesktopDark : bgDesktopLight})`,
          backgroundImage: "var(--bg-mobile)",
          backgroundColor: isDark ? "#121214" : "#ffffff",
        } as React.CSSProperties
      }
    >
      <main className="mx-auto w-full max-w-[588px]">
        <Profile
          name={profile.name}
          username={profile.username}
          avatarAlt={profile.avatarAlt}
          theme={theme}
        />
        <ThemeToggle theme={theme} onToggle={toggleTheme} />

        <nav aria-label="Links principais">
          <ul className="flex list-none flex-col gap-4 p-0 py-6">
            {links.map((link) => (
              <LinkButton key={link.id} label={link.label} href={link.href} />
            ))}
          </ul>
        </nav>

        <SocialLinks items={socialLinks} />

        <footer className="py-6 text-center text-sm text-[var(--text-color)] opacity-80">
          <p>Conteúdo e medidas visuais provisórios — confirmar no Figma.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;

