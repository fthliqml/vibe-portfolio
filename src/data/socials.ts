import type { SocialLink } from "@/types";

export const socials = {
  github: {
    url: "https://github.com/fthliqml",
    icon: "Github",
    label: "GitHub",
  },
  linkedin: {
    url: "https://linkedin.com/in/fthliqml",
    icon: "Linkedin",
    label: "LinkedIn",
  },
  twitter: {
    url: "https://twitter.com/fthliqml",
    icon: "Twitter",
    label: "Twitter",
  },
  email: {
    url: "mailto:fatihul.dev@example.com",
    icon: "Mail",
    label: "Email",
  },
} as const;

export const socialLinks: SocialLink[] = Object.values(socials);
