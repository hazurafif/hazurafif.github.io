import { PixelDivider } from '@/components/pixel/pixel-divider'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-24">
      <PixelDivider />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8">
        <div className="flex gap-6">
          <Link
            href="https://github.com/hazurafif"
            target="_blank"
            className="text-text-muted transition-colors hover:text-accent-glow"
            aria-label="GitHub"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://linkedin.com/in/hazurafif"
            target="_blank"
            className="text-text-muted transition-colors hover:text-accent-glow"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="mailto:hazurafif@example.com"
            className="text-text-muted transition-colors hover:text-accent-glow"
            aria-label="Email"
          >
            <Mail size={20} />
          </Link>
        </div>
        <p className="font-body text-xs text-text-muted">
          © {new Date().getFullYear()} Hanif Zufar Rafif
        </p>
      </div>
    </footer>
  )
}
