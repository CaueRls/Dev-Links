import type { SocialLinkItem } from "../../data/socialLinks";

type SocialLinksProps = {
  items: SocialLinkItem[];
};

export function SocialLinks({ items }: SocialLinksProps) {
  return (
    <nav aria-label="Redes sociais" className="py-4">
      <ul className="flex items-center justify-center gap-4">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              title={item.label}
              className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-[var(--text-color)] transition hover:bg-[var(--highlight-color)]"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
