export interface LinkItem {
  id: string;
  label: string;
  href: string;
}

// URLs provisórias: substituir pelos destinos reais do projeto (itens não alterados permanecem provisórios).
export const links: LinkItem[] = [
  { id: "link-1", label: "GitHub", href: "https://github.com/CaueRls" },
  {
    id: "link-2",
    label: "Linkedin",
    href: "https://www.linkedin.com/in/cauê-rodrigues-746636207",
  },
  { id: "link-3", label: "Veja meu portfólio", href: "https://example.com/portfolio" },
  { id: "link-4", label: "Conheça o Explorer", href: "https://example.com/explorer" },
];
