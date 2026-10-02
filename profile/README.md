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
| 2026-10-02 13:43 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/f89b1caf3c0545db9fe4ed7526fddd426d02d1c8...b5f308a9094cc44567f53b7c0205ca6fb5b2bfe0)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
| 2026-10-02 09:55 UTC | @github-actions[bot] | published a release nightly-20261002 ([link](https://github.com/coccinella-labs/diff-mac/releases/tag/nightly-20261002)) | [coccinella-labs/diff-mac](https://github.com/coccinella-labs/diff-mac) |
| 2026-10-02 08:22 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/5fbf4d1294d363c48aa6fc659702c7e90d2e29af...a32a7e04989749ae9ab67672c5c8e10dcbb06053)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-02 03:04 UTC | @github-actions[bot] | published a release nightly-99ad21e2b4c5db91c44b2cee07ef9bd199bef9f3-280.1 ([link](https://github.com/coccinella-labs/harper/releases/tag/nightly-99ad21e2b4c5db91c44b2cee07ef9bd199bef9f3-280.1)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-02 01:59 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/35c043671ede63bfdaa96ab8782424a56dc6e8ad...5fbf4d1294d363c48aa6fc659702c7e90d2e29af)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-02 01:59 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/05d28d9d5ef36dcf1566e85087bd3500bbd63b53...8ccf03313430cfd5412b45b2cd8a77e54e374167)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-01 23:18 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/4c41ab6cebb193cbf6d8658bef10520d95e57e30...4662b41e505b2182c572125e212629c5e5517ef5)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-01 23:13 UTC | @github-actions[bot] | published a release nightly-20261001-2313-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20261001-2313-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-10-01 22:36 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/05cd7858bae189844d0bc7f76aa13c5ea4726a0f...35c043671ede63bfdaa96ab8782424a56dc6e8ad)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-01 19:12 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/828aaa135d31d325cb83bd9ce9e56eaf89e3369c...4c41ab6cebb193cbf6d8658bef10520d95e57e30)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-01 17:59 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/ff045f3b4f3e6b31a7c3b7b8134644f2acc0ea24...05cd7858bae189844d0bc7f76aa13c5ea4726a0f)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-01 17:59 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/a779b069c73958c0509600a3841d5a830c63931c...ab82f0efa062908a44ed7b3ad73c61620f14d932)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-01 16:26 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/rl/compare/cddb4c85767c99b492326bc84c23f521f54d2d1a...a9676f76f2085c4ed25b83ad8104dd8a10dbf518)) | [coccinella-labs/rl](https://github.com/coccinella-labs/rl) |
| 2026-10-01 15:36 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/rl/compare/f9a029508ef0ddd26b384a3102f58a810c75dd5f...cddb4c85767c99b492326bc84c23f521f54d2d1a)) | [coccinella-labs/rl](https://github.com/coccinella-labs/rl) |
| 2026-10-01 15:32 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/rl/compare/a3e0f9e4c9614913b8762531cd4c2721fb5199ce...f9a029508ef0ddd26b384a3102f58a810c75dd5f)) | [coccinella-labs/rl](https://github.com/coccinella-labs/rl) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-02T15:15:55.228Z • IST: 2/10/2026, 20:45:55 (8:45:55 pm) 🌙_
