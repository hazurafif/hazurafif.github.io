# Personal Portfolio — Design Spec

## Purpose
Rebuild hazurafif.github.io as a static Next.js portfolio with a pixel-art + glassmorphism aesthetic.

## Tech Stack
- **Framework:** Next.js 15 with App Router + `output: 'export'` (static SSG)
- **UI:** shadcn/ui primitives + custom Pixel UI components
- **Styling:** Tailwind CSS v4 + `backdrop-blur` for glass effects
- **Animation:** Framer Motion (scroll-triggered reveals, hover glows, page transitions)
- **Fonts:** "Press Start 2P" (headings), Inter/Geist (body)
- **Deploy:** GitHub Pages via GitHub Actions

## Design System

### Colors

A cohesive retro deep blue palette inspired by classic terminal/CRT aesthetics. All colors are defined as CSS custom properties on `:root` and mapped to Tailwind v4 theme tokens.

#### Full Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#070b19` | Page background — near-black navy |
| `--bg-secondary` | `#0d1b3e` | Secondary surfaces, card glass base |
| `--accent-dark` | `#0a2463` | Deep accent, pixel shadow layers |
| `--accent-base` | `#1e3a8a` | Primary accent — retro deep blue |
| `--accent-light` | `#3b6fc2` | Accent hover, glow effects |
| `--accent-glow` | `#5b8def` | Bright highlight, pixel glow pulse |
| `--glass-base` | `rgba(255,255,255,0.03)` | Glass surface base |
| `--glass-md` | `rgba(255,255,255,0.06)` | Glass surface (cards, nav) |
| `--glass-lg` | `rgba(255,255,255,0.10)` | Glass surface hover state |
| `--glass-border` | `rgba(255,255,255,0.08)` | Default glass border |
| `--glass-border-hover` | `rgba(255,255,255,0.15)` | Glass border on hover |
| `--text-primary` | `#e8edf5` | Body text |
| `--text-secondary` | `#8899b4` | Muted text (descriptions) |
| `--text-muted` | `#4a5a7a` | Low-priority text |
| `--pixel-border` | `#1e3a8a` | Pixel border base color |
| `--pixel-border-light` | `#3b6fc2` | Pixel border highlight layer |

#### Tailwind Token Mapping (globals.css)

```css
@theme {
  --color-bg-primary: #070b19;
  --color-bg-secondary: #0d1b3e;
  --color-accent-dark: #0a2463;
  --color-accent-base: #1e3a8a;
  --color-accent-light: #3b6fc2;
  --color-accent-glow: #5b8def;
  --color-glass-base: rgba(255,255,255,0.03);
  --color-glass-md: rgba(255,255,255,0.06);
  --color-glass-lg: rgba(255,255,255,0.10);
  --color-glass-border: rgba(255,255,255,0.08);
  --color-glass-border-hover: rgba(255,255,255,0.15);
  --color-text-primary: #e8edf5;
  --color-text-secondary: #8899b4;
  --color-text-muted: #4a5a7a;
  --color-pixel-base: #1e3a8a;
  --color-pixel-light: #3b6fc2;
}
```

#### Design Rationale

- **Dark navy base** (`#070b19`) provides deep contrast for glass overlays — the darker the base, the more glass effect pops
- **Retro deep blue accent** (`#1e3a8a`) is readable, period-appropriate for pixel aesthetic, and avoids harshness of pure `#0033cc`
- **Glass layers** use extremely subtle white opacity (3–10%) so they read as "transparent frosted blue" against the navy background rather than gray
- **Text** is cool-toned off-white (`#e8edf5`) to harmonize with the blue palette — pure white would feel too stark

### Pixel UI Components
- `PixelBorder` — multi-layer box-shadow pixel border
- `PixelButton` — sharp corners, no border-radius, pixel glow on hover
- `PixelDivider` — dashed/pixelated horizontal rule
- Pixel heading font, clean sans-serif body

### Glassmorphism
- Cards/panels: `rounded-none` (to honor pixel aesthetic), `bg-glass-md`, `backdrop-blur-lg`, `border border-glass-border`
- Hover: upgrades to `bg-glass-lg` + `border-glass-border-hover` — glass "frosts over" slightly
- Navbar: `bg-glass-base` at rest, `bg-glass-md` on scroll (activated via scroll listener)
- Pixel elements inside glass panels retain sharp pixel borders — glass is the "container material," pixel is the "decorative trim"

## Architecture

```
src/
├── app/
│   ├── layout.tsx            # Root layout (pixel bg, nav, footer, fonts)
│   ├── page.tsx              # Home — hero + featured projects
│   ├── about/page.tsx        # Bio + experience timeline + skills
│   ├── projects/
│   │   ├── page.tsx          # Project listing (filterable cards)
│   │   └── [slug]/page.tsx   # Project detail
│   └── contact/page.tsx      # Contact links
├── components/
│   ├── ui/                   # shadcn/ui (button, card, badge, etc.)
│   ├── pixel/                # PixelBorder, PixelButton, PixelDivider
│   └── layout/               # Navbar, Footer
├── data/
│   └── projects.ts           # Project content (typed TS)
└── styles/
    └── globals.css            # Tailwind + pixel utilities + glass tokens
```

## Pages

| Route | Sections | Key Components |
|-------|----------|---------------|
| `/` | Hero, Featured Projects | Hero, ProjectCard, PixelButton |
| `/about` | Bio, Timeline, Skills | Timeline, SkillBadge |
| `/projects` | Filterable grid | ProjectCard, filter controls |
| `/projects/[slug]` | Full detail | Tech badges, links, description |
| `/contact` | Contact links | Social icons, link cards |

## Animations
- `fade-in-up` with `whileInView` on section reveal
- Pixel border glow pulse on card/button hover
- Fade page transitions
- Navbar glass opacity on scroll

## Data
All content in `src/data/` as typed TypeScript exports:
- `projects.ts` — project entries with title, description, tech, links, slug
- `experience.ts` — timeline entries
- `skills.ts` — skill categories

## Deploy
- `next.config.ts`: `output: 'export'`, `images.unoptimized: true`
- GitHub Actions workflow: build on push to `main`, deploy to `gh-pages` branch

## Out of Scope (YAGNI)
- No CMS / headless backend
- No blog
- No dark/light mode toggle
- No analytics
- No contact form backend (just mailto/link-out)
