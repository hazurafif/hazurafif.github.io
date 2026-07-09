import { ProjectCard } from '@/components/layout/project-card'
import { SectionReveal } from '@/components/layout/section-reveal'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <div className="space-y-8">
      <SectionReveal>
      <h1 className="font-heading text-lg tracking-wider text-text-primary">
        PROJECTS
      </h1>
      </SectionReveal>
      <SectionReveal delay={0.1}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      </SectionReveal>
    </div>
  )
}
