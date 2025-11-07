import type { Skill } from "@/types";

export const frontendSkills: Skill[] = [
  { name: "React", level: "Advanced", icon: "Code2" },
  { name: "Next.js", level: "Advanced", icon: "Triangle" },
  { name: "TypeScript", level: "Advanced", icon: "FileCode2" },
  { name: "Tailwind CSS", level: "Advanced", icon: "Paintbrush" },
  { name: "Framer Motion", level: "Intermediate", icon: "Sparkles" },
];

export const backendSkills: Skill[] = [
  { name: "Node.js", level: "Advanced", icon: "Server" },
  { name: "Express", level: "Advanced", icon: "Zap" },
  { name: "Prisma", level: "Intermediate", icon: "Database" },
  { name: "PostgreSQL", level: "Intermediate", icon: "Database" },
  { name: "REST API", level: "Advanced", icon: "Plug" },
];

export const allSkills = {
  frontend: frontendSkills,
  backend: backendSkills,
};
