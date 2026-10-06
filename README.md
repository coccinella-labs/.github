<p align="center">
  <img src="https://raw.githubusercontent.com/Coccinella-Labs/.github/main/.github/assets/thumbnail.png" alt=".github" width="100%">
</p>

# .github

The `.github` repository serves two purposes: it houses organization-wide GitHub configuration and defaults that apply to all coccinella-labs repositories, and it includes a small Git GUI utility for common operations.

## Getting Started

The organization defaults in `.github/workflows/` and `.github/` are automatically applied to every public repository in the org. You don't need to do anything to enable them; they work out of the box for any new or existing repository.

If you want to use the Git GUI locally, clone this repository, then run `make run` to create a virtual environment, install dependencies, and launch the Tkinter interface. The GUI provides a visual way to stage, commit, and push changes, with optional PostgreSQL logging to track all operations.

## Architecture

The `.github` repository contains two components working in tandem. The first is organization-wide configuration under `.github/` that GitHub automatically applies to all public repositories: workflow definitions for CI pipelines, issue and pull request templates, code owner rules, and settings like branch protection and dependabot configuration. The second is a standalone Git GUI application in `main.py`, a Tkinter-based tool that simplifies common Git workflows for local development.

The organization defaults include automated workflows that run on every PR and push: a CI workflow that tests code on multiple platforms, a CLA (Contributor License Agreement) check that verifies contributor status, an auto-close workflow that closes inactive issues and PRs, a lock workflow that protects merged PRs from further changes, and an activity updater that runs every 30 minutes to refresh the organization profile page (`profile/README.md`) with a live activity feed showing recent commits and contributions across all org repositories.

## Organization Defaults

The `.github/workflows/` directory contains shared workflow definitions. Any repository that doesn't define its own workflow can inherit these org-level defaults. CI workflows handle automated testing on macOS, Linux, and other platforms. The CLA check validates that contributors have signed the Contributor License Agreement before merging. Auto-close and lock workflows manage stale issues and PRs to keep the backlog current. The activity updater is the only workflow that runs on a schedule (every 30 minutes) rather than on push/PR events, ensuring the org profile page always reflects recent activity.

Community health files like issue templates (`ISSUE_TEMPLATE/`), pull request template (`pull_request_template.md`), and `CODEOWNERS` are stored here and inherited by all repositories. `dependabot.yml` configures automated dependency updates and security scanning. `settings.yml` defines common repository settings like branch protection rules and default branch configuration. These files ensure consistency across the organization and reduce duplication in individual repositories.

## Git GUI

The Git GUI is a lightweight Tkinter application that provides a visual interface for staging, committing, and pushing changes. It's useful for team members who prefer a GUI over the command line, or for quick operations without typing long commands.

To launch it, run `make run` from the repository root. This target creates a Python virtual environment (`.venv`), installs dependencies from `pyproject.toml`, and starts the GUI. The GUI displays the current working directory's Git status, allows you to stage individual files, write commit messages, and push to the configured upstream branch. If PostgreSQL is available, operations can be logged to a database for auditing or team accountability.

The GUI is intentionally minimal. It covers the most common workflow: review changes, stage files, write a message, commit, and push. For advanced operations (rebasing, cherry-picking, resolving conflicts), use the CLI or GitHub web interface.

## Building and Testing

The repository includes a Makefile for common operations. `make run` launches the GUI (as described above). The tests directory contains unit and integration tests for the Git GUI and shared workflows. Run tests with `python run_tests.py`, which executes pytest with coverage reporting and uses bandit for security scanning.

Before committing, run `python check_all.py` to execute ruff (code formatting and linting), bandit (security checks), and pytest (unit tests). This is equivalent to running all quality checks in one go and helps catch issues early. The CI workflows in `.github/workflows/` run the same checks on every PR, so running them locally first ensures your changes will pass CI.

The repository also includes a `Dockerfile` and `docker-compose.yml` for containerized testing. Docker can be useful for testing the organization defaults in an isolated environment or for CI environments that run in containers. Build with `docker build .` and run with `docker-compose up` for a full stack.

## Configuration Files

`pyproject.toml` defines project metadata, dependencies (including dev dependencies like pytest and bandit), and configuration for tools like ruff and coverage. The `.pre-commit-config.yaml` file defines pre-commit hooks that automatically run code quality checks before each commit if you have pre-commit installed locally. `bump_version.py` is a utility script for incrementing version numbers across the organization in a consistent way.

The `signed.json` file contains organization-level settings exported from GitHub, useful for auditing or version control of org-wide settings. The `.gitignore` file ignores common artifacts like `.venv`, `__pycache__`, and `.coverage`.

## Docs

The `docs/` directory contains project status, coverage notes, and overviews of the workflow automation. These are internal documentation for maintainers and contributors to understand the purpose of each workflow and how the organization defaults are maintained. See `CONTRIBUTING.md` for guidelines on modifying the `.github` repository itself.

## Contributing

Changes to the `.github` repository affect all public repositories in the organization, so any modification should be reviewed carefully. Fork the repository, create a feature branch, make changes, run `python check_all.py` to verify tests and linting pass, and open a pull request. Describe which organization defaults you're modifying and why. After merging to main, the changes take effect automatically for all repositories on their next workflow run.

When adding a new shared workflow, place it in `.github/workflows/` and use a descriptive name like `ci.yml` or `security-scan.yml`. When modifying templates or community health files, test by adding a `.github/` directory to a test repository and verifying the changes apply correctly.

## Known Limitations

The organization defaults apply only to workflows and community health files; they do not automatically override repository-specific configurations. If a repository defines its own CI workflow, it will use that instead of inheriting the org default. Similarly, repository-specific issue templates override organization templates. This is by design, allowing repos to opt out of org defaults when necessary.

The activity updater runs every 30 minutes and depends on GitHub Actions, so there may be a delay between a commit and its appearance on the org profile page. The Git GUI requires Python 3.8+ and Tkinter; it's primarily designed for local development and is not production-grade. Advanced Git operations (rebasing, filtering history, complex merges) should use the CLI.

## Roadmap

Planned improvements include a web-based alternative to the Tkinter GUI for better cross-platform support, more sophisticated activity aggregation (filtering by repo, contributor, or time range), and optional Slack integration to notify the team of org-wide events. Better documentation of workflow customization per repository is also planned.

## Related Repositories

See Harper for the AI agent runtime, Vision for image analysis, HarperBot for PR code review automation, Core for GPU benchmarking, GPUComm-FS for artifact storage, GPUComm-Bot for CI automation, and ML for distributed training. All of these repositories inherit organization defaults from `.github`.

## License

MIT. See LICENSE file.

## Contact

Questions about organization configuration? Open an issue in this repository or see CONTRIBUTING.md for details.
