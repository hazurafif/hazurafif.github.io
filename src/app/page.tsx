import { Hero } from '@/components/layout/hero'
import { ProjectCard } from '@/components/layout/project-card'
import { projects } from '@/data/projects'
import { PixelDivider } from '@/components/pixel/pixel-divider'

export default function Home() {
  const featured = projects.slice(0, 3)

  return (
    <>
      <Hero />
      <PixelDivider className="my-16" />
      <section className="space-y-8">
        <h2 className="font-heading text-sm tracking-wider text-text-primary">
          FEATURED PROJECTS
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}
