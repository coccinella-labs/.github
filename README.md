<p align="center">
  <img src="https://raw.githubusercontent.com/Coccinella-Labs/.github/main/.github/assets/thumbnail.png" alt=".github" width="100%">
</p>

organization defaults and git gui.

# .github

Organization-wide GitHub defaults and shared configuration, plus a small Git GUI app.

## Organization defaults

Files under `.github/` apply to every repository in the org:

- Workflows (`.github/workflows/`): CI, CLA check, auto-close PRs, lock merged PRs, org activity updater (refreshes `profile/README.md` every 30 minutes)
- Community health: issue templates, pull request template, `CODEOWNERS`, `dependabot.yml`, `settings.yml`
- `profile/README.md`: the org profile page, including a live org-activity feed

## Git GUI

A small Tkinter app (`main.py`) for common Git operations, with optional PostgreSQL logging.

```bash
make run        # create .venv, install, and launch the GUI
python run_tests.py   # bandit + pytest with coverage
python check_all.py   # ruff, bandit, and tests — run before committing
```

## Docs

See [`docs/`](docs/) for project status, coverage notes, and workflow overviews. Contributions: see [`CONTRIBUTING.md`](CONTRIBUTING.md).
