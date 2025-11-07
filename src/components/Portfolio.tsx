import PortfolioCard from './PortfolioCard';
import { projects } from '@/data/projects';

export default function Portfolio() {
  return (
    <section className="py-16 md:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-12">
          Some of my latest work
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
