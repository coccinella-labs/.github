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
| 2026-09-26 03:29 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/a8b3f1d16f52791d0cf5cb1c99964233192072e8...f0e2552725f655c5b9cff8715fc4f4d2e38eecfb)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-26 03:28 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/03ed953fe94fe9ff02c7954285537bc8ca63e9e8...ac9f24b8b5634b6f26530cb4d356358b33e19117)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-26 02:38 UTC | @coccinella-labs-bot[bot] | pushed ([diff](https://github.com/coccinella-labs/bot/compare/e81a2b769aa8001b6687171282c46318a36e49db...9e16991973da33dac3882ca0ada4652f166e55c4)) | [coccinella-labs/bot](https://github.com/coccinella-labs/bot) |
| 2026-09-26 01:07 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/3ae72048584222f01b2fc0c4f3da036d80ea6f12...b74a4dfb07b17571c25a3b04a2d694f221d6e27e)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 23:47 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/f326d3f68935cf6da4cefca85729f2f571087f6a...a8b3f1d16f52791d0cf5cb1c99964233192072e8)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-25 23:47 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/ea452facbba285ff80b4e4a87c78feeca8e5ba67...03ed953fe94fe9ff02c7954285537bc8ca63e9e8)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-25 22:35 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/2a4ab98900098f62afe1c5ddbc3cd5134a9446ba...3ae72048584222f01b2fc0c4f3da036d80ea6f12)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 22:22 UTC | @github-actions[bot] | published a release nightly-20260925-2222-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20260925-2222-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-09-25 20:14 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/d155f8e62b52261ee6cb1ae901b4b089796315e6...f326d3f68935cf6da4cefca85729f2f571087f6a)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-25 20:13 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/fa58c568beea731c1a0959064b678d14176731b9...ea452facbba285ff80b4e4a87c78feeca8e5ba67)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-25 19:05 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/4348d8c142d9feb7ec27d0d9320f5ef396856f29...2a4ab98900098f62afe1c5ddbc3cd5134a9446ba)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 18:21 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/193819b03630bf530808ce8949d42f74c894e160...4348d8c142d9feb7ec27d0d9320f5ef396856f29)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 18:21 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/.github/compare/84a52dacc6f7d189a1855fd47dae170c5c0adb20...193819b03630bf530808ce8949d42f74c894e160)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 18:10 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/bniladridas-profile/compare/c4b875a489fe8d518b2e9fa8e2ed75b4a08d46d3...f5357a36bb007a62d4577837313957c2731d6f03)) | [coccinella-labs/bniladridas-profile](https://github.com/coccinella-labs/bniladridas-profile) |
| 2026-09-25 18:07 UTC | @bniladridas | created branch `main` | [coccinella-labs/tokensdk](https://github.com/coccinella-labs/tokensdk) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-09-26T06:19:29.177Z • IST: 26/9/2026, 11:49:29 (11:49:29 am)_
