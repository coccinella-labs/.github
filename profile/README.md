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
| 2026-09-30 23:26 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/c6f5d9668f65d23283635ae4da21943233f81d0d...7b83642ebed045c53ec2cf9c9ae246f859e6ec68)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-30 23:01 UTC | @github-actions[bot] | published a release nightly-20260930-2301-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20260930-2301-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-09-30 15:31 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/d5ce022be8b97fcfa3df1a7619816c1e9d028f06...993aa05677b99149bd6283d2264d80f4819490c5)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-30 08:48 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/64b10e0566f180c1b4012bf32e632f7619837e2b...d5ce022be8b97fcfa3df1a7619816c1e9d028f06)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-30 07:57 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/a6c08f53020109d794dbdc47f5a716ee587fda01...5e83dcd2149d287ab4afb1419a3dbdd0881ba60b)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-30 07:56 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/27fa1e8154db2a5fad78319985192ffbfcdeda83...8a293c9eacb917b142ceb9ed0a3653bd6c856f1d)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-30 03:05 UTC | @coccinella-labs-bot[bot] | pushed ([diff](https://github.com/coccinella-labs/bot/compare/0dfcb9e61271087ce1fc2731bc216dd167f7d674...24a0ac155a9ee18863bee754f256ebf82997467a)) | [coccinella-labs/bot](https://github.com/coccinella-labs/bot) |
| 2026-09-30 02:50 UTC | @github-actions[bot] | published a release nightly-99ad21e2b4c5db91c44b2cee07ef9bd199bef9f3-278.1 ([link](https://github.com/coccinella-labs/harper/releases/tag/nightly-99ad21e2b4c5db91c44b2cee07ef9bd199bef9f3-278.1)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-30 01:02 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/6ce8d8849769b2355b75311e75396dc581727976...a6c08f53020109d794dbdc47f5a716ee587fda01)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-30 01:02 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/954a9e5a11a87f9b7569d2e4a130a2495c923637...27fa1e8154db2a5fad78319985192ffbfcdeda83)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-29 23:21 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/c0a86c17b131018c05d195c76145707575b9f46c...e74b1466e279b90f0d9c75b9ecd78ad774245230)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-29 22:58 UTC | @github-actions[bot] | published a release nightly-20260929-2258-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20260929-2258-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-09-29 19:31 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/27015e07d64e551a3e77c3a3ffb9f60b72a5d9b7...c0a86c17b131018c05d195c76145707575b9f46c)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-29 17:36 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/978da1fa64bf81fb7d66c3e4bb47ccd2a6db6f58...6ce8d8849769b2355b75311e75396dc581727976)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-29 17:36 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/9ec8a99323c88ec687113f62926db484e6f0c6c3...954a9e5a11a87f9b7569d2e4a130a2495c923637)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-01T00:04:06.750Z • IST: 1/10/2026, 05:34:06 (5:34:06 am) 🌙_
