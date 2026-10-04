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
| 2026-10-04 08:38 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/.github/compare/ecadbe4a5e25ff0a56990bfb420c02394d45dc8c...f90cf188f4c662d23e013addcec6dc0a29404a5f)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-04 08:28 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/5c3224d1cc5ae774aabe5537edbdec7164220879...ecadbe4a5e25ff0a56990bfb420c02394d45dc8c)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-04 08:28 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/.github/compare/37739b34a28079c749c0e154b62b902a01091b4f...5c3224d1cc5ae774aabe5537edbdec7164220879)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-04 08:24 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/3ebee4eb931b71ec710c34ad814fa008f437070d...d436d0871d1cab3baaf636e964463b154b47a6f3)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-04 04:32 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harper/compare/ae801fab8ccffd64106a4d5e105a89ff8ecdb939...e0db453860fbcc0fc435af9b087a2f4a0f619aea)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-04 04:32 UTC | @coccinella-labs-harper[bot] | merged PR [#923](https://github.com/coccinella-labs/harper/pull/923) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-04 04:32 UTC | @bniladridas | PullRequestReviewEvent | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-04 04:12 UTC | @coccinella-labs-harper[bot] | labeled PR [#923](https://github.com/coccinella-labs/harper/pull/923) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-04 04:12 UTC | @coccinella-labs-harper[bot] | created [a thread](https://github.com/coccinella-labs/harper/pull/923) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-04 04:12 UTC | @coccinella-labs-harper[bot] | created [a thread](https://github.com/coccinella-labs/harper/pull/923) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-04 04:12 UTC | @coccinella-labs-harper[bot] | created branch `cargo-lock-update` | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-04 04:12 UTC | @coccinella-labs-harper[bot] | opened PR [#923](https://github.com/coccinella-labs/harper/pull/923) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-04 03:29 UTC | @coccinella-labs-bot[bot] | pushed ([diff](https://github.com/coccinella-labs/bot/compare/1a7c3ab898f9e1e8dbae52b1496188720715ab4b...2df51a5d276e793beb399674ff07da21f769ea33)) | [coccinella-labs/bot](https://github.com/coccinella-labs/bot) |
| 2026-10-04 03:15 UTC | @github-actions[bot] | published a release nightly-99ad21e2b4c5db91c44b2cee07ef9bd199bef9f3-282.1 ([link](https://github.com/coccinella-labs/harper/releases/tag/nightly-99ad21e2b4c5db91c44b2cee07ef9bd199bef9f3-282.1)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-04 02:22 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/0214c95ca125047c41daa962fa98298c765dcffa...05ebd38ca2d7567742fc325b2675939378dee417)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-04T08:39:06.169Z • IST: 4/10/2026, 14:09:06 (2:09:06 pm)_
