import { ProjectCard } from '@/components/layout/project-card'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="font-heading text-lg tracking-wider text-text-primary">
        PROJECTS
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
