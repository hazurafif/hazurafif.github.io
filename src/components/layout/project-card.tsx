import Link from 'next/link'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PixelBorder } from '@/components/pixel/pixel-border'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <PixelBorder className="h-full">
        <Card className="h-full">
          <CardContent className="flex flex-col gap-3 p-5">
            <CardTitle>{project.title}</CardTitle>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              {project.description}
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </PixelBorder>
    </Link>
  )
}
