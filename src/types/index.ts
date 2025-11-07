export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export type ProjectCategory = "Front-End" | "Back-End" | "Fullstack";

export interface Skill {
  name: string;
  level: SkillLevel;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  role: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  demoUrl?: string | null;
  repoUrl: string;
  year: number;
  featured?: boolean;
}

export interface SocialLink {
  url: string;
  icon: string;
  label: string;
}
