## Purpose

This file gives focused, actionable guidance to AI coding agents working on this repository so they can be productive immediately.

## Big picture

- This is a Next.js (pages router) site in `/pages` with a small component library in `/components` and global styles in `styles/globals.css`.
- `pages/_app.js` wraps all pages with `components/Layout.js`. Edit `Layout.js` to affect site-wide header/footer styles and navigation.
- Static/content pages are under `pages/` (examples: `impact/`, `thinking/`). There are no API routes in the repo root.

## How the site is structured (important files)

- `package.json` — run scripts: `npm run dev` (local), `npm run build`, `npm start`.
- `pages/_app.js` — global wrapper; keeps `Layout` around all pages.
- `components/Layout.js` — site header, menu, and footer. Uses `framer-motion` for animations.
- `components/ChatBot.js` — small client-side chat UI; it uses `useState` and local message routing (no external API calls). Look here for patterns of simple client-only stateful components.
- `tailwind.config.js` and `styles/globals.css` — Tailwind is the styling system. Update `tailwind.config.js` when adding new design tokens.
- `vercel.json` and `DEPLOY_VERCEL.md` — project is configured to deploy on Vercel (Next.js builder).

## Development workflow & commands

- Install and run locally:
  - npm install
  - npm run dev (starts Next.js dev server)
- Build & preview production:
  - npm run build
  - npm start (serves the built Next.js app)
- CI / deploy: Vercel uses `vercel.json`. `DEPLOY_VERCEL.md` contains manual CLI notes.

If you add any serverless functions or environment variables, update `DEPLOY_VERCEL.md` and the Vercel project settings.

## Project-specific conventions and patterns

- Pages follow the Next.js pages-router convention (file → route). Keep page-level components as the default export.
- Global layout is controlled by `pages/_app.js` — to change page chrome, edit `components/Layout.js`.
- Use Tailwind utility classes in JSX; typography plugin is enabled in `tailwind.config.js`.
- Animation pattern: `framer-motion` is used in `Layout.js` and `ChatBot.js` — prefer the same animation primitives for consistency.
- Client-only UI: `components/ChatBot.js` is a pure client-side component. When adding similar client-only components, use React hooks and avoid server-only Node APIs.

## Integration points / dependencies

- Major dependencies visible in `package.json`: `next@14.x`, `react@18.x`, `framer-motion`, `@headlessui/react`, and Tailwind plugins. Any change to these may affect SSR/CSR behavior.
- Static assets: `public/images/` — update images there and reference them from pages/components.

## Small examples (copyable patterns from this repo)

- Layout wrapper (already present):

  The site uses `pages/_app.js` to wrap pages with `Layout`:

  - See: `pages/_app.js` and `components/Layout.js`

- Simple client chat pattern:

  - `components/ChatBot.js` shows how to keep state locally and render message lists without API calls. When adding a server-backed assistant, add an API route under `pages/api/*` and call it via `fetch` from the component.

## When to open a PR vs small patch guidance

- Small UI text/content fixes: single-file PRs are fine (edit the relevant `pages/*.js`).
- Structural changes (routing, adding API routes, dependency bumps): include a short description and a local build verification (`npm run build`) in the PR.

## What to run to verify changes (quick checklist)

1. Local dev: `npm run dev` — sanity-check the page(s) you edited.
2. Production build: `npm run build` — ensure no build-time errors.
3. Optional: deploy to a Vercel preview (connected repo) to validate production behavior.

## Notes & limitations discovered in repo

- No tests present in the repo — don't assume test harnesses. If you add tests, include a `test` script in `package.json` and optionally add a CI workflow.
- There are no environment variables or serverless functions currently; features requiring secrets or back-end logic will need new `pages/api` routes and Vercel env vars.

## If you need more context

- Look first at `components/Layout.js`, `components/ChatBot.js`, `pages/_app.js`, and `tailwind.config.js`.
- Check `DEPLOY_VERCEL.md` for deployment steps and `vercel.json` for the build adapter.

If anything above is unclear or you'd like the file adjusted (more examples, PR checklist, or CI templates), tell me what you'd like added and I will update it.
