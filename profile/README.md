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
| 2026-09-25 13:38 UTC | @bniladridas | deleted branch `docs/thumbnail-move` | [coccinella-labs/tokensdk](https://github.com/coccinella-labs/tokensdk) |
| 2026-09-25 13:38 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/tokensdk/compare/7cb921acef011b8e5223850808005c7d126fecb5...30d6b2fb63ab340b9fb1e23e695b4d48943028a9)) | [coccinella-labs/tokensdk](https://github.com/coccinella-labs/tokensdk) |
| 2026-09-25 13:38 UTC | @bniladridas | merged PR [#4](https://github.com/coccinella-labs/tokensdk/pull/4) | [coccinella-labs/tokensdk](https://github.com/coccinella-labs/tokensdk) |
| 2026-09-25 13:37 UTC | @github-actions[bot] | labeled PR [#12](https://github.com/coccinella-labs/mcporg/pull/12) (×2) | [coccinella-labs/mcporg](https://github.com/coccinella-labs/mcporg) |
| 2026-09-25 13:37 UTC | @github-actions[bot] | opened PR [#12](https://github.com/coccinella-labs/mcporg/pull/12) | [coccinella-labs/mcporg](https://github.com/coccinella-labs/mcporg) |
| 2026-09-25 13:37 UTC | @bniladridas | deleted branch `main-drop-stale-leftover` | [coccinella-labs/mcporg](https://github.com/coccinella-labs/mcporg) |
| 2026-09-25 13:37 UTC | @bniladridas | deleted branch `docs/stale-refs` | [coccinella-labs/tokensdk](https://github.com/coccinella-labs/tokensdk) |
| 2026-09-25 13:37 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/tokensdk/compare/d0140d8f981b1cb8905b77dffb391902683f4900...7cb921acef011b8e5223850808005c7d126fecb5)) | [coccinella-labs/tokensdk](https://github.com/coccinella-labs/tokensdk) |
| 2026-09-25 13:37 UTC | @bniladridas | merged PR [#5](https://github.com/coccinella-labs/tokensdk/pull/5) | [coccinella-labs/tokensdk](https://github.com/coccinella-labs/tokensdk) |
| 2026-09-25 13:37 UTC | @bniladridas | merged PR [#11](https://github.com/coccinella-labs/mcporg/pull/11) | [coccinella-labs/mcporg](https://github.com/coccinella-labs/mcporg) |
| 2026-09-25 13:36 UTC | @gpucomm-hq | PullRequestReviewEvent | [coccinella-labs/tokensdk](https://github.com/coccinella-labs/tokensdk) |
| 2026-09-25 13:35 UTC | @gpucomm-hq | PullRequestReviewEvent | [coccinella-labs/tokensdk](https://github.com/coccinella-labs/tokensdk) |
| 2026-09-25 13:35 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/rag/compare/bea78ab5bfab6f738c916c7749036319c7ed039f...e3e3f187c2422674a36f423eb8daecd6f46de1ce)) | [coccinella-labs/rag](https://github.com/coccinella-labs/rag) |
| 2026-09-25 13:35 UTC | @gpucomm-hq | PullRequestReviewEvent | [coccinella-labs/mcporg](https://github.com/coccinella-labs/mcporg) |
| 2026-09-25 13:31 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/e0fb6d49ebfb305efa9590ca65aaacc3cdae0e7c...8520b1ba6113cc7b3610d2fae786d9574b4b37f2)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-09-25T14:40:07.902Z • IST: 25/9/2026, 20:10:07 (8:10:07 pm) 🌙_
