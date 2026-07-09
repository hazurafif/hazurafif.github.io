import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PixelBorder } from '@/components/pixel/pixel-border'
import { ArrowLeft } from 'lucide-react'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  return (
    <div className="space-y-8">
      <Link href="/projects">
        <Button variant="ghost" size="sm" className="gap-2">
          <ArrowLeft size={16} />
          Back to Projects
        </Button>
      </Link>

      <PixelBorder className="p-6">
        <div className="space-y-6">
          <h1 className="font-heading text-base tracking-wider text-text-primary md:text-lg">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <p className="font-body text-base text-text-secondary leading-relaxed">
            {project.longDescription}
          </p>

          {project.links.length > 0 && (
            <div className="flex gap-4">
              {project.links.map((link) => (
                <Link key={link.label} href={link.url} target="_blank">
                  <Button variant="outline" size="sm">
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </PixelBorder>
    </div>
  )
}
