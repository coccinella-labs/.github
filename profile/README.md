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
| 2026-09-25 11:21 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/coccinella-labs.github.io/compare/4ce5c34b5c22af9a3b2e7c3f15c60f4dce17d991...6d62cf50dc96b86437c852ca28d79533b42bcf06)) | [coccinella-labs/coccinella-labs.github.io](https://github.com/coccinella-labs/coccinella-labs.github.io) |
| 2026-09-25 11:19 UTC | @bniladridas | published a release v2.0.0 ([link](https://github.com/coccinella-labs/coccinella-labs.github.io/releases/tag/v2.0.0)) | [coccinella-labs/coccinella-labs.github.io](https://github.com/coccinella-labs/coccinella-labs.github.io) |
| 2026-09-25 11:07 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/.github/compare/5efc02adfee2f78508f1a725837027610f1bbe1f...6424ba894b3510f7d15608f3b700819ce9a1205c)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 11:04 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/adb383c879371d52eb0422732ad32523bf10e940...5efc02adfee2f78508f1a725837027610f1bbe1f)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 11:04 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/.github/compare/08d4e37e5f5b004cd23f3ecafc0572b91faea30f...adb383c879371d52eb0422732ad32523bf10e940)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 09:47 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/config/compare/e8d319aa959906d24b0cdd516400a859ca748ac1...fffaab6b517d33a6b726cde3026095eedcb2785b)) | [coccinella-labs/config](https://github.com/coccinella-labs/config) |
| 2026-09-25 09:46 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/cli/compare/1ee4bffde49c0ba9271ea6901f728240bb2c4ba1...e039381af723e1e02ff1bb92f8c305896efa2596)) | [coccinella-labs/cli](https://github.com/coccinella-labs/cli) |
| 2026-09-25 09:46 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/config/compare/f592acd378e87da256c434f1861afa18a143f7d1...e8d319aa959906d24b0cdd516400a859ca748ac1)) | [coccinella-labs/config](https://github.com/coccinella-labs/config) |
| 2026-09-25 09:45 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/config/compare/a12c31f09e8fb234a633353e01a5314c877962fa...f592acd378e87da256c434f1861afa18a143f7d1)) | [coccinella-labs/config](https://github.com/coccinella-labs/config) |
| 2026-09-25 09:43 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/cli/compare/1dd271053053c222dadce67382fde1329d066756...c5a3b4244954731e8367f26c5f92a271cc67a373)) | [coccinella-labs/cli](https://github.com/coccinella-labs/cli) |
| 2026-09-25 09:16 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/11e523d69c84c640d41652b85f2a779a93053443...08d4e37e5f5b004cd23f3ecafc0572b91faea30f)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 08:57 UTC | @github-actions[bot] | published a release nightly-20260925 ([link](https://github.com/coccinella-labs/diff-mac/releases/tag/nightly-20260925)) | [coccinella-labs/diff-mac](https://github.com/coccinella-labs/diff-mac) |
| 2026-09-25 05:55 UTC | @dependabot[bot] | pushed ([diff](https://github.com/coccinella-labs/harper/compare/8585ae8f0326a15a7cc72c4a9aaa45837ab157ca...271c8a783136cae1f6c8b757d23a087ad4815700)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-25 05:46 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/d2b3d60bcfaf85500d4cfb458d8ff3ddcf30da9e...7d027d20aa4670df9ea13721eca1ba75c547e5bf)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-25 03:32 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/5dd2a447aadb519cb78927b9924e08aba2933b90...11e523d69c84c640d41652b85f2a779a93053443)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-09-25T11:24:08.330Z • IST: 25/9/2026, 16:54:08 (4:54:08 pm)_
