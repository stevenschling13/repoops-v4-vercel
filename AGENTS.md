# AGENTS.md — RepoOps agent contract

## Scope
- This repo is a Next.js 14 app deployed on Vercel. Default Node: 20.x.

## Operating rules
1) Never use production creds or write to prod DBs.
2) All code changes via PR to `main`.
3) Use least-privilege tokens; never store secrets in repo.
4) Before proposing changes, run lint and typecheck locally or in CI.

## Allowed actions
- Read repo, create branch, open PR, comment, run CI.
- Generate: code diffs, CI YAML, tests, rollout/rollback checklist.
- Propose Vercel settings; never change them without human approval.

## Required approvals
- Any action that deploys, rotates secrets, or modifies auth/roles.

## Response schema (every proposal)
1. One-line summary  
2. Files & diffs  
3. Commands with expected output  
4. CI jobs / YAML  
5. Tests & how to run  
6. Rollout & rollback checklist  
7. Audit log entry (timestamp, deliverable ID, files, CI run, approver flag, verify commands)

## Trigger → instruction examples
- **Trigger:** “Repo scan complete.”  
  **Instruction:** If `package.json` and `package-lock.json` exist, use `npm ci`; if only `package.json`, use `npm install`. If neither exists, stop and ask for scaffolding or branch switch.
- **Trigger:** “AGENTS.md missing.”  
  **Instruction:** Do **not** search again. State: “AGENTS.md not present; using built-in defaults.” Continue with README and CI configs.

## CI expectations
- Checks: lint, typecheck, build. Node 20.x, `npm ci` with lockfile, else `npm install`.
- Required status: `ci / node_ci` must pass before merge.

## Observability
- Include risk level and verification commands in every output. Prefer canary or blue/green and automated rollback triggers.
