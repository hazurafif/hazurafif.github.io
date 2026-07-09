# Portfolio — hazurafif.github.io

React + Vite + TypeScript app deployed to GitHub Pages.

## Stack
- **Framework:** React 19 + TypeScript
- **Build:** Vite 8
- **UI:** shadcn/ui (Base Nova preset) + custom components
- **CSS:** Tailwind CSS v4 with CSS variables
- **Animation:** Framer Motion
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Deploy:** GitHub Actions → GitHub Pages

## Key Files

| Path | Purpose |
|---|---|
| `src/main.tsx` | Entry point, router setup |
| `src/components/Layout.tsx` | Shared layout (Header + Outlet + Footer) |
| `src/pages/Home.tsx` | Home page (Hero, About, Experience, Projects, Skills, Contact) |
| `src/pages/ProjectDetail.tsx` | Dynamic project detail (`/projects/:slug`) |
| `src/data/projects.ts` | Project data + schema |
| `src/styles/globals.css` | Tailwind + Apple-inspired design tokens |
| `src/components/ui/` | shadcn/ui components (Button, Badge) |
| `DESIGN.md` | Apple-inspired design system |
| `.github/workflows/deploy.yml` | GitHub Actions deploy workflow |

## Design Tokens (Apple-inspired)
- Primary: `#0066cc`, hover: `#0071e3`
- Ink: `#1d1d1f`, muted: `#6e6e73`, muted-light: `#a1a1aa`
- Canvas: `#ffffff`, soft: `#f5f5f7`
- Hairline: `#d2d2d7`, divider: `#e8e8ed`
- Font: Inter, body 16px/1.6

## Commands
```bash
npm run dev      # local dev on localhost:5173
npm run build    # typecheck + build to dist/
npm run preview  # preview built site
npm run lint     # oxlint
```

## Mobile
- Nav collapses to hamburger at 768px (framer-motion animated)
- Section padding: 80px mobile → 112px desktop

## Reminders
- `npx shadcn@latest add <component>` to add new shadcn/ui components
- Use `@` path alias for imports (e.g. `@/components/ui/button`)
- Contact info in `src/data/projects.ts` has placeholder values (email, LinkedIn, GitHub)
- AGENTS.md is at root — read this first for context
