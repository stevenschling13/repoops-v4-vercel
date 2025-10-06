# RepoOps V4 – Vercel Ready Starter

This repository ships a production-ready Next.js 14 starter wired for Vercel. It bundles:

- **TypeScript + strict linting** powered by the Next.js `core-web-vitals` config.
- **Tailwind CSS** for fast UI composition and sensible dark theme defaults.
- **GitHub Actions CI** that installs dependencies, lints, and builds on every pull request.

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Visit http://localhost:3000 to verify the landing page renders.

> **Note**
> If you are running in a restricted environment without npm registry access, installation may fail with `E403`. Run the
> commands locally or in CI where the registry is reachable.

## Available scripts

- `npm run dev` – start the local development server.
- `npm run build` – create an optimized production build.
- `npm run start` – serve the production build locally.
- `npm run lint` – run ESLint using the Next.js configuration.

## Deployment

Push your feature branch to GitHub and open a pull request. The included `ci` workflow installs dependencies, runs
`npm run lint`, and `npm run build` to validate changes. Merge to `main` to trigger the Vercel production deployment (or
promote a preview). Configure secrets or environment variables directly within Vercel for secure runtime access.
