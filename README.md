# skills-copilot-codespaces-vscode

This repository was empty and a minimal Node.js scaffold (hello CLI) was added by an AI agent. The scaffold includes:

- `src/` with a small greet library and CLI entrypoint
- `tests/` with Jest tests
- `package.json` with scripts for `start` and `test`
- `.github/workflows/ci.yml` to run tests on push/PR

How to try it locally:

1. Install dependencies:

```powershell
npm install
```

2. Run tests:

```powershell
npm test
```

3. Run the CLI:

```powershell
node src/cli.js Alice
# or after `npm link` you can run `hello Bob`
```

If you want a different language stack or a different small feature to implement, tell the maintainer and the AI agent will scaffold accordingly.
# skills-copilot-codespaces-vscode
