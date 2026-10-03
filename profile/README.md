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
| 2026-10-03 02:59 UTC | @coccinella-labs-bot[bot] | pushed ([diff](https://github.com/coccinella-labs/bot/compare/757f38f7e03a3cf5d44a034614685c6819e4f698...1a7c3ab898f9e1e8dbae52b1496188720715ab4b)) | [coccinella-labs/bot](https://github.com/coccinella-labs/bot) |
| 2026-10-03 02:46 UTC | @github-actions[bot] | published a release nightly-99ad21e2b4c5db91c44b2cee07ef9bd199bef9f3-281.1 ([link](https://github.com/coccinella-labs/harper/releases/tag/nightly-99ad21e2b4c5db91c44b2cee07ef9bd199bef9f3-281.1)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-02 23:54 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/c7752232af8084a758396441d5803974592c574f...143f3335b6b49ddb1ed483001c57bff27ab5a58f)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-02 22:58 UTC | @github-actions[bot] | published a release nightly-20261002-2258-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20261002-2258-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-10-02 20:20 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/b0055dd04179c4f1ca957def31edd845738c2e45...4da0fa2cdfc829b1146fd08b0a0b926e179699e2)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-02 18:02 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/429f399bda75f998e8f8a76bec89d99187777ff6...b3716baa8f716f641bbf8dfd19de7b006d777057)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
| 2026-10-02 18:02 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/1b4724b8a0c752f9513753c6180a2873f7176d1b...34344f924dbae96b0c67ced27baad889c72df25f)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
| 2026-10-02 17:56 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/a31936283da5d8005a96ae6da666c1b4e703fe98...429f399bda75f998e8f8a76bec89d99187777ff6)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
| 2026-10-02 17:56 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/848f92242b9f5e987977f7b8ea5b83c7da5a28f3...1b4724b8a0c752f9513753c6180a2873f7176d1b)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
| 2026-10-02 17:53 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/6f59f6c84a3c6dd308119874a0e716a33a0e95f7...848f92242b9f5e987977f7b8ea5b83c7da5a28f3)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
| 2026-10-02 17:52 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/b6ab5a14795ff351e80518fa03de6550cf7655b1...a1fa745b23f2119185f2fa978daf0c0591a74a26)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
| 2026-10-02 17:47 UTC | @bniladridas | deleted branch `security-fixes` | [coccinella-labs/rl](https://github.com/coccinella-labs/rl) |
| 2026-10-02 17:46 UTC | @bniladridas | deleted branch `git-hooks` | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
| 2026-10-02 17:44 UTC | @dependabot[bot] | merged PR [#3](https://github.com/coccinella-labs/rl/pull/3) | [coccinella-labs/rl](https://github.com/coccinella-labs/rl) |
| 2026-10-02 17:27 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/59c7b5107f7bc437e8518e36891b94d850aa32a4...6f59f6c84a3c6dd308119874a0e716a33a0e95f7)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-03T03:25:07.979Z • IST: 3/10/2026, 08:55:07 (8:55:07 am)_
