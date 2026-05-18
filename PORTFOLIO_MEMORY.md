# Portfolio Memory

Use this file as the quick context layer for future updates to Dilawar Shah's portfolio.

## Current Stack

- Next.js 14 App Router with TypeScript.
- Tailwind CSS for styling.
- Framer Motion for transitions, scroll progress, custom cursor, and section reveals.
- Lucide React for icons.
- Fonts are loaded in `app/layout.tsx`: Plus Jakarta Sans for body text and Space Grotesk for display headings.

## Core Logic To Preserve

- `app/page.tsx` owns the homepage state:
  - `darkMode`
  - `activeSection`
  - custom cursor motion values and variants
  - scroll progress bar
  - smooth section scrolling
  - resume download from `/assets/dilawarshah_resume.pdf`
- `Navbar` receives all navigation/theme/download/cursor callbacks from `page.tsx`.
- `Contact` uses a client-side `mailto:` form. There is no backend contact API.
- `app/data.tsx` is the source of truth for projects, skills, certifications, and journey entries.
- `/journey` is a separate client page that reuses `Navbar`, `Footer`, and `Backgrounds`.

## Design Direction

- Keep the site simple, premium, and technical.
- Avoid decorative clutter. Use grid texture, thin borders, measured spacing, and crisp motion.
- Cards use `rounded-lg` or smaller.
- Main accents: teal, sky, and amber. Avoid making the whole site a single blue/purple theme.
- Shared utility classes live in `app/globals.css`:
  - `section-shell`
  - `section-inner`
  - `eyebrow`
  - `section-title`
  - `section-copy`
  - `premium-panel`
  - `premium-panel-hover`
  - `focus-ring`

## SEO And AI Search Positioning

Primary phrases to preserve naturally in copy and metadata:

- Dilawar Shah
- AI engineer
- full-stack AI developer
- RAG developer
- RAG knowledge agents
- AI automation consultant
- computer vision engineer
- workflow automation
- n8n automation
- TensorFlow developer
- LangChain developer
- Azure AI certified developer
- Pakistan AI developer

SEO files and surfaces:

- Metadata is in `app/layout.tsx`.
- Structured Person and Service JSON-LD is in `app/page.tsx`.
- `app/robots.ts` and `app/sitemap.ts` use `NEXT_PUBLIC_SITE_URL`.
- Set `NEXT_PUBLIC_SITE_URL` to the real production domain before deployment.

## Assets

- Resume: `public/assets/dilawarshah_resume.pdf`
- Automation project image: `public/assets/resume-automation-pipeline.png`
- Azure AI certificate image: `public/assets/azure-ai-fundamentals.png`

## Update Checklist

- Add or update content in `app/data.tsx` first.
- Keep project links and IDs stable unless the public URL changes.
- If a new route is added, include it in `app/sitemap.ts`.
- If the main service focus changes, update visible hero copy, metadata keywords, and JSON-LD together.
- Run `npm run build` before shipping.
