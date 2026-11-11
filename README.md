<p align="center">
  <img src="https://raw.githubusercontent.com/coccinella-labs/.github/main/.github/assets/thumbnail.png" alt=".github" width="100%">
</p>

# .github

Organization-wide GitHub defaults and shared configuration for coccinella-labs, the source of the [organization profile](https://github.com/coccinella-labs), and a small Git GUI app.

Changes here can affect every repository in the organization, so review them with that in mind. Background: [Organization defaults and how to change them](https://github.com/coccinella-labs/.github/discussions/42).

## What is in this repository

| Path | What it is |
| --- | --- |
| `profile/README.md` | The organization profile page. Part of it is generated, see below. |
| `scripts/update-org-activity.mjs` | Regenerates the activity table and the "Last updated" date in the profile. |
| `.github/workflows/` | Workflows for this repository: CI, CLA check, auto-close PRs, lock merged PRs, and the org activity updater. |
| `.github/` | Community health files: issue and pull request templates, `CODEOWNERS`, `dependabot.yml`, `settings.yml`. |
| `main.py` | The Git GUI (Tkinter). |
| `tests/`, `run_tests.py`, `check_all.py` | Tests and quality checks for the GUI. |
| `docs/` | Project status, coverage notes, and workflow overviews. |
| `Makefile`, `Dockerfile`, `docker-compose.yml` | Local run and container setup. |
| `CONTRIBUTING.md`, `LICENSE` | Contribution guide and MIT license. |

## Organization profile

`profile/README.md` is hand-written except for two generated parts. Each sits between a pair of HTML comment markers, and the markers must stay in place:

| Markers | Contents |
| --- | --- |
| `<!-- ORG_ACTIVITY:START -->` ... `<!-- ORG_ACTIVITY:END -->` | A table of the 15 most recent org events. |
| `<!-- LAST_UPDATED:START -->` ... `<!-- LAST_UPDATED:END -->` | The "Last updated" date (UTC, date only). |

The **Update Org Activity** workflow runs `scripts/update-org-activity.mjs` every 30 minutes, on every push to `main`, and on manual dispatch. It commits only when the file changed, as `chore(profile): update org activity`. Edit the text around the markers freely. Do not edit what is between them, because the next run overwrites it.

Pinned discussions are set in GitHub's web UI and are not stored in git. The intended set is recorded in a comment at the bottom of `profile/README.md`.

## Git GUI

A small Tkinter app for common Git operations, with optional PostgreSQL logging. It requires Python 3.13 or newer.

```
make run              # create .venv, install, and launch the GUI
python run_tests.py   # bandit + pytest with coverage
python check_all.py   # ruff, bandit, and tests; run before committing
```

PostgreSQL logging needs the `postgres` extra (`psycopg2-binary`). Installing the GUI from PyPI with `pip install git-gui` does not work; see [Running the Git GUI locally](https://github.com/coccinella-labs/.github/discussions/29).

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md). In short: branch, make the change, run `python check_all.py`, and open a pull request that says which defaults you are touching and why.

## License

MIT. See [`LICENSE`](LICENSE).
