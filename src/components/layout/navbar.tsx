'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-4 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 left-1/2 glass rounded-xl">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
        <Link
          href="/"
          className="font-heading text-xs tracking-wider text-accent-glow hover:text-white transition-colors"
        >
          HANIF
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-body text-sm transition-colors hover:text-accent-glow',
                pathname === link.href
                  ? 'text-accent-glow'
                  : 'text-text-secondary'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="glass border-t border-glass-border rounded-b-xl md:hidden">
          <div className="flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'py-2 font-body text-sm transition-colors hover:text-accent-glow',
                  pathname === link.href
                    ? 'text-accent-glow'
                    : 'text-text-secondary'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
