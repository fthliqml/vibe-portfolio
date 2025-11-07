"use client";

import Image from "next/image";

const techLogos = [
  { name: "React", src: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Express", src: "https://cdn.simpleicons.org/express/000000" },
  { name: "MongoDB", src: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql/4169E1" },
  {
    name: "Tailwind CSS",
    src: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  { name: "Git", src: "https://cdn.simpleicons.org/git/F05032" },
];

export default function TechStack() {
  // Duplicate for seamless loop
  const logosToRender = [...techLogos, ...techLogos];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">
            Technologies I Work With
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Marquee content */}
          <div className="flex animate-marquee">
            {logosToRender.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="shrink-0 mx-3 sm:mx-4 lg:mx-6 w-24 sm:w-28 lg:w-32"
              >
                <div className="flex justify-center items-center h-20 sm:h-24 p-2 sm:p-4">
                  <Image
                    src={tech.src}
                    alt={`${tech.name} logo`}
                    width={40}
                    height={40}
                    className="h-8 sm:h-10 object-contain"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Fade gradients */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
