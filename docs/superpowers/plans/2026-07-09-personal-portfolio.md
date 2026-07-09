# Personal Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild hazurafif.github.io as a static Next.js portfolio with pixel-art + glassmorphism aesthetic

**Architecture:** Next.js 15 App Router with `output: 'export'` for fully static output. Pixel UI components live in `src/components/pixel/`, shadcn/ui primitives in `src/components/ui/`, data in `src/data/` as typed TS exports. Design tokens defined as CSS custom properties and Tailwind v4 theme variables.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, "Press Start 2P" + Inter fonts

## Global Constraints

- Next.js 15 with App Router, `output: 'export'`, `images.unoptimized: true`
- Tailwind CSS v4 with `@tailwindcss/vite` plugin
- shadcn/ui components (Button, Card, Badge only)
- Framer Motion for animations (`fade-in-up`, `whileInView`, hover glows)
- "Press Start 2P" (Google Fonts) for headings, Inter (Google Fonts) for body
- All custom pixel/glass styles via Tailwind v4 `@theme` directives + CSS custom properties in `globals.css`
- No CMS, no blog, no dark/light toggle, no analytics, no contact form backend
- Deploy to GitHub Pages via GitHub Actions workflow
- All source in `src/` directory
- `src/data/` contains typed TS content files (projects, experience, skills)

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `next.config.ts`
- Create: `vite.config.ts` (if needed — Next.js uses webpack/turbopack, but we need `@tailwindcss/vite`)
- Create: `postcss.config.mjs` (for Tailwind if not using Vite plugin)
- Create: `src/app/globals.css`
- Create: `src/app/layout.tsx` (minimal, just html/body shell)
- Create: `src/app/page.tsx` (minimal placeholder)

Note: Next.js 15 App Router with Tailwind v4. Since Next.js bundles its own CSS processing, we don't use `@tailwindcss/vite`. Instead we use `postcss.config.mjs` with `@tailwindcss/postcss`.

- [ ] **Step 1: Create package.json**

```json
{
  "name": "hazurafif.github.io",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.3.1",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.0.0",
    "lucide-react": "^0.487.0",
    "framer-motion": "^12.6.0",
    "@radix-ui/react-slot": "^1.2.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.1.0",
    "@types/react-dom": "^19.1.0",
    "typescript": "^5.8.0",
    "@tailwindcss/postcss": "^4.1.4",
    "tailwindcss": "^4.1.4",
    "eslint": "^9.0.0",
    "@eslint/eslintrc": "^3.0.0"
  }
}
```

- [ ] **Step 2: Create next.config.ts**

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

- [ ] **Step 3: Create postcss.config.mjs**

```mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config
```

- [ ] **Step 4: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 5: Create minimal placeholder page files**

`src/app/globals.css`:
```css
@import "tailwindcss";
```

`src/app/layout.tsx`:
```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hanif Zufar Rafif',
  description: 'Computer Engineer & AI Application Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

`src/app/page.tsx`:
```tsx
export default function Home() {
  return <div>Hello World</div>
}
```

- [ ] **Step 6: Install dependencies and verify build**

Run: `npm install`
Run: `npm run build`
Expected: Static export succeeds, outputs to `out/` directory

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: scaffold Next.js 15 project with Tailwind v4"
```

---

### Task 2: Design Tokens & Global Styles

**Files:**
- Modify: `src/app/globals.css`
- Create: `src/lib/utils.ts`
- Modify: `src/app/layout.tsx` (add font imports)

- [ ] **Step 1: Write globals.css with design tokens, glass utilities, pixel utilities**

```css
@import "tailwindcss";

@theme {
  --color-bg-primary: #070b19;
  --color-bg-secondary: #0d1b3e;
  --color-accent-dark: #0a2463;
  --color-accent-base: #1e3a8a;
  --color-accent-light: #3b6fc2;
  --color-accent-glow: #5b8def;
  --color-glass-base: rgba(255, 255, 255, 0.03);
  --color-glass-md: rgba(255, 255, 255, 0.06);
  --color-glass-lg: rgba(255, 255, 255, 0.1);
  --color-glass-border: rgba(255, 255, 255, 0.08);
  --color-glass-border-hover: rgba(255, 255, 255, 0.15);
  --color-text-primary: #e8edf5;
  --color-text-secondary: #8899b4;
  --color-text-muted: #4a5a7a;
  --color-pixel-base: #1e3a8a;
  --color-pixel-light: #3b6fc2;
  --font-heading: "Press Start 2P", monospace;
  --font-body: Inter, sans-serif;
}

@layer base {
  body {
    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
    font-family: var(--font-body);
  }
}

@layer utilities {
  .glass {
    background-color: var(--color-glass-md);
    backdrop-filter: blur(16px);
    border: 1px solid var(--color-glass-border);
  }

  .glass-hover:hover {
    background-color: var(--color-glass-lg);
    border-color: var(--color-glass-border-hover);
  }

  .pixel-border {
    box-shadow:
      /* top */ inset 0 2px 0 var(--color-pixel-base),
      /* bottom */ inset 0 -2px 0 var(--color-accent-dark),
      /* left */ inset 2px 0 0 var(--color-pixel-base),
      /* right */ inset -2px 0 0 var(--color-accent-dark);
  }

  .pixel-border-glow:hover {
    box-shadow:
      /* top */ inset 0 2px 0 var(--color-pixel-light),
      /* bottom */ inset 0 -2px 0 var(--color-pixel-base),
      /* left */ inset 2px 0 0 var(--color-pixel-light),
      /* right */ inset -2px 0 0 var(--color-pixel-base);
  }

  .text-gradient {
    background: linear-gradient(135deg, var(--color-accent-base), var(--color-accent-glow));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}
```

- [ ] **Step 2: Create lib/utils.ts**

```ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

- [ ] **Step 3: Update layout.tsx with Google Fonts**

```tsx
import type { Metadata } from 'next'
import { Inter, Press_Start_2P } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'Hanif Zufar Rafif',
  description: 'Computer Engineer & AI Application Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${pressStart2P.variable}`}>
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Build to verify**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: add design tokens, glass/pixel utilities, fonts"
```

---

### Task 3: Data Layer

**Files:**
- Create: `src/data/projects.ts`
- Create: `src/data/experience.ts`
- Create: `src/data/skills.ts`

- [ ] **Step 1: Create projects.ts**

```ts
export interface Project {
  title: string
  slug: string
  description: string
  longDescription: string
  tags: string[]
  links: {
    label: string
    url: string
  }[]
}

export const projects: Project[] = [
  {
    title: 'Pawly — Pet Care Shop Platform',
    slug: 'pawly',
    description: 'A full-featured pet care shop platform handling both service bookings and retail inventory.',
    longDescription:
      'Designed with a focus on clean user experience and robust data management, Pawly manages service bookings, retail inventory, customer management, and seamless checkout flow.',
    tags: ['Web', 'Full-Stack', 'Database'],
    links: [],
  },
  {
    title: 'POS Service — Point of Sale System',
    slug: 'pos-service',
    description: 'A high-performance Point of Sale backend service built with Go.',
    longDescription:
      'Designed for concurrent transaction processing and real-time inventory tracking. Built with Go for fast, reliable payment processing and scalable backend architecture.',
    tags: ['Go', 'Backend', 'Concurrency'],
    links: [],
  },
  {
    title: 'RBAC Chat Apps — Role-Based Access Control Platform',
    slug: 'rbac-chat',
    description: 'A secure conversational platform with granular Role-Based Access Control.',
    longDescription:
      'Ensures data privacy and proper permission management across multi-room chat environments. Features granular permissions, secure multi-room architecture, and data privacy protection.',
    tags: ['Security', 'RBAC', 'Real-Time'],
    links: [],
  },
]
```

- [ ] **Step 2: Create experience.ts**

```ts
export interface Experience {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    title: 'AI Application Engineer',
    company: 'Full-Time',
    period: 'June 2023 – Present',
    description:
      'Design, develop, and deploy intelligent AI agents and conversational applications. Architected Zabbix automation tools for system monitoring. Build and maintain end-to-end architecture for production AI models.',
    technologies: ['Go', 'Python', 'AI Agents', 'Zabbix', 'Full-Stack'],
  },
]
```

- [ ] **Step 3: Create skills.ts**

```ts
export interface SkillCategory {
  category: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['Go', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'AI & ML',
    skills: ['AI Agents', 'LLMs', 'RAG', 'Prompt Engineering'],
  },
  {
    category: 'Backend',
    skills: ['API Design', 'Microservices', 'Database Design', 'Concurrency'],
  },
  {
    category: 'DevOps',
    skills: ['Docker', 'Linux', 'Git', 'CI/CD', 'Zabbix', 'Infrastructure Automation'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS'],
  },
]
```

- [ ] **Step 4: Build to verify**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: add data layer with typed content files"
```

---

### Task 4: shadcn/ui Primitives + Pixel UI Components

**Files:**
- Create: `src/components/ui/button.tsx`
- Create: `src/components/ui/card.tsx`
- Create: `src/components/ui/badge.tsx`
- Create: `src/components/pixel/pixel-border.tsx`
- Create: `src/components/pixel/pixel-divider.tsx`

- [ ] **Step 1: Create shadcn/ui Button**

```tsx
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-light disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-accent-base text-white hover:bg-accent-light',
        outline: 'border border-glass-border bg-transparent hover:bg-glass-md text-text-primary',
        ghost: 'hover:bg-glass-md text-text-primary',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
```

- [ ] **Step 2: Create shadcn/ui Card**

```tsx
import * as React from 'react'
import { cn } from '@/lib/utils'

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('glass glass-hover transition-all duration-300', className)}
    {...props}
  />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('font-heading text-sm uppercase leading-none tracking-wider', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm text-text-secondary', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

- [ ] **Step 3: Create shadcn/ui Badge**

```tsx
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-none border border-glass-border px-2.5 py-0.5 text-xs font-body transition-colors focus:outline-none focus:ring-2 focus:ring-accent-light',
  {
    variants: {
      variant: {
        default: 'bg-accent-base/20 text-accent-glow border-accent-base/30',
        secondary: 'bg-glass-md text-text-secondary border-glass-border',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
```

- [ ] **Step 4: Create PixelBorder component**

```tsx
import { cn } from '@/lib/utils'

interface PixelBorderProps {
  children: React.ReactNode
  className?: string
  glow?: boolean
}

export function PixelBorder({ children, className, glow }: PixelBorderProps) {
  return (
    <div
      className={cn(
        'pixel-border',
        glow && 'pixel-border-glow',
        'transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  )
}
```

- [ ] **Step 5: Create PixelDivider component**

```tsx
import { cn } from '@/lib/utils'

interface PixelDividerProps {
  className?: string
}

export function PixelDivider({ className }: PixelDividerProps) {
  return (
    <div
      className={cn(
        'h-1 w-full',
        'bg-[repeating-linear-gradient(90deg,var(--color-accent-base)_0px,var(--color-accent-base)_4px,transparent_4px,transparent_8px)]',
        className
      )}
    />
  )
}
```

- [ ] **Step 6: Build to verify**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: add shadcn/ui primitives and pixel UI components"
```

---

### Task 5: Layout Components (Navbar + Footer + Root Layout)

**Files:**
- Create: `src/components/layout/navbar.tsx`
- Create: `src/components/layout/footer.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create Navbar component**

```tsx
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link
          href="/"
          className="font-heading text-xs tracking-wider text-accent-glow hover:text-white transition-colors"
        >
          HANIF
        </Link>

        {/* Desktop nav */}
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="glass border-t border-glass-border md:hidden">
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
```

- [ ] **Step 2: Create Footer component**

```tsx
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
            href="https://github.com/yourusername"
            target="_blank"
            className="text-text-muted transition-colors hover:text-accent-glow"
            aria-label="GitHub"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="text-text-muted transition-colors hover:text-accent-glow"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="mailto:your.email@example.com"
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
```

- [ ] **Step 3: Update root layout.tsx with Navbar + Footer**

```tsx
import type { Metadata } from 'next'
import { Inter, Press_Start_2P } from 'next/font/google'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'Hanif Zufar Rafif',
  description: 'Computer Engineer & AI Application Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${pressStart2P.variable}`}>
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        <Navbar />
        <main className="mx-auto min-h-screen max-w-5xl px-4 pt-24 pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Build to verify**

Run: `npm run build`
Expected: Build succeeds, pages render with nav + footer

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: add navbar, footer, and root layout"
```

---

### Task 6: Home Page (Hero + Featured Projects)

**Files:**
- Create: `src/components/layout/hero.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Hero component**

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PixelBorder } from '@/components/pixel/pixel-border'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <PixelBorder className="inline-block px-6 py-3">
          <p className="font-heading text-[10px] tracking-widest text-accent-glow">
            COMPUTER ENGINEER & AI APPLICATION ENGINEER
          </p>
        </PixelBorder>

        <h1 className="font-heading text-2xl leading-relaxed tracking-wider text-text-primary md:text-3xl">
          Hanif Zufar Rafif
        </h1>

        <p className="mx-auto max-w-lg font-body text-base text-text-secondary leading-relaxed">
          I build intelligent automation, scalable AI agents, and robust
          full-stack applications that bridge backend systems with cutting-edge
          AI.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Link href="/projects">
            <Button variant="default" size="lg">
              View Projects
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Update Home page with Hero + Featured Projects**

```tsx
import { Hero } from '@/components/layout/hero'
import { ProjectCard } from '@/components/layout/project-card'
import { projects } from '@/data/projects'
import { PixelDivider } from '@/components/pixel/pixel-divider'

export default function Home() {
  const featured = projects.slice(0, 3)

  return (
    <>
      <Hero />
      <PixelDivider className="my-16" />
      <section className="space-y-8">
        <h2 className="font-heading text-sm tracking-wider text-text-primary">
          FEATURED PROJECTS
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}
```

*Note: ProjectCard will be created in Task 8 — for now build will fail. Either skip this part temporarily or create the component now.*

- [ ] **Step 3: Create a stub ProjectCard (will be replaced in Task 8)**

Create `src/components/layout/project-card.tsx`:
```tsx
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
```

- [ ] **Step 4: Build to verify**

Run: `npm run build`
Expected: Build succeeds, home page renders hero + project cards

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: add home page with hero and featured projects"
```

---

### Task 7: About Page (Bio + Experience Timeline + Skills)

**Files:**
- Create: `src/components/layout/timeline.tsx`
- Create: `src/app/about/page.tsx`

- [ ] **Step 1: Create Timeline component**

```tsx
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
```

- [ ] **Step 2: Create About page**

```tsx
import { Timeline } from '@/components/layout/timeline'
import { PixelDivider } from '@/components/pixel/pixel-divider'
import { Badge } from '@/components/ui/badge'
import { experiences } from '@/data/experience'
import { skillCategories } from '@/data/skills'

export default function About() {
  return (
    <div className="space-y-16">
      {/* Bio */}
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

      <PixelDivider />

      {/* Experience */}
      <section className="space-y-6">
        <h2 className="font-heading text-sm tracking-wider text-text-primary">
          EXPERIENCE
        </h2>
        <Timeline experiences={experiences} />
      </section>

      <PixelDivider />

      {/* Skills */}
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
    </div>
  )
}
```

- [ ] **Step 3: Build to verify**

Run: `npm run build`
Expected: Build succeeds, /about page renders

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: add about page with bio, timeline, skills"
```

---

### Task 8: Projects Pages (Listing + Detail)

**Files:**
- Modify: `src/components/layout/project-card.tsx`
- Create: `src/app/projects/page.tsx`
- Create: `src/app/projects/[slug]/page.tsx`

- [ ] **Step 1: Update ProjectCard (already created in Task 6) — no changes needed**

- [ ] **Step 2: Create Projects listing page**

```tsx
import { ProjectCard } from '@/components/layout/project-card'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="font-heading text-lg tracking-wider text-text-primary">
        PROJECTS
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Create Project Detail page**

```tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PixelBorder } from '@/components/pixel/pixel-border'
import { ArrowLeft } from 'lucide-react'

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
```

- [ ] **Step 4: Build to verify**

Run: `npm run build`
Expected: Build succeeds, /projects and /projects/[slug] pages render

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: add projects listing and detail pages"
```

---

### Task 9: Contact Page

**Files:**
- Create: `src/app/contact/page.tsx`

- [ ] **Step 1: Create Contact page**

```tsx
import Link from 'next/link'
import { PixelBorder } from '@/components/pixel/pixel-border'
import { PixelDivider } from '@/components/pixel/pixel-divider'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

const contactLinks = [
  {
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourusername',
    href: 'https://linkedin.com/in/yourusername',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/yourusername',
    href: 'https://github.com/yourusername',
    icon: Github,
  },
]

export default function Contact() {
  return (
    <div className="space-y-12">
      <h1 className="font-heading text-lg tracking-wider text-text-primary">
        CONTACT
      </h1>

      <p className="font-body text-base text-text-secondary leading-relaxed max-w-2xl">
        Interested in collaborating or just want to say hi? Feel free to reach
        out through any of the channels below.
      </p>

      <PixelDivider />

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
    </div>
  )
}
```

- [ ] **Step 2: Build to verify**

Run: `npm run build`
Expected: Build succeeds, /contact page renders

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add contact page with social links"
```

---

### Task 10: Animation Layer & Refinements

**Files:**
- Create: `src/components/layout/section-reveal.tsx`
- Modify: (no file changes needed — animations already applied inline in components)

- [ ] **Step 1: Create reusable SectionReveal wrapper**

```tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 2: Wrap key sections with SectionReveal**

In `src/app/page.tsx`:
```tsx
// Wrap the featured projects section
<SectionReveal>
  <section className="space-y-8">
    <h2 className="font-heading text-sm tracking-wider text-text-primary">
      FEATURED PROJECTS
    </h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featured.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  </section>
</SectionReveal>
```

In `src/app/about/page.tsx` — wrap bio, timeline, and skills sections.

In `src/app/projects/page.tsx` — wrap heading and grid.

In `src/app/contact/page.tsx` — wrap contact cards.

- [ ] **Step 3: Build to verify**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: add animation layer with section reveal"
```

---

### Task 11: Build Config & GitHub Actions Deploy

**Files:**
- Create: `.github/workflows/deploy.yml`
- Modify: `next.config.ts` (verify settings)
- Create: `.nojekyll` (prevent GitHub Pages Jekyll processing)

- [ ] **Step 1: Create GitHub Actions workflow**

`.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Create .nojekyll**

Empty file at `.nojekyll` (touch it, zero bytes).

- [ ] **Step 3: Update next.config.ts if needed**

Verify `output: 'export'` and `images.unoptimized: true` are set. Add `basePath` if deploying to a subpath (GitHub Pages user sites use root domain, project pages use `/repo-name/`):

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to https://yourusername.github.io/repo-name/, add:
  // basePath: '/repo-name',
}

export default nextConfig
```

- [ ] **Step 4: Build to verify**

Run: `npm run build`
Expected: Clean static export to `out/` directory

```bash
ls out/
# Should show: index.html, about/index.html, projects/index.html, etc.
```

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: add GitHub Actions deploy workflow"
```

---

### Task 12: Final Polish & Verification

**Files:**
- Modify: various — final review pass

- [ ] **Step 1: Do a full build and verify all routes render**

Run: `npm run build`
Expected: Build succeeds with no errors

Verify output:
```bash
ls out/                         # should have index.html
ls out/about/                   # should have index.html
ls out/projects/                # should have index.html  
ls out/projects/pawly/          # should have index.html
ls out/contact/                 # should have index.html
```

- [ ] **Step 2: Check that git status is clean**

Run: `git status`
Expected: No uncommitted changes

- [ ] **Step 3: Commit any final fixes**

```bash
git add -A && git commit -m "chore: final polish and build verification"
```
