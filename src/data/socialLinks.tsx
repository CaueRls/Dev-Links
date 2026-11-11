import type { ReactNode } from "react";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";

export interface SocialLinkItem {
  id: string;
  label: string;
  href: string;
  icon: ReactNode;
}

// URLs provisórias: substituir pelas redes/destinos reais do Figma.
export const socialLinks: SocialLinkItem[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://example.com/github",
    icon: <IoLogoGithub aria-hidden="true" />,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://example.com/instagram",
    icon: <IoLogoInstagram aria-hidden="true" />,
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://example.com/youtube",
    icon: <IoLogoYoutube aria-hidden="true" />,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://example.com/linkedin",
    icon: <IoLogoLinkedin aria-hidden="true" />,
  },
];
