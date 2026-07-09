'use client'

import { motion } from 'framer-motion'
import { PixelBorder } from '@/components/pixel/pixel-border'
import { Badge } from '@/components/ui/badge'
import type { Experience } from '@/data/experience'

interface TimelineProps {
  experiences: Experience[]
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <PixelBorder className="p-4">
            <div className="space-y-3">
              <div>
                <h3 className="font-heading text-xs tracking-wider text-accent-glow">
                  {exp.title}
                </h3>
                <p className="font-body text-sm text-text-muted">
                  {exp.company} — {exp.period}
                </p>
              </div>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </PixelBorder>
        </motion.div>
      ))}
    </div>
  )
}
