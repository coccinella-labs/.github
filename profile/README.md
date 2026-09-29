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
| 2026-09-29 22:58 UTC | @github-actions[bot] | published a release nightly-20260929-2258-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20260929-2258-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-09-29 19:31 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/27015e07d64e551a3e77c3a3ffb9f60b72a5d9b7...c0a86c17b131018c05d195c76145707575b9f46c)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-29 17:36 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/978da1fa64bf81fb7d66c3e4bb47ccd2a6db6f58...6ce8d8849769b2355b75311e75396dc581727976)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-29 17:36 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/9ec8a99323c88ec687113f62926db484e6f0c6c3...954a9e5a11a87f9b7569d2e4a130a2495c923637)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-29 14:11 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/9491185da3af5c9bb3559a04ef5af44200f1f4dd...27015e07d64e551a3e77c3a3ffb9f60b72a5d9b7)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-29 11:04 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/493ca7b678b5c959258e13d9e0cf0d010be63bcf...9ec8a99323c88ec687113f62926db484e6f0c6c3)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-29 09:59 UTC | @github-actions[bot] | published a release nightly-20260929 ([link](https://github.com/coccinella-labs/diff-mac/releases/tag/nightly-20260929)) | [coccinella-labs/diff-mac](https://github.com/coccinella-labs/diff-mac) |
| 2026-09-29 07:11 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/1d35dd1e29c6c647fd195ae5a5da2f184f16c282...9491185da3af5c9bb3559a04ef5af44200f1f4dd)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-29 04:11 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/230a039ef1caab87ee9ec9da3dac4af14986519c...493ca7b678b5c959258e13d9e0cf0d010be63bcf)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-29 03:23 UTC | @coccinella-labs-bot[bot] | pushed ([diff](https://github.com/coccinella-labs/bot/compare/d2283a52e1dcd62e586ac0f90f78216d2e7a99f2...0dfcb9e61271087ce1fc2731bc216dd167f7d674)) | [coccinella-labs/bot](https://github.com/coccinella-labs/bot) |
| 2026-09-29 03:09 UTC | @github-actions[bot] | published a release nightly-99ad21e2b4c5db91c44b2cee07ef9bd199bef9f3-277.1 ([link](https://github.com/coccinella-labs/harper/releases/tag/nightly-99ad21e2b4c5db91c44b2cee07ef9bd199bef9f3-277.1)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-09-29 01:24 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/10a8e01e242ec19ba0fa284a5f4e6163e0c7c0ca...1d35dd1e29c6c647fd195ae5a5da2f184f16c282)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-09-28 23:49 UTC | @github-actions[bot] | published a release nightly-20260928-2349-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20260928-2349-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-09-28 23:41 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/5c417b22e8da0381a59494ace67052b14cc6765f...8a5fb9ffd2b8e0873c59b7f426f257a7cf1c993f)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-09-28 23:40 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/64ed22f1aee3397b78305429ec3a32d059633c27...230a039ef1caab87ee9ec9da3dac4af14986519c)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-09-29T23:21:45.116Z • IST: 30/9/2026, 04:51:45 (4:51:45 am) 🌙_
