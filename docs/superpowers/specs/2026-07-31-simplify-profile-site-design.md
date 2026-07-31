# Site Redesign: Minimal Single-Page Profile

Date: 2026-07-31
Status: Approved by user

## Goal

Completely replace the current multi-page, pixel/retro-themed site with a
minimal single-page profile. The user dislikes the current design and colors
but likes motion — the new site keeps tasteful motion with a different
approach (typewriter intro + subtle fades instead of section reveals).

## Design Direction

Terminal-inspired **palette only** — no terminal chrome, no fake window, no
command-line sections. Just: dark background, amber accent, monospace type,
clean minimal layout.

- Background: `#0a0a0a`
- Primary text: `#fafafa` (name), `#c9d1d9` (body)
- Secondary text: `#8b949e` (bio)
- Accent: `#d97706` (amber) — role, links, cursor, chip borders on hover
- Muted labels: `#6b7280`
- Chip borders: `#3d3d3d`

Approved mockup: dark page, centered/left-aligned column, name with blinking
block cursor, role line in amber, 2-3 sentence bio, "TECH STACK" section with
bordered chips, "FIND ME" section with three social links (github, linkedin,
email).

## Content

- **Name:** Hanif Zufar Rafif (displayed lowercase, terminal-style)
- **Role:** AI Application Engineer (amber)
- **Bio:** "Building intelligent automation, AI agents, and robust full-stack
  applications — bridging backend systems with AI." (from README, shortened)
- **Tech stack chips:** go, python, typescript, ai agents, docker, linux,
  zabbix (curated list approved in mockup)
- **Socials:**
  - GitHub: https://github.com/hazurafif
  - LinkedIn: https://linkedin.com/in/hazurafif
  - Email: mailto:hanifrafif22@gmail.com (display: hanifrafif22@gmail.com)

## Page Structure (single page)

1. **Profile** — name (typewriter effect) + blinking cursor, amber role line,
   short bio
2. **Tech Stack** — "TECH STACK" muted label, bordered chips
3. **Find Me** — "FIND ME" muted label, GitHub / LinkedIn / Email links
   (lucide icons + labels, amber)

No navbar, no footer, no other pages.

## Motion

- Typewriter effect on the name on load
- Blinking block cursor after the name (CSS animation)
- Subtle staggered fade/slide-in per section on scroll/load (framer-motion)
- NOT the previous SectionReveal full-page reveal approach
- Respect `prefers-reduced-motion`

## Deletions

Remove unused files and pages:

- `src/app/about/`, `src/app/contact/`, `src/app/projects/` (and `[slug]`)
- `src/components/layout/`: navbar, footer, hero, project-card, section-reveal, timeline
- `src/components/pixel/`: pixel-border, pixel-divider
- `src/components/ui/`: badge, button, card (if unused after cleanup)
- `src/data/`: experience.ts, projects.ts, skills.ts — the chip list lives inline in a small `stack` array in the page component
- `src/lib/utils.ts` (if unused)

Keep: Next.js 15, Tailwind 4, framer-motion, lucide-react.

## Verification

- `npm run lint` passes
- `npm run build` succeeds (static export for GitHub Pages)
- Page renders: name types out, cursor blinks, chips and socials display

## Out of Scope

- Projects, experience/timeline, about page content
- Dark/light mode toggle
- Terminal window styling or command-line interactions
