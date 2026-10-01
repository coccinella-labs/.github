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
| 2026-10-01 04:21 UTC | @dependabot[bot] | created [a thread](https://github.com/coccinella-labs/gh-tag/pull/8) | [coccinella-labs/gh-tag](https://github.com/coccinella-labs/gh-tag) |
| 2026-10-01 04:21 UTC | @dependabot[bot] | labeled PR [#9](https://github.com/coccinella-labs/gh-tag/pull/9) (×4) | [coccinella-labs/gh-tag](https://github.com/coccinella-labs/gh-tag) |
| 2026-10-01 04:21 UTC | @dependabot[bot] | opened PR [#9](https://github.com/coccinella-labs/gh-tag/pull/9) | [coccinella-labs/gh-tag](https://github.com/coccinella-labs/gh-tag) |
| 2026-10-01 04:21 UTC | @dependabot[bot] | created branch `dependabot/npm_and_yarn/types/node-26.6.3` | [coccinella-labs/gh-tag](https://github.com/coccinella-labs/gh-tag) |
| 2026-10-01 04:06 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/944ec3bb92e2d02f51c0e306b675d5593337d04d...923430799807998ab7b8191b92a41c05436e1b66)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-01 02:56 UTC | @github-actions[bot] | published a release nightly-99ad21e2b4c5db91c44b2cee07ef9bd199bef9f3-279.1 ([link](https://github.com/coccinella-labs/harper/releases/tag/nightly-99ad21e2b4c5db91c44b2cee07ef9bd199bef9f3-279.1)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-01 00:04 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/1877486c46afc2837f7b6688e11e241ebe1a96dc...1a09c55349bd3d604513b5e7658e83cdfc88f987)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-30 23:26 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/c6f5d9668f65d23283635ae4da21943233f81d0d...7b83642ebed045c53ec2cf9c9ae246f859e6ec68)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-30 23:01 UTC | @github-actions[bot] | published a release nightly-20260930-2301-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20260930-2301-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-09-30 20:27 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/993aa05677b99149bd6283d2264d80f4819490c5...1877486c46afc2837f7b6688e11e241ebe1a96dc)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-30 15:31 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/d5ce022be8b97fcfa3df1a7619816c1e9d028f06...993aa05677b99149bd6283d2264d80f4819490c5)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-30 08:48 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/64b10e0566f180c1b4012bf32e632f7619837e2b...d5ce022be8b97fcfa3df1a7619816c1e9d028f06)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-30 07:57 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/a6c08f53020109d794dbdc47f5a716ee587fda01...5e83dcd2149d287ab4afb1419a3dbdd0881ba60b)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-30 07:56 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/27fa1e8154db2a5fad78319985192ffbfcdeda83...8a293c9eacb917b142ceb9ed0a3653bd6c856f1d)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-30 03:05 UTC | @coccinella-labs-bot[bot] | pushed ([diff](https://github.com/coccinella-labs/bot/compare/0dfcb9e61271087ce1fc2731bc216dd167f7d674...24a0ac155a9ee18863bee754f256ebf82997467a)) | [coccinella-labs/bot](https://github.com/coccinella-labs/bot) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-01T06:17:15.813Z • IST: 1/10/2026, 11:47:15 (11:47:15 am)_
