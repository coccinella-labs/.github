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
| 2026-09-26 14:06 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/09a0f40e2e20361844f2918a802c8a3600e770ec...c8429d88e22b98ac079d7cdcca75b6612e238488)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-26 14:05 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/d2f4562cab049ee60a4b5c095857dac114dc8154...b81a2fdd6b654221e2bd6ac770b38fbc7851cc10)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-26 14:00 UTC | @coccinella-labs-harper[bot] | created [a thread](https://github.com/coccinella-labs/harper/pull/918) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-26 13:55 UTC | @coccinella-labs-harper[bot] | labeled PR [#918](https://github.com/coccinella-labs/harper/pull/918) (×6) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-26 13:46 UTC | @github-actions[bot] | published a release harper-sandbox-0.3.3 ([link](https://github.com/coccinella-labs/harper/releases/tag/harper-sandbox-0.3.3)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-26 13:46 UTC | @github-actions[bot] | published a release harper-mcp-server-0.1.7 ([link](https://github.com/coccinella-labs/harper/releases/tag/harper-mcp-server-0.1.7)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-26 13:46 UTC | @github-actions[bot] | published a release harper-firmware-0.1.4 ([link](https://github.com/coccinella-labs/harper/releases/tag/harper-firmware-0.1.4)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-26 13:46 UTC | @github-actions[bot] | published a release harper-core-0.23.0 ([link](https://github.com/coccinella-labs/harper/releases/tag/harper-core-0.23.0)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-26 13:46 UTC | @github-actions[bot] | published a release harper-ui-0.22.3 ([link](https://github.com/coccinella-labs/harper/releases/tag/harper-ui-0.22.3)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-26 13:46 UTC | @github-actions[bot] | published a release harper-workspace-0.24.0 ([link](https://github.com/coccinella-labs/harper/releases/tag/harper-workspace-0.24.0)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-26 13:46 UTC | @coccinella-labs-harper[bot] | opened PR [#918](https://github.com/coccinella-labs/harper/pull/918) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-26 13:46 UTC | @github-actions[bot] | created branch `release-harper-workspace-0.25.0-harper-core-0.24.…` | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-26 13:43 UTC | @github-actions[bot] | published a release harper-0.23.0 ([link](https://github.com/coccinella-labs/harper/releases/tag/harper-0.23.0)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-26 13:33 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harper/compare/d97654e74d43a53f9c1174dc9a041349fe1c4e90...e5b8bb77d7f2df6c229ecedc31bd30ad8ae0ec7c)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-26 13:25 UTC | @coccinella-labs-harper[bot] | labeled issue [#917: \[packaging\] both Homebrew formula surfaces are behind; th…](https://github.com/coccinella-labs/harper/issues/917) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-09-26T15:34:45.140Z • IST: 26/9/2026, 21:04:45 (9:04:45 pm) 🌙_
