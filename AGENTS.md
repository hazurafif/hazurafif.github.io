# Portfolio — hazurafif.github.io

Static site built with HTML, CSS, and JavaScript. Deployed to GitHub Pages.

## Stack
- **Stack:** Pure HTML + CSS + JavaScript (no build step)
- **CSS:** Hand-written CSS with Apple-inspired design tokens
- **Fonts:** Inter (Google Fonts)
- **Deploy:** GitHub Actions → GitHub Pages

## Key Files

| Path | Purpose |
|---|---|
| `index.html` | Home page (Hero, About, Experience, Projects, Skills, Contact) |
| `about.html` | About page |
| `404.html` | 404 error page |
| `projects/` | Project detail pages (pawly, pos-service, rbac-chat) |
| `css/style.css` | All site styles |
| `js/main.js` | Hamburger menu toggle |
| `DESIGN.md` | Apple-inspired design system |
| `.github/workflows/deploy.yml` | GitHub Actions deploy workflow |

## Design Tokens (Apple-inspired)
- Primary: `#0066cc`, hover: `#0071e3`
- Ink: `#1d1d1f`, muted: `#6e6e73`, muted-light: `#a1a1aa`
- Canvas: `#ffffff`, soft: `#f5f5f7`
- Hairline: `#d2d2d7`, divider: `#e8e8ed`
- Font: Inter, body 16px/1.6

## Mobile
- Nav collapses to hamburger at 768px
- Section padding: 80px mobile → 112px desktop

## Reminders
- Use `python3 -m http.server 8000` for local testing
- `gh auth login` for GitHub CLI auth
- Contact info in `index.html` has placeholder values (email, LinkedIn, GitHub)
- AGENTS.md is at root — read this first for context
