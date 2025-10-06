# Repository audit — 2025-10-06

## Context
- **Branch:** `work`
- **Latest commit:** `ci: guard npm ci with lockfile check` (`1f01b3c9`)

## Application overview
- Next.js 14 App Router project with Tailwind CSS, TypeScript, and opinionated linting suitable for Vercel deployments.
- Landing page and shared layout under `src/app` provide initial RepoOps-focused messaging and styling.

## Tooling & configuration
- Node.js 20.x is required via the `engines` field and `.nvmrc` pinning for local workflows.
- `.npmrc` forces the public npm registry and disables inherited proxy settings, `npm audit`, and funding prompts.
- TypeScript configuration (`tsconfig.json`) and Next.js config (`next.config.ts`) are committed alongside Tailwind/PostCSS setup files.
- GitHub Actions workflow `ci` installs dependencies (preferring `npm ci`), then runs `npm run lint`, `npm run typecheck`, and `npm run build` on PRs and manual triggers.

## Dependencies & scripts
- Runtime dependencies: Next.js 14.2.3, React 18.3.1, React DOM 18.3.1.
- Dev dependencies include TypeScript 5.4.5, ESLint 8.57.0 with `eslint-config-next`, Tailwind CSS 3.4.3, PostCSS 8.4.35, Autoprefixer 10.4.17, and React/Node type packages.
- npm scripts cover development (`dev`), production build (`build`/`start`), linting (`lint`), and type checking (`typecheck`).

## Repository structure highlights
- `src/app` contains the App Router entry points (`layout.tsx`, `page.tsx`, global styles, and icon export).
- `public/` holds static assets (e.g., `favicon.svg`).
- Root-level documentation includes `README.md` onboarding instructions and `AGENTS.md` operational policies.

## Validation attempts
- `npm ci --no-audit --no-fund` failed with `E403 Forbidden` while fetching `@types/node`, indicating the sandbox cannot reach the npm registry. Without dependencies the lint, typecheck, and build scripts cannot run here.

## Recommended follow-up
1. Re-run `npm ci` from an environment with registry access to restore `node_modules`.
2. After dependencies install, execute `npm run lint`, `npm run typecheck`, and `npm run build` to confirm CI parity.
3. If registry access requires a proxy, replace the `proxy=null` values in `.npmrc` with valid proxy URLs or configure environment variables in CI/Vercel.
