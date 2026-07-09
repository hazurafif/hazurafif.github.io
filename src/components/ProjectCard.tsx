import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl border border-hairline/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
    >
      <div>
        <p className="text-[1.5rem] mb-4 leading-none">{project.icon}</p>
        <h3 className="text-base font-semibold mb-2 leading-snug -tracking-[0.02em]">{project.title}</h3>
        <p className="text-sm text-ink-muted leading-relaxed">{project.description}</p>
      </div>
      <div className="mt-6">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-ink-muted text-xs font-medium">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 pt-4 border-t border-divider">
          <Link to={`/projects/${project.id}`} className="text-sm font-medium text-primary no-underline hover:opacity-70 transition-opacity">
            View project &rarr;
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
