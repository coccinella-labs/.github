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
| 2026-09-27 03:35 UTC | @coccinella-labs-harper[bot] | created [a thread](https://github.com/coccinella-labs/harper/pull/920) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-27 03:35 UTC | @coccinella-labs-harper[bot] | labeled PR [#920](https://github.com/coccinella-labs/harper/pull/920) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-27 03:35 UTC | @coccinella-labs-harper[bot] | created branch `cargo-lock-update` | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-27 03:35 UTC | @coccinella-labs-harper[bot] | opened PR [#920](https://github.com/coccinella-labs/harper/pull/920) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-27 02:37 UTC | @coccinella-labs-bot[bot] | pushed ([diff](https://github.com/coccinella-labs/bot/compare/9e16991973da33dac3882ca0ada4652f166e55c4...35cf108e8af1021c4004da1a9753a5a19def383e)) | [coccinella-labs/bot](https://github.com/coccinella-labs/bot) |
| 2026-09-27 02:31 UTC | @github-actions[bot] | published a release nightly-190127cf631d8abf1666aa71a50ef0bcdc1d25f6-275.1 ([link](https://github.com/coccinella-labs/harper/releases/tag/nightly-190127cf631d8abf1666aa71a50ef0bcdc1d25f6-275.1)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-27 00:12 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/41fcb63782f94cc0a3bef06b9409c2f9470d622d...5b49de647689d76f9788dfbfabc422b605dfa838)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-27 00:12 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/05b0fbfdab7cc7a0fcc548df147f440369e45ffa...78b0ffa18db4ac98e956c5e96fd4b8e99f3cbe14)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-27 00:06 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/bf27265c825e0d04c3e50c61e8d98be696a3162e...1c23297fce103a1f791b52a33e9fa0a24db3da27)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-26 21:58 UTC | @github-actions[bot] | published a release nightly-20260926-2157-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20260926-2157-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-09-26 21:48 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/1923ead423affe23f575592ee7adbceb0f92acc0...05b0fbfdab7cc7a0fcc548df147f440369e45ffa)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-26 21:44 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/7613866deb4e5758b93797e6b25c96b94072874d...bf27265c825e0d04c3e50c61e8d98be696a3162e)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-26 18:55 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/3dba82ae5f9241c4801729844df909663afbe711...7613866deb4e5758b93797e6b25c96b94072874d)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-26 18:44 UTC | @github-actions[bot] | published a release harper-0.24.0 ([link](https://github.com/coccinella-labs/harper/releases/tag/harper-0.24.0)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-26 18:31 UTC | @coccinella-labs-harper[bot] | created [a thread](https://github.com/coccinella-labs/harper/pull/919) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-09-27T05:30:31.960Z • IST: 27/9/2026, 11:00:31 (11:00:31 am)_
