# Portfolio — hazurafif.github.io

Built with Astro v7, Tailwind CSS v4, shadcn/ui (React), deployed to GitHub Pages.

## Stack
- **Framework:** Astro v7 (static output)
- **UI:** shadcn/ui v4 (React components with `client:load`)
- **CSS:** Tailwind CSS v4 (`@tailwindcss/vite` plugin)
- **Fonts:** Inter (Google Fonts)
- **Content:** MDX via content collections
- **Deploy:** GitHub Actions → GitHub Pages

## Key Files

| Path | Purpose |
|---|---|
| `src/styles/global.css` | Tailwind entry + `@utility glass` + Apple design tokens |
| `src/components/ui/glass-card.tsx` | Wraps shadcn `Card` with `.glass` utility |
| `src/components/ui/button.tsx` | shadcn Button (avoid `as-child` — use plain `<a>` instead) |
| `DESIGN.md` | Current active design system (Apple-inspired) |
| `.github/workflows/deploy.yml` | GitHub Actions deploy workflow |

## Design Tokens (Apple-inspired)
- Primary: `#0066cc`, hover: `#0071e3`
- Ink: `#1d1d1f`, muted: `#737373`, muted-light: `#a1a1aa`
- Canvas: `#ffffff`, soft: `#f5f5f7`
- Hairline: `#e5e5e5`, divider: `#f0f0f0`
- Font: Inter, body 16px/1.6

## Glassmorphism
The `.glass` utility class applies frosted-glass effect:
```css
@utility glass {
  background: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(20px) saturate(1.3) !important;
  border: 1px solid rgba(255, 255, 255, 0.8) !important;
}
```
Used via `className="glass"` on shadcn `Card` components.

## Client Directives (Critical)
All shadcn React components must use a `client:*` directive in `.astro` files:
- `client:load` — load immediately (for above-fold components)
- `client:idle` — load when browser is idle
- `client:visible` — load when visible (for below-fold)

Without a directive, the component renders as static HTML with no JS.

## Button Pattern
Do NOT use shadcn `Button` with `as-child` for links — it breaks SSR styling.
Use plain `<a>` tags with CSS classes instead:
```css
.btn-link-primary { ... }  /* blue pill button */
.btn-link-outline { ... }  /* outlined pill button */
```

## Content Collections
Projects live in `src/content/projects/*.mdx` with Zod schema in `src/content.config.ts`.
Fields: title, description, pubDate, icon, tags, liveUrl, repoUrl.

## Common Commands
```bash
npm run dev      # local dev on localhost:4321
npm run build    # build to dist/
npm run preview  # preview built site
npx astro add <integration>  # add Astro integration
npx shadcn@latest add <component>  # add shadcn component
```

## shadcn/ui Setup
- Initialized with New York style, base-ui/react primitives
- Components in `src/components/ui/`
- `components.json` at root
- `cn()` utility in `src/lib/utils.ts` (clsx + tailwind-merge)

## Mobile
- Nav collapses to hamburger at 768px
- Section padding: 48px desktop → 32px mobile
- Glass card layout remains the same

## Reminders
- Always run `npm run build` before git push to verify
- `gh auth login` for GitHub CLI auth
- Contact info in `src/components/Contact.astro` has placeholder values (email, LinkedIn, GitHub)
- AGENTS.md is at root — read this first for context
