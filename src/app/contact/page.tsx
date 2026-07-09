import Link from 'next/link'
import { PixelBorder } from '@/components/pixel/pixel-border'
import { PixelDivider } from '@/components/pixel/pixel-divider'
import { SectionReveal } from '@/components/layout/section-reveal'
import { Github, Linkedin, Mail } from 'lucide-react'

const contactLinks = [
  {
    label: 'Email',
    value: 'hazurafif@example.com',
    href: 'mailto:hazurafif@example.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/hazurafif',
    href: 'https://linkedin.com/in/hazurafif',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/hazurafif',
    href: 'https://github.com/hazurafif',
    icon: Github,
  },
]

export default function Contact() {
  return (
    <div className="space-y-12">
      <SectionReveal>
      <h1 className="font-heading text-lg tracking-wider text-text-primary">
        CONTACT
      </h1>

      <p className="font-body text-base text-text-secondary leading-relaxed max-w-2xl">
        Interested in collaborating or just want to say hi? Feel free to reach
        out through any of the channels below.
      </p>
      </SectionReveal>

      <PixelDivider />

      <SectionReveal delay={0.1}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contactLinks.map((link) => {
          const Icon = link.icon
          return (
            <Link key={link.label} href={link.href} target="_blank">
              <PixelBorder className="h-full">
                <div className="glass glass-hover flex h-full flex-col items-center gap-4 p-8 text-center transition-all duration-300">
                  <Icon className="h-8 w-8 text-accent-glow" />
                  <div className="space-y-1">
                    <h3 className="font-heading text-[10px] tracking-wider text-accent-glow">
                      {link.label}
                    </h3>
                    <p className="font-body text-sm text-text-secondary">
                      {link.value}
                    </p>
                  </div>
                </div>
              </PixelBorder>
            </Link>
          )
        })}
      </div>
      </SectionReveal>
    </div>
  )
}
