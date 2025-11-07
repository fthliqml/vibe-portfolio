import Link from "next/link";
import { Code2, Server, Zap, Database } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import FadeUpAnimation from "@/components/animations/FadeUpAnimation";
import { getFeaturedProjects } from "@/data/projects";
import { personalInfo } from "@/data/personal";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section - Minimalist Typography Focused */}
        <section className="py-32 px-6 max-w-5xl mx-auto mt-20">
          <FadeUpAnimation>
            <div className="text-center mb-20">
              <h1 className="text-6xl md:text-7xl font-bold text-text mb-6 tracking-tight leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-2xl md:text-3xl text-zinc-600 mb-6 font-medium">
                {personalInfo.title}
              </p>
              <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-loose">
                {personalInfo.bio}
              </p>
            </div>
          </FadeUpAnimation>

          {/* Dual Expertise - Clean Cards */}
          <FadeUpAnimation delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Front-End Card */}
              <div className="group">
                <div className="border border-zinc-200 hover:border-primary transition-colors duration-300 p-8 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-primary">
                      <Code2 size={32} strokeWidth={1.5} />
                    </div>
                    <div className="text-primary">
                      <Zap size={32} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-text mb-3">
                    Front-End Development
                  </h2>
                  <p className="text-base text-zinc-600 leading-relaxed">
                    Membangun antarmuka yang interaktif dan estetis dengan fokus
                    pada pengalaman pengguna yang optimal.
                  </p>
                </div>
              </div>

              {/* Back-End Card */}
              <div className="group">
                <div className="border border-zinc-200 hover:border-secondary transition-colors duration-300 p-8 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-secondary">
                      <Server size={32} strokeWidth={1.5} />
                    </div>
                    <div className="text-secondary">
                      <Database size={32} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-text mb-3">
                    Back-End Development
                  </h2>
                  <p className="text-base text-zinc-600 leading-relaxed">
                    Mengelola logika sistem dan arsitektur data yang efisien
                    dengan performa tinggi.
                  </p>
                </div>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* Latest Projects Section - Minimalist */}
        <section className="py-32 px-6 max-w-7xl mx-auto bg-muted">
          <FadeUpAnimation delay={0.3}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
                Selected Work
              </h2>
              <p className="text-lg text-zinc-500">
                A few recent projects I've worked on
              </p>
            </div>
          </FadeUpAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <FadeUpAnimation key={project.id} delay={0.4 + index * 0.1}>
                <Link
                  href={`/projects/${project.id}`}
                  className="block group"
                >
                  <ProjectCard project={project} />
                </Link>
              </FadeUpAnimation>
            ))}
          </div>

          <FadeUpAnimation delay={0.7}>
            <div className="flex justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-lg group transition-colors"
              >
                View All Projects
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </FadeUpAnimation>
        </section>

        {/* Contact CTA Section - Minimalist */}
        <section className="py-32 px-6 max-w-5xl mx-auto bg-white border-t border-zinc-200">
          <FadeUpAnimation delay={0.8}>
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-text mb-8">
                Let's Work Together
              </h2>
              <p className="text-xl text-zinc-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Have a project in mind? Let's discuss how we can collaborate to
                bring your ideas to life.
              </p>
              <Link
                href="/contact"
                className="inline-block px-10 py-5 bg-text text-white font-medium hover:bg-text/90 transition-colors text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </FadeUpAnimation>
        </section>
      </main>
      <Footer />
    </>
  );
}
