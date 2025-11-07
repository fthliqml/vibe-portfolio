import * as Icons from "lucide-react";
import type { SocialLink } from "@/types";

type SocialIconProps = {
  social: SocialLink;
};

export default function SocialIcon({ social }: SocialIconProps) {
  // Dynamically get icon component from lucide-react
  const IconComponent = Icons[social.icon as keyof typeof Icons] as any;

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 text-zinc-400 hover:text-white hover:border-white hover:scale-110 transition-all duration-300"
    >
      {IconComponent && <IconComponent size={18} strokeWidth={1.5} />}
    </a>
  );
}
