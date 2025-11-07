import * as Icons from "lucide-react";
import type { Skill } from "@/types";

type SkillCardProps = {
  skill: Skill;
};

export default function SkillCard({ skill }: SkillCardProps) {
  // Dynamically get icon component from lucide-react
  const IconComponent = Icons[skill.icon as keyof typeof Icons] as any;

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:scale-105 duration-300">
      {/* Icon */}
      {IconComponent && (
        <div className="mb-4 text-primary">
          <IconComponent size={32} strokeWidth={1.5} />
        </div>
      )}

      {/* Skill Name */}
      <h3 className="text-lg font-semibold text-zinc-900 mb-1">
        {skill.name}
      </h3>

      {/* Level */}
      <p className="text-sm text-zinc-600">{skill.level}</p>
    </div>
  );
}
