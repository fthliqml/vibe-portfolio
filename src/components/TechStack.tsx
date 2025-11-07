import { techStackNames } from '@/data/techStack';

export default function TechStack() {
  // Duplicate for seamless loop
  const duplicatedTech = [...techStackNames, ...techStackNames];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 text-center mb-12">
          Technologies I Work With
        </h2>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Left fade gradient */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Right fade gradient */}
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Marquee content */}
          <div className="animate-marquee flex gap-12 items-center">
            {duplicatedTech.map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gray-100 rounded-lg">
                  <span className="text-xs md:text-sm font-bold text-gray-700">
                    {tech.substring(0, 2).toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
