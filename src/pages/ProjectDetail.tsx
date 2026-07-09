import { useHead } from '@unhead/react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.id === slug);

  useHead({
    title: project
      ? `${project.title} — Hanif Zufar Rafif`
      : 'Project not found — Hanif Zufar Rafif',
    meta: project
      ? [{ name: 'description', content: project.description }]
      : [],
  });

  if (!project) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center py-24">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Project not found</h2>
          <Link to="/" className="text-primary no-underline hover:opacity-70">&larr; Back to home</Link>
        </div>
      </section>
    );
  }

  const { title, pubDate, icon, tags, content } = project;

  return (
    <article className="py-24 md:py-32">
      <div className="max-w-[1060px] mx-auto px-6 md:px-8">
        <Button variant="link" asChild className="px-0 h-auto text-sm text-muted-foreground hover:text-foreground mb-8">
          <Link to="/#projects">&larr; Back to projects</Link>
        </Button>
        <div className="max-w-[700px]">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-[1.5rem] mb-4 leading-none">{icon}</p>
            <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.08] -tracking-[0.03em] mb-4">{title}</h1>
            <div className="text-[13px] text-muted-foreground mb-4">
              <time dateTime={pubDate}>
                {new Date(pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
              </time>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-muted-foreground text-xs font-medium">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-sm leading-relaxed space-y-5"
          >
                <h2 className="text-foreground text-xl font-semibold mt-8 mb-4">Overview</h2>
            <p>{content.overview}</p>

            <h2 className="text-foreground text-xl font-semibold mt-8 mb-4">Key Features</h2>
            <ul className="pl-6 space-y-2">
              {content.features.map((feature) => (
                <li key={feature} className="list-disc">{feature}</li>
              ))}
            </ul>

            {content.architecture && (
              <>
                <h2 className="text-foreground text-xl font-semibold mt-8 mb-4">Architecture</h2>
                <p>{content.architecture}</p>
              </>
            )}

            {content.techStack && (
              <>
                <h2 className="text-foreground text-xl font-semibold mt-8 mb-4">Tech Stack</h2>
                <p>{content.techStack}</p>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </article>
  );
}
