<p align="center">
  <img src="https://raw.githubusercontent.com/coccinella-labs/.github/main/profile/logo.png" alt="Coccinella Labs" width="600">
</p>

Hi there

coccinella-labs builds small developer tools and the systems behind them: agent runtimes, GPU and machine learning compute, runtimes and developer tooling, and the automation that ships it all. All work is public.

The organization is organized into four systems, and the catalog at [coccinella-labs.github.io](https://coccinella-labs.github.io) lists every project with its language, type, license, and install command.

## Agent infrastructure

Harnesses, runtimes, and bots that plan work, execute it, and ship results.

- [harper](https://github.com/coccinella-labs/harper) - Rust agent runtime with a TUI, an HTTP API, and a sandbox.
- [agent-sdk](https://github.com/coccinella-labs/agent-sdk) - Reusable agent runtime extracted from Harper.
- [agentware](https://github.com/coccinella-labs/agentware) - AI-assisted coding tools and developer workflows.
- [harperbot](https://github.com/coccinella-labs/harperbot) - GitHub App bot for automated code review.
- [swe-agent](https://github.com/coccinella-labs/swe-agent) - Software engineering agent for this organization.

## GPU and ML compute

Apple Silicon kernels, Metal runtimes, and inference for local and serverless machine learning.

- [core](https://github.com/coccinella-labs/core) - Metal-based GPU compute runtime for Apple Silicon.
- [kernels](https://github.com/coccinella-labs/kernels) - Metal compute kernels written in Swift.
- [gpucomm-fs](https://github.com/coccinella-labs/gpucomm-fs) - Binary-aware artifact store for GPU artifacts, datasets, and weights.
- [gpucomm-bot](https://github.com/coccinella-labs/gpucomm-bot) - GPU-aware GitHub App and CI automation.
- [bitinfer](https://github.com/coccinella-labs/bitinfer) - Faster model inference on Apple Silicon.
- [ml](https://github.com/coccinella-labs/ml) - Distributed machine learning framework.
- [mlapi](https://github.com/coccinella-labs/mlapi) - FastAPI service for model inference.
- [benchmark](https://github.com/coccinella-labs/benchmark) - Compares Whisper and Wav2Vec2 transcription quality.

## Runtimes and developer tooling

CLI foundations, runtimes, and code tools the rest of the collection builds on.

- [cli](https://github.com/coccinella-labs/cli) - GitHub CLI extension that reads the repo list dynamically.
- [hub](https://github.com/coccinella-labs/hub) - Central hub connecting all repos.
- [go-kit](https://github.com/coccinella-labs/go-kit) - Go CLI for working with Git hosting platforms.
- [harpertoken](https://github.com/coccinella-labs/harpertoken) - Code quality and style checker for many languages.
- [vertex](https://github.com/coccinella-labs/vertex) - Understand software before you change it.
- [omnitype](https://github.com/coccinella-labs/omnitype) - Experimental type checker for Python and dynamic languages.
- [dotenv-keep](https://github.com/coccinella-labs/dotenv-keep) - Keep and manage .env files safely.

## Build and release automation

Versioning, tagging, CI checks, and delivery that ship every other project.

- [bump](https://github.com/coccinella-labs/bump) - Automates version bumps after merged pull requests.
- [release-assets](https://github.com/coccinella-labs/release-assets) - Builds signed release assets.
- [buildanywhere](https://github.com/coccinella-labs/buildanywhere) - One CI script set for Actions, GitLab, and CircleCI.
- [bot](https://github.com/coccinella-labs/bot) - GitHub Actions workflows that manage repositories across this org.
- [auto-label](https://github.com/coccinella-labs/auto-label) - Labels pull requests and issues from commits and files.

## Apps and utilities

Standalone tools outside the four systems.

- [browser](https://github.com/coccinella-labs/browser) - Flutter desktop browser for macOS, Windows, and Linux.
- [clipb](https://github.com/coccinella-labs/clipb) - A lightweight clipboard utility for developers.
- [license](https://github.com/coccinella-labs/license) - Shared legal and license documents for the organization.

## Org activity

<!-- ORG_ACTIVITY:START -->
| Date | Actor | Activity | Repo |
| --- | --- | --- | --- |
| 2026-10-04 19:10 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/6a34413849e2a974a4ad3400f24e72c52786c58d...6bb34bfb256c90f8f8d07ab5e244947b3e6b473d)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-04 17:14 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/9e0086873b36d3650be173e492ecc7b35c04cc7b...ef0b353688c1bbac83da3e92b9cfad2c48bc34e6)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-04 15:08 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/ccd195bce0252f2619885148b9f877744df4f827...6a34413849e2a974a4ad3400f24e72c52786c58d)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-04 12:40 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/dcd4826109506f8e33a9ab12c67c95f17e759aca...9e0086873b36d3650be173e492ecc7b35c04cc7b)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-04 10:43 UTC | @dependabot[bot] | deleted branch `dependabot/pip/torch-2.14.0` | [coccinella-labs/mlapi](https://github.com/coccinella-labs/mlapi) |
| 2026-10-04 10:43 UTC | @dependabot[bot] | created [a thread](https://github.com/coccinella-labs/mlapi/pull/108) | [coccinella-labs/mlapi](https://github.com/coccinella-labs/mlapi) |
| 2026-10-04 10:43 UTC | @dependabot[bot] | deleted branch `dependabot/pip/fastapi-0.141.1` | [coccinella-labs/mlapi](https://github.com/coccinella-labs/mlapi) |
| 2026-10-04 10:42 UTC | @dependabot[bot] | created [a thread](https://github.com/coccinella-labs/mlapi/pull/95) | [coccinella-labs/mlapi](https://github.com/coccinella-labs/mlapi) |
| 2026-10-04 10:42 UTC | @dependabot[bot] | labeled PR [#122](https://github.com/coccinella-labs/mlapi/pull/122) (×2) | [coccinella-labs/mlapi](https://github.com/coccinella-labs/mlapi) |
| 2026-10-04 10:42 UTC | @dependabot[bot] | opened PR [#122](https://github.com/coccinella-labs/mlapi/pull/122) | [coccinella-labs/mlapi](https://github.com/coccinella-labs/mlapi) |
| 2026-10-04 10:42 UTC | @dependabot[bot] | labeled PR [#121](https://github.com/coccinella-labs/mlapi/pull/121) (×2) | [coccinella-labs/mlapi](https://github.com/coccinella-labs/mlapi) |
| 2026-10-04 10:42 UTC | @dependabot[bot] | opened PR [#121](https://github.com/coccinella-labs/mlapi/pull/121) | [coccinella-labs/mlapi](https://github.com/coccinella-labs/mlapi) |
| 2026-10-04 10:42 UTC | @dependabot[bot] | created branch `dependabot/pip/fastapi-0.142.2` | [coccinella-labs/mlapi](https://github.com/coccinella-labs/mlapi) |
| 2026-10-04 10:42 UTC | @dependabot[bot] | created [a thread](https://github.com/coccinella-labs/mlapi/pull/114) | [coccinella-labs/mlapi](https://github.com/coccinella-labs/mlapi) |
| 2026-10-04 10:42 UTC | @dependabot[bot] | labeled PR [#120](https://github.com/coccinella-labs/mlapi/pull/120) (×4) | [coccinella-labs/mlapi](https://github.com/coccinella-labs/mlapi) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-04T20:19:42.014Z • IST: 5/10/2026, 01:49:42 (1:49:42 am) 🌙_
