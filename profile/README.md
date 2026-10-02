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
| 2026-10-02 17:24 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/286c79b045b696adc9f3298ba6594ddc1269a420...8d8857a30e871decf332bc3ac10acaf897159ccd)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
| 2026-10-02 17:18 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/5d522c050101bb5739950eef14bf20b142204e90...286c79b045b696adc9f3298ba6594ddc1269a420)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
| 2026-10-02 17:18 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/6786549d15f0e6c2df417c14e75145645e888098...a460d81a3c4f0539ad677c5068a115b365c63587)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
| 2026-10-02 16:55 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/4cd3213b04378937d6ae8eb0ba29b6a48b74c322...5d522c050101bb5739950eef14bf20b142204e90)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
| 2026-10-02 16:54 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/52858641a2b08931ad40984db9404f89a7598494...6786549d15f0e6c2df417c14e75145645e888098)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-02T20:02:11.855Z • IST: 3/10/2026, 01:32:11 (1:32:11 am) 🌙_
