## Purpose

This repository currently contains very little code (only `README.md`). This file tells AI coding agents how to get started, what to look for, and which clarifying questions to ask before making changes.

## First steps (must do)

1. Open and read `README.md` to capture the stated project goal. If it's empty or minimal, ask the repository owner for the intended project purpose.
2. Run a repository-wide search for key languages, build files, and CI (look for `package.json`, `pyproject.toml`, `requirements.txt`, `go.mod`, `Dockerfile`, `.github/workflows/*`). Report back what you find.
3. Do NOT push or create large scaffolding without an explicit confirmation from the owner. This repo appears to be a template or an empty starter—confirm the desired stack first.

## Questions to ask the maintainer (priority)

- What language/runtime should this project use (Node/Python/.NET/etc)?
- Is there an existing CI/CD workflow you expect (GitHub Actions, Azure Pipelines)?
- Do you want me to scaffold a minimal project (e.g., `src/`, `tests/`, `package.json` or `pyproject.toml`)? If yes, which stack and test framework?
- Preferred branch and commit naming conventions for PRs?

## When making small, safe changes

- If asked to make a small change (typo, README improvement, tiny bugfix), create a single focused commit and open a PR. Keep changes minimal and clearly documented in the PR description.
- Add or update `README.md` to document any new project assumptions you introduce.

## Scaffolding guidance (only after approval)

If the owner approves scaffolding, prefer these minimal conventions:

- Language layout: add a top-level `src/` directory for source, and `tests/` for tests.
- CI: add `.github/workflows/ci.yml` that installs dependencies and runs tests.
- Metadata: add `LICENSE`, a minimal `README.md` update, and a `CHANGELOG.md` if introducing project structure.

Example small scaffold choices (ask before creating):

- Node.js: `package.json`, `src/index.js`, `tests/*.test.js` using Jest.
- Python: `pyproject.toml` or `requirements.txt`, `src/`, `tests/` using pytest.

## Commit & PR checklist

- Run any available linters or tests before committing. If none exist, run basic sanity checks for the chosen stack.
- Keep PRs scoped to a single purpose. Include in the PR description: the intent, files changed, and commands to run locally.

## Safety & secrets

- Never add credentials, tokens, or secrets to the repository. If a secret is required for CI, ask the owner to provision GitHub Secrets.

## What I checked in this repo

- Found only `README.md` at the repository root. No language-specific manifests or CI workflows were discovered.

## Next steps for you

Tell me which language/runtime and minimal features you'd like (for example: simple CLI, HTTP API, or library). I will propose a tiny scaffold and a short checklist of commands to run locally for verification.

---

If any part of this is unclear or you'd like additional, opinionated defaults (for example: prefer TypeScript over JavaScript), tell me which choices to make and I'll update the scaffold and this guidance.
