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
| 2026-09-28 03:36 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/238a9ffaf4c0640e64b5c6b159f6e56d717eaad0...b70926800dfca6ec815f291a483a63feb01edb98)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-28 03:36 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/3c5e2febf62a22fc0d147d226278317ab0946db4...37eb8b5b4f3b8b5b3c4c31b42fea4d38b7e59f00)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-28 02:36 UTC | @github-actions[bot] | published a release nightly-99ad21e2b4c5db91c44b2cee07ef9bd199bef9f3-276.1 ([link](https://github.com/coccinella-labs/harper/releases/tag/nightly-99ad21e2b4c5db91c44b2cee07ef9bd199bef9f3-276.1)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-28 01:02 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/7db546322289c6c3409daeb2c254f73dc7520b53...4890e23cd948a58aa438a072a827bdb8d293b903)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-27 23:37 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/a2e8100876dba243ec0ac817d5c02d457d5acdb6...238a9ffaf4c0640e64b5c6b159f6e56d717eaad0)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-27 23:37 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/68c76c8b986f4aa203113872a3a372ef5933784a...3c5e2febf62a22fc0d147d226278317ab0946db4)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-27 22:27 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/6486d2cfd58e44110856598202a772569c0c5370...7db546322289c6c3409daeb2c254f73dc7520b53)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-27 22:13 UTC | @github-actions[bot] | published a release nightly-20260927-2213-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20260927-2213-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-09-27 20:52 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/5201dd7dbdb5c4d240aa91f60b013e0a20edf49d...a2e8100876dba243ec0ac817d5c02d457d5acdb6)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-27 19:27 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/3283de16344b6a8f0e8fc4a92e074ce694347202...6486d2cfd58e44110856598202a772569c0c5370)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-27 17:28 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/7cb945c3aacc87ea972e77f09f70c156441e6a4e...68c76c8b986f4aa203113872a3a372ef5933784a)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-27 15:43 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/d8b43e8e68606d4c84d2866d3a52acd516212bd3...3283de16344b6a8f0e8fc4a92e074ce694347202)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-27 12:43 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/c27f328b26f1c85794dbb6e7bbf6ea48e8e953eb...5201dd7dbdb5c4d240aa91f60b013e0a20edf49d)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-27 12:43 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/6b0adba8bdedb9628b4304447b04d7ec45345990...7cb945c3aacc87ea972e77f09f70c156441e6a4e)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-27 11:13 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/c7f3508ebc316749b80e9b2087ad8bc7f1eb89c2...d8b43e8e68606d4c84d2866d3a52acd516212bd3)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-09-28T07:13:38.742Z • IST: 28/9/2026, 12:43:38 (12:43:38 pm)_
