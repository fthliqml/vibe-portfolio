import Image from 'next/image';
import { Project } from '@/types';

type PortfolioCardProps = {
  project: Project;
};

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer group">
      {/* Project Image */}
      <div className="relative aspect-video w-full bg-gray-100 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category */}
        <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mt-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-4 pt-4 border-t border-gray-100">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-900 hover:text-gray-600 flex items-center gap-1 transition-colors"
            >
              Demo <span>→</span>
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-900 hover:text-gray-600 flex items-center gap-1 transition-colors"
          >
            Repository <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
