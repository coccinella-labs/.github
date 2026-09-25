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
| 2026-09-25 22:22 UTC | @github-actions[bot] | published a release nightly-20260925-2222-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20260925-2222-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-09-25 19:05 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/4348d8c142d9feb7ec27d0d9320f5ef396856f29...2a4ab98900098f62afe1c5ddbc3cd5134a9446ba)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 18:21 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/193819b03630bf530808ce8949d42f74c894e160...4348d8c142d9feb7ec27d0d9320f5ef396856f29)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 18:07 UTC | @bniladridas | created branch `main` | [coccinella-labs/tokensdk](https://github.com/coccinella-labs/tokensdk) |
| 2026-09-25 18:04 UTC | @bniladridas | deleted branch `rust` | [coccinella-labs/bniladridas-profile](https://github.com/coccinella-labs/bniladridas-profile) |
| 2026-09-25 18:04 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/bniladridas-profile/compare/58625451dbf988732098edd8f68db576d81866b8...c4b875a489fe8d518b2e9fa8e2ed75b4a08d46d3)) | [coccinella-labs/bniladridas-profile](https://github.com/coccinella-labs/bniladridas-profile) |
| 2026-09-25 18:03 UTC | @bniladridas | deleted branch `0.1.0` | [coccinella-labs/molplatform](https://github.com/coccinella-labs/molplatform) |
| 2026-09-25 18:03 UTC | @bniladridas | deleted branch `1.0.0` | [coccinella-labs/molplatform](https://github.com/coccinella-labs/molplatform) |
| 2026-09-25 18:03 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/molplatform/compare/b394aa7c3e5ef5217f77acd1d7a8486088e5ebea...b0943f28522b715ef9f52dce7ad43acec4c41aa6)) | [coccinella-labs/molplatform](https://github.com/coccinella-labs/molplatform) |
| 2026-09-25 18:02 UTC | @bniladridas | deleted branch `squashed` | [coccinella-labs/bniladridas-profile](https://github.com/coccinella-labs/bniladridas-profile) |
| 2026-09-25 17:57 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/05e7b4c3694dded5e8c0e3c56dca2e4e526a538c...84a52dacc6f7d189a1855fd47dae170c5c0adb20)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 17:57 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/.github/compare/2c525fc59b884c9f266e44107f816b68085ae376...05e7b4c3694dded5e8c0e3c56dca2e4e526a538c)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 17:53 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/palmshed-org/compare/85262c8354f20f135c97bf8c30c4100cb9d82608...ab442273132f57b98d5ce572b9c8709036f11caa)) | [coccinella-labs/palmshed-org](https://github.com/coccinella-labs/palmshed-org) |
| 2026-09-25 17:50 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/7fb9f729335c1c3af2877008d5c5b6c70b14aa66...2c525fc59b884c9f266e44107f816b68085ae376)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 17:49 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/.github/compare/c323e0249c114f36fcb91a46e79f6a62d7b7cabe...7fb9f729335c1c3af2877008d5c5b6c70b14aa66)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-09-25T22:35:20.438Z • IST: 26/9/2026, 04:05:20 (4:05:20 am) 🌙_
