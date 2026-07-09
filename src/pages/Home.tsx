import { useHead } from '@unhead/react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function Home() {
  useHead({
    title: 'Hanif Zufar Rafif',
    meta: [
      { name: 'description', content: 'Computer Engineer & AI Application Engineer. I build intelligent automation, scalable AI agents, and robust full-stack applications.' },
      { property: 'og:title', content: 'Hanif Zufar Rafif' },
      { property: 'og:description', content: 'Computer Engineer & AI Application Engineer. I build intelligent automation, scalable AI agents, and robust full-stack applications.' },
    ],
  });

  return (
    <>
      <Hero />
      <About />
      <Experience />

      <section id="projects" className="scroll-mt-20 py-20 md:py-28">
        <div className="max-w-[1060px] mx-auto px-6 md:px-8">
          <div className="mb-12">
            <p className="section-label">Projects</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.08] -tracking-[0.03em]">
              Some things I've built.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Skills />
      <Contact />
    </>
  );
}
