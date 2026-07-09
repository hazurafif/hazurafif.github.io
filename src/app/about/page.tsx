import { Timeline } from '@/components/layout/timeline'
import { SectionReveal } from '@/components/layout/section-reveal'
import { PixelDivider } from '@/components/pixel/pixel-divider'
import { Badge } from '@/components/ui/badge'
import { experiences } from '@/data/experience'
import { skillCategories } from '@/data/skills'

export default function About() {
  return (
    <div className="space-y-16">
      <SectionReveal>
      <section className="space-y-4">
        <h1 className="font-heading text-lg tracking-wider text-text-primary">
          ABOUT
        </h1>
        <p className="font-body text-base text-text-secondary leading-relaxed max-w-3xl">
          I graduated with a degree in <strong className="text-text-primary">Computer Engineering</strong> from the{' '}
          <strong className="text-text-primary">University of Indonesia</strong> (Class of 2018).
          Blending a strong foundation in hardware-software integration with modern
          software engineering, I specialize in bridging the gap between core backend
          systems and cutting-edge Artificial Intelligence. My work spans designing
          intelligent AI agents, building infrastructure automation tools, and
          architecting end-to-end systems for production AI workloads.
        </p>
        <div className="space-y-1 font-body text-sm text-text-muted">
          <p>Education: B.Eng Computer Engineering — Universitas Indonesia, 2018</p>
          <p>Focus: AI Agents & Infrastructure — Backend systems + AI integration</p>
        </div>
      </section>
      </SectionReveal>

      <PixelDivider />

      <SectionReveal delay={0.1}>
      <section className="space-y-6">
        <h2 className="font-heading text-sm tracking-wider text-text-primary">
          EXPERIENCE
        </h2>
        <Timeline experiences={experiences} />
      </section>
      </SectionReveal>

      <PixelDivider />

      <SectionReveal delay={0.2}>
      <section className="space-y-6">
        <h2 className="font-heading text-sm tracking-wider text-text-primary">
          SKILLS
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="space-y-3">
              <h3 className="font-heading text-[10px] tracking-wider text-accent-glow">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      </SectionReveal>
    </div>
  )
}
