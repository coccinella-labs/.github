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
| 2026-10-02 01:59 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/05d28d9d5ef36dcf1566e85087bd3500bbd63b53...8ccf03313430cfd5412b45b2cd8a77e54e374167)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-01 23:18 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/4c41ab6cebb193cbf6d8658bef10520d95e57e30...4662b41e505b2182c572125e212629c5e5517ef5)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-01 23:13 UTC | @github-actions[bot] | published a release nightly-20261001-2313-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20261001-2313-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-10-01 22:36 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/05cd7858bae189844d0bc7f76aa13c5ea4726a0f...35c043671ede63bfdaa96ab8782424a56dc6e8ad)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-01 15:36 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/rl/compare/f9a029508ef0ddd26b384a3102f58a810c75dd5f...cddb4c85767c99b492326bc84c23f521f54d2d1a)) | [coccinella-labs/rl](https://github.com/coccinella-labs/rl) |
| 2026-10-01 15:32 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/rl/compare/a3e0f9e4c9614913b8762531cd4c2721fb5199ce...f9a029508ef0ddd26b384a3102f58a810c75dd5f)) | [coccinella-labs/rl](https://github.com/coccinella-labs/rl) |
| 2026-10-01 15:31 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/rl/compare/b0bcdaff77159ca5023d0921eadbb888d073db72...a3e0f9e4c9614913b8762531cd4c2721fb5199ce)) | [coccinella-labs/rl](https://github.com/coccinella-labs/rl) |
| 2026-10-01 14:59 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/rl/compare/429d7d8038e9e198f469b2fe709b55a5cf8e08c6...b0bcdaff77159ca5023d0921eadbb888d073db72)) | [coccinella-labs/rl](https://github.com/coccinella-labs/rl) |
| 2026-10-01 14:56 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/06512825514cba5d72a7a83766b5ab704630ead2...f89b1caf3c0545db9fe4ed7526fddd426d02d1c8)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
| 2026-10-01 14:55 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/03ebdc70312a679b556e38c41d655ae84e70c40b...db4d574b09e2998a3f00d778987fea3923eff95e)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
| 2026-10-01 14:52 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/rl/compare/1e06be683ff03563a65e4186d9038b51a82b06ba...429d7d8038e9e198f469b2fe709b55a5cf8e08c6)) | [coccinella-labs/rl](https://github.com/coccinella-labs/rl) |
| 2026-10-01 14:48 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/cda629a4d734e70a4ed36165070da87c600f62e5...06512825514cba5d72a7a83766b5ab704630ead2)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
| 2026-10-01 14:48 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/be4ccac52ff14b5a82830564d4f2530f74d50884...03ebdc70312a679b556e38c41d655ae84e70c40b)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
| 2026-10-01 14:43 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/b0820f48ede018ffebeee4d250f29832bc18ef7f...cda629a4d734e70a4ed36165070da87c600f62e5)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
| 2026-10-01 14:43 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/harpertoken/compare/a74b969cdd4d7396822f95f6391ff2796aa6c2e5...be4ccac52ff14b5a82830564d4f2530f74d50884)) | [coccinella-labs/harpertoken](https://github.com/coccinella-labs/harpertoken) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-02T02:23:33.828Z • IST: 2/10/2026, 07:53:33 (7:53:33 am)_
