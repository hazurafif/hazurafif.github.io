# hazurafif.github.io

Personal portfolio built with [Astro](https://astro.build) v7 and deployed to GitHub Pages.

## Stack

- **Framework:** Astro v7
- **Language:** TypeScript
- **Content:** MDX via content collections
- **Typography:** Inter, JetBrains Mono
- **Deployment:** GitHub Actions → GitHub Pages

## Development

```bash
npm install
npm run dev     # local dev server at localhost:4321
npm run build   # static output to dist/
npm run preview # preview the built site
```

## Project Structure

```
src/
├── content/
│   ├── config.ts         # Content collection schema (Zod)
│   └── projects/         # Project MDX files
├── components/           # Reusable UI components
├── layouts/              # Base HTML layout
├── pages/                # Routes (index, about, projects/[slug], 404)
└── styles/               # Global CSS with design tokens
```

## Deployment

Push to `main` — the GitHub Actions workflow in `.github/workflows/deploy.yml` handles building and deploying to GitHub Pages automatically.
