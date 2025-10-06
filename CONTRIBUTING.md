# Contributing to RepoOps-v4-Vercel

This project uses guarded code imput to ensure high quality, security, and automation.

Please read this document before constributing or submitting a PR.

## Process

\n1. Fork and pull latest main
 2. Create a feature/fix/security branch
 3. Make your patch self-contained and reuseable
 4. Submit a new PR with description, context, reason
 5. Start the PR title with apropriate tag: `audit/` | `vercel/`
 6. Invoke ci: verify green workflow
 7. Wait for maintainer review or meerge

## Guidelines

- Run lint, typecheck, test
- Self-contained commits
- Secrets must not be committed to git

- Features should be scoped without breaking any other teams

- Stay on-topic, respect review boundary