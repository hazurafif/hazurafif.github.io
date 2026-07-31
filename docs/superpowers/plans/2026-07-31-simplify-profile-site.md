# Single-Page Profile Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the multi-page pixel/retro site with a single-page minimal profile: name, role, bio, tech stack chips, and GitHub/LinkedIn/Email links, styled with a dark + amber + monospace palette.

**Architecture:** Static Next.js 15 app (already `output: 'export'` for GitHub Pages). The page is a server component rendering one client component (`Profile`) that owns all motion (typewriter name, blinking cursor, staggered fades via framer-motion). No navbar, no footer, no routing beyond the single page.

**Tech Stack:** Next.js 15 (App Router), React 19, Tailwind CSS 4 (via `@theme` tokens), framer-motion 12, lucide-react icons, `JetBrains_Mono` from `next/font/google`.

**Testing note:** This project has no test framework (no jest/vitest) and this is a static presentation page. Verification is `npx tsc --noEmit` (typecheck) + `npm run build` + manual check in `npm run dev`. Note: `npm run lint` cannot be used — the repo has no ESLint config and `next lint` (deprecated in Next 15) hangs at an interactive setup prompt. `eslint` stays in devDependencies but no config is added (out of scope). Do not add a test framework — YAGNI.

**Design spec:** `docs/superpowers/specs/2026-07-31-simplify-profile-site-design.md`

**Branch:** `feature/simplify-profile-site` (already checked out)

---

### Task 1: Replace global theme with terminal palette

**Files:**
- Modify: `src/app/globals.css` (entire file)

- [ ] **Step 1: Replace the contents of `src/app/globals.css`**

```css
@import "tailwindcss";

@theme {
  --color-bg: #0a0a0a;
  --color-fg: #fafafa;
  --color-text-primary: #c9d1d9;
  --color-text-secondary: #8b949e;
  --color-text-muted: #6b7280;
  --color-accent: #d97706;
  --color-line: #3d3d3d;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
}

@layer base {
  body {
    background-color: var(--color-bg);
    color: var(--color-text-primary);
    font-family: var(--font-mono);
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.cursor-blink {
  animation: blink 1s step-end infinite;
}
```

This defines the palette from the spec (`--color-bg: #0a0a0a`, accent `#d97706`, text `#c9d1d9`, secondary `#8b949e`, muted `#6b7280`, chip border `#3d3d3d`) plus the `blink` keyframe used for the cursor after the name.

- [ ] **Step 2: Verify no other file breaks**

Run: `rg -n "bg-bg-primary|text-text-primary|font-heading|glass|pixel|text-gradient" src --type tsx --type css`
Expected: matches only in files that Task 5 deletes (navbar, footer, hero, pixel, ui components). No matches in `src/app/page.tsx`, `src/app/layout.tsx` (they are replaced in Tasks 2 and 4).

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "style: switch to dark amber monospace theme"
```

---

### Task 2: Slim down root layout

**Files:**
- Modify: `src/app/layout.tsx` (entire file)

- [ ] **Step 1: Replace the contents of `src/app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Hanif Zufar Rafif',
  description: 'AI Application Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="bg-bg text-text-primary font-mono antialiased">
        <main className="mx-auto min-h-screen w-full max-w-2xl px-6 py-24">
          {children}
        </main>
      </body>
    </html>
  )
}
```

Removes the `Navbar`, `Footer`, and the `Press_Start_2P`/`Inter` fonts. The main column is now `max-w-2xl`, left-aligned, vertically padded — matching the approved mockup.

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: PASS (no errors). The old `page.tsx` still imports `Hero`/`PixelDivider`/etc. at this point, but those files still exist until Task 5, so everything compiles — those imports disappear in Tasks 4–5.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "refactor: strip navbar, footer, and pixel fonts from layout"
```

---

### Task 3: Build the Profile component

**Files:**
- Create: `src/components/profile.tsx`

- [ ] **Step 1: Create `src/components/profile.tsx` with this exact content**

```tsx
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
    if (reducedMotion) return
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
```

Notes:
- The name types out via a `setInterval` (55ms/char) driven by `useEffect`; the amber block cursor blinks via the `.cursor-blink` class from Task 1.
- `useReducedMotion` skips typing for reduced-motion users; `MotionConfig reducedMotion="user"` disables fade transforms for them.
- Chips use `border-line`, hover flips to amber. Social links are amber with lucide icons, external links get `_blank`.

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/components/profile.tsx
git commit -m "feat: add profile component with typewriter and social links"
```

---

### Task 4: Point the home page at the Profile component

**Files:**
- Modify: `src/app/page.tsx` (entire file)

- [ ] **Step 1: Replace the contents of `src/app/page.tsx`**

```tsx
import { Profile } from '@/components/profile'

export default function Home() {
  return <Profile />
}
```

- [ ] **Step 2: Verify the full build works**

Run: `npm run build`
Expected: SUCCESS. `out/` directory is generated (static export). If Task 2's lint-only check skipped the old `page.tsx` imports, this now compiles cleanly because `Hero`, `PixelDivider`, `SectionReveal`, and `projects` are no longer imported.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: render single-page profile on home"
```

---

### Task 5: Delete obsolete pages, components, and data

**Files:**
- Delete: `src/app/about/`, `src/app/contact/`, `src/app/projects/`
- Delete: `src/components/layout/`, `src/components/pixel/`, `src/components/ui/`
- Delete: `src/data/`, `src/lib/`

- [ ] **Step 1: Remove the directories**

```bash
git rm -r src/app/about src/app/contact src/app/projects src/components/layout src/components/pixel src/components/ui src/data src/lib
```

Expected: files listed as deleted. `src/components/` should now contain only `profile.tsx`; `src/app/` only `layout.tsx`, `page.tsx`, `globals.css`.

- [ ] **Step 2: Confirm the tree is clean**

Run: `find src -type f`
Expected output:

```
src/app/globals.css
src/app/layout.tsx
src/app/page.tsx
src/components/profile.tsx
```

- [ ] **Step 3: Verify build still passes**

Run: `npm run build`
Expected: SUCCESS.

- [ ] **Step 4: Commit**

```bash
git commit -m "chore: remove multi-page site code"
```

---

### Task 6: Remove unused dependencies

**Files:**
- Modify: `package.json`, `package-lock.json`

- [ ] **Step 1: Uninstall dependencies that only the deleted code used**

Run: `npm uninstall class-variance-authority clsx tailwind-merge @radix-ui/react-slot`

Expected: package.json loses those four packages; `package-lock.json` updates.

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: SUCCESS.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: remove unused dependencies"
```

---

### Task 7: Final verification

- [ ] **Step 1: Lint**

Run: `npx tsc --noEmit`
Expected: PASS.

- [ ] **Step 2: Production build**

Run: `npm run build`
Expected: SUCCESS, static export written to `out/`.

- [ ] **Step 3: Manual visual check**

Run: `npm run dev` and open http://localhost:3000
Verify:
- Name types out character by character, amber cursor blinks after it
- Amber role line, gray bio below
- TECH STACK chips render bordered; hovering a chip turns it amber
- FIND ME shows github / linkedin / email links (lucide icons + amber text)
- Page background is `#0a0a0a`, everything monospace
- No navbar, no footer

Stop the dev server when done (`Ctrl+C`).

- [ ] **Step 4: Check git status**

Run: `git status`
Expected: clean working tree on branch `feature/simplify-profile-site`; only `out/` and `.next/` untracked (they are gitignored).
