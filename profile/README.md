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
| 2026-09-28 18:26 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/170f3a69ca09bbb732b8c9169689fbb2f466aa6b...5c417b22e8da0381a59494ace67052b14cc6765f)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-28 18:25 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/ca224c7eeb939827a402d39955b82e29273006fa...64ed22f1aee3397b78305429ec3a32d059633c27)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-28 17:14 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/l2/compare/1db2d0b66f28555e5fd84ca142fed4c64f858fc9...8e604231f34f61885030811a0afbc20331020b95)) | [coccinella-labs/l2](https://github.com/coccinella-labs/l2) |
| 2026-09-28 15:42 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/73b5c8aba8f158192d8b0c98f92907d7fbe3967a...a09a75dc6c894aa320ad00ed6707d147f33a8130)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-28 10:32 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/b70926800dfca6ec815f291a483a63feb01edb98...170f3a69ca09bbb732b8c9169689fbb2f466aa6b)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-28 10:07 UTC | @dependabot[bot] | pushed ([diff](https://github.com/coccinella-labs/vesper/compare/a93fa4513a9a0adaf7f81d5c77de3e7125397d48...ed9d4ccd4b45cee927581e21cc6f134a30d4bc65)) | [coccinella-labs/vesper](https://github.com/coccinella-labs/vesper) |
| 2026-09-28 09:58 UTC | @github-actions[bot] | published a release nightly-20260928 ([link](https://github.com/coccinella-labs/diff-mac/releases/tag/nightly-20260928)) | [coccinella-labs/diff-mac](https://github.com/coccinella-labs/diff-mac) |
| 2026-09-28 09:08 UTC | @dependabot[bot] | pushed ([diff](https://github.com/coccinella-labs/benchmark/compare/b42c1dd571c05653227d7052cd21e39faddb508a...381633ea619950faacd68e7badcd357c274f2cb5)) | [coccinella-labs/benchmark](https://github.com/coccinella-labs/benchmark) |
| 2026-09-28 09:08 UTC | @dependabot[bot] | pushed ([diff](https://github.com/coccinella-labs/benchmark/compare/3878d990555ae5d27ba67a47401aaf21314bdc3e...eccde5e26b4ad3e1bd2c99a33ff4c322879025d2)) | [coccinella-labs/benchmark](https://github.com/coccinella-labs/benchmark) |
| 2026-09-28 09:08 UTC | @dependabot[bot] | pushed ([diff](https://github.com/coccinella-labs/benchmark/compare/4fa9eee58432e1e3af6d2bea211a925a395a7505...8cf5bc94a825db477f9d6c72119ca64999989ee9)) | [coccinella-labs/benchmark](https://github.com/coccinella-labs/benchmark) |
| 2026-09-28 09:08 UTC | @dependabot[bot] | pushed ([diff](https://github.com/coccinella-labs/benchmark/compare/f220f49e18bc743babf38aa296f8d6781c644a67...6638b331ffc054889a10591622d7b98f46774352)) | [coccinella-labs/benchmark](https://github.com/coccinella-labs/benchmark) |
| 2026-09-28 09:06 UTC | @dependabot[bot] | pushed ([diff](https://github.com/coccinella-labs/vesper/compare/86ce83b15e1cc2324735bb043426c2ee573aaf1a...1474dc0742afbf212b54fb8f5ceacc57f5f1de6b)) | [coccinella-labs/vesper](https://github.com/coccinella-labs/vesper) |
| 2026-09-28 09:06 UTC | @dependabot[bot] | pushed ([diff](https://github.com/coccinella-labs/vesper/compare/09b6e38c9177f4620b23b5a91de6bc6f18661a04...35fcb79d6f6bd4ffba33c1e069d8b95ba595e547)) | [coccinella-labs/vesper](https://github.com/coccinella-labs/vesper) |
| 2026-09-28 07:13 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/4890e23cd948a58aa438a072a827bdb8d293b903...73b5c8aba8f158192d8b0c98f92907d7fbe3967a)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-28 03:36 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/238a9ffaf4c0640e64b5c6b159f6e56d717eaad0...b70926800dfca6ec815f291a483a63feb01edb98)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-09-28T21:31:04.070Z • IST: 29/9/2026, 03:01:04 (3:01:04 am) 🌙_
