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
| 2026-09-25 17:53 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/palmshed-org/compare/85262c8354f20f135c97bf8c30c4100cb9d82608...ab442273132f57b98d5ce572b9c8709036f11caa)) | [coccinella-labs/palmshed-org](https://github.com/coccinella-labs/palmshed-org) |
| 2026-09-25 17:50 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/7fb9f729335c1c3af2877008d5c5b6c70b14aa66...2c525fc59b884c9f266e44107f816b68085ae376)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 17:49 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/.github/compare/c323e0249c114f36fcb91a46e79f6a62d7b7cabe...7fb9f729335c1c3af2877008d5c5b6c70b14aa66)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 17:46 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/453065179f16e300c55f64f780e663da20325a41...c323e0249c114f36fcb91a46e79f6a62d7b7cabe)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 17:46 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/.github/compare/cd5192f276ed184bb5e94e54c8fb9c0e83bbd050...453065179f16e300c55f64f780e663da20325a41)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 17:40 UTC | @bniladridas | deleted branch `prepare-tui-merge` | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 17:33 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/f81a56785f11b9ba23d1ce1614d06c4ec7d6e3a0...cd5192f276ed184bb5e94e54c8fb9c0e83bbd050)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 17:30 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/palmshed-org/compare/5aae51be535640f2f9da72c8d23e197b22af3809...f16375a19405257fca3a0d11642cd0ed754121bd)) | [coccinella-labs/palmshed-org](https://github.com/coccinella-labs/palmshed-org) |
| 2026-09-25 17:27 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/bniladridas/compare/f8363501f33c86cac818957a522baff2eeb5fcff...4cf72e8025b7bed082ba1f9283619ffc8426c2dc)) | [coccinella-labs/bniladridas](https://github.com/coccinella-labs/bniladridas) |
| 2026-09-25 17:22 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/l2/compare/79b8d56b9eb507400e46de45b844187c78e7e144...2e64fb3e6a09ba87dffe13084e98d095321e340a)) | [coccinella-labs/l2](https://github.com/coccinella-labs/l2) |
| 2026-09-25 17:21 UTC | @bniladridas | created branch `prepare-tui-merge` | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 17:14 UTC | @bniladridas | deleted branch `fix/ci-lint-determinism` | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-25 17:09 UTC | @github-actions[bot] | labeled PR [#2](https://github.com/coccinella-labs/xnubuild/pull/2) | [coccinella-labs/xnubuild](https://github.com/coccinella-labs/xnubuild) |
| 2026-09-25 17:09 UTC | @github-actions[bot] | opened PR [#2](https://github.com/coccinella-labs/xnubuild/pull/2) | [coccinella-labs/xnubuild](https://github.com/coccinella-labs/xnubuild) |
| 2026-09-25 17:09 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/xnubuild/compare/33019151c4f58fb9b416e107e631f4a4e05d6042...65a8752c5b90f60dcd9479625be975a8fd7ae107)) | [coccinella-labs/xnubuild](https://github.com/coccinella-labs/xnubuild) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-09-25T17:57:30.691Z • IST: 25/9/2026, 23:27:30 (11:27:30 pm) 🌙_
