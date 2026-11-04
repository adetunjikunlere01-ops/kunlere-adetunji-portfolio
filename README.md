# Kunlere Adetunji — Architecture Portfolio

A responsive Next.js portfolio for Kunlere Adetunji, Associate Architect.

## Run locally
```bash
npm install
npm run dev
```

## Structure
- `src/app/page.tsx` — homepage
- `src/app/projects/page.tsx` — all-projects directory with category filters
- `src/app/projects/[slug]/page.tsx` — reusable project detail template
- `src/data/projects.ts` — project content and metadata
- `src/app/globals.css` — responsive visual system

## Project imagery
Place approved, web-optimised project images in `public/images/<project-slug>/` and replace the temporary architectural visual placeholders in the shared components. Confirm individual project roles and contributions before publishing.

## Deploy
Import this repository into Vercel. Framework preset: Next.js. Build command: `npm run build`.
