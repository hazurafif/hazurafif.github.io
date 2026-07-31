'use client'

import { useEffect, useState } from 'react'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const NAME = 'hanif zufar rafif'
const ROLE = 'AI Application Engineer'
const BIO =
  'Building intelligent automation, AI agents, and robust full-stack applications — bridging backend systems with AI.'
const STACK = ['go', 'python', 'typescript', 'ai agents', 'docker', 'linux', 'zabbix']

const SOCIALS = [
  { label: 'github', href: 'https://github.com/hazurafif', icon: Github },
  { label: 'linkedin', href: 'https://linkedin.com/in/hazurafif', icon: Linkedin },
  { label: 'email', href: 'mailto:hanifrafif22@gmail.com', icon: Mail },
]

const sectionAnimation = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})

export function Profile() {
  const reducedMotion = useReducedMotion()
  const [typed, setTyped] = useState(reducedMotion ? NAME : '')

  useEffect(() => {
    if (reducedMotion) {
      setTyped(NAME)
      return
    }
    let i = 0
    const id = setInterval(() => {
      i += 1
      setTyped(NAME.slice(0, i))
      if (i >= NAME.length) clearInterval(id)
    }, 55)
    return () => clearInterval(id)
  }, [reducedMotion])

  return (
    <MotionConfig reducedMotion="user">
      <div className="space-y-16">
        <header>
          <h1 className="text-2xl font-bold text-fg">
            {typed}
            <span
              aria-hidden
              className="cursor-blink ml-1 inline-block h-6 w-2.5 translate-y-1 bg-accent"
            />
          </h1>
          <p className="mt-3 text-accent">{ROLE}</p>
          <motion.p
            {...sectionAnimation(1.6)}
            className="mt-6 max-w-xl leading-relaxed text-text-secondary"
          >
            {BIO}
          </motion.p>
        </header>

        <motion.section {...sectionAnimation(2)}>
          <h2 className="text-xs tracking-[0.2em] text-text-muted">TECH STACK</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {STACK.map((skill) => (
              <li
                key={skill}
                className="rounded border border-line px-3 py-1 text-sm text-text-primary transition-colors hover:border-accent hover:text-accent"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section {...sectionAnimation(2.4)}>
          <h2 className="text-xs tracking-[0.2em] text-text-muted">FIND ME</h2>
          <ul className="mt-4 flex flex-wrap gap-6">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-accent transition-opacity hover:opacity-80"
                >
                  <Icon size={16} strokeWidth={2} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.section>
      </div>
    </MotionConfig>
  )
}
