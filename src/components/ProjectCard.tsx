import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="p-6">
      {/* Thumbnail */}
      <div className="relative aspect-video w-full mb-4 overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover"
        />
      </div>

      {/* Category Badge */}
      <div className="mb-2">
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-zinc-900 mb-2">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-zinc-600 mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 bg-muted text-zinc-700 rounded"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="text-xs px-2 py-1 bg-muted text-zinc-700 rounded">
            +{project.tech.length - 3}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </a>
        )}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          <Github size={16} />
          <span>Repository</span>
        </a>
      </div>
    </div>
  );
}
