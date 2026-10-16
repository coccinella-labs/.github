<p align="center">
  <img src="https://raw.githubusercontent.com/coccinella-labs/.github/main/profile/logo.png" alt="Coccinella Labs" width="600">
</p>

coccinella-labs builds small developer tools and the systems behind them: agent runtimes, GPU and machine learning compute, runtimes and developer tooling, and the automation that ships it all. Published work is public; training sources for the Hub models are kept private.

Work falls into five systems below, plus a short list of standalone tools at the end. The catalog at [coccinella-labs.github.io](https://coccinella-labs.github.io) lists every code project with its language, type, license, and install command.

## Agent infrastructure

Harnesses, runtimes, and bots that plan work, execute it, and ship results.

- [harper](https://github.com/coccinella-labs/harper) - Rust agent runtime with a TUI, an HTTP API, and a sandbox.
- [agent-sdk](https://github.com/coccinella-labs/agent-sdk) - Reusable agent runtime extracted from Harper.
- [agentware](https://github.com/coccinella-labs/agentware) - A C++20 AI coding agent for the terminal. Talks to hosted and local models, reads and edits code through MCP filesystem and git servers, and works offline.
- [harperbot](https://github.com/coccinella-labs/harperbot) - GitHub App bot for automated code review.
- [swe-agent](https://github.com/coccinella-labs/swe-agent) - Software engineering agent for this organization.

## GPU and ML compute

Apple Silicon kernels, Metal runtimes, and inference for local and serverless machine learning.

- [core](https://github.com/coccinella-labs/core) - Metal GPU compute runtime focused on memory, synchronization, and data movement on Apple Silicon.
- [kernels](https://github.com/coccinella-labs/kernels) - Metal compute kernels in Swift and Metal, with a runnable CUDA translation demo.
- [gpucomm-fs](https://github.com/coccinella-labs/gpucomm-fs) - Content-addressed store for GPU artifacts, with verified retrieval and automatic deduplication.
- [gpucomm-bot](https://github.com/coccinella-labs/gpucomm-bot) - GPU-aware GitHub App and CI automation.
- [bitinfer](https://github.com/coccinella-labs/bitinfer) - Hugging Face encoder inference for Apple Silicon. Halves memory with float16 weights; slower than plain transformers on CPU.
- [ml](https://github.com/coccinella-labs/ml) - MPI coordination scaffold for distributed training in C++, with a REST monitoring dashboard. The learning itself is not implemented.
- [mlapi](https://github.com/coccinella-labs/mlapi) - FastAPI service for model inference.
- [rl](https://github.com/coccinella-labs/rl) - CMA-ES reinforcement learning for CartPole-v1 with a linear policy.
- [benchmark](https://github.com/coccinella-labs/benchmark) - Whisper and Wav2Vec2 speech models with WER and CER evaluation implemented, not yet wired into a comparison run.

## Runtimes and developer tooling

CLI foundations, runtimes, and code tools the rest of the collection builds on.

- [cli](https://github.com/coccinella-labs/cli) - GitHub CLI extension that reads the repo list dynamically.
- [hub](https://github.com/coccinella-labs/hub) - Central hub connecting all repos.
- [go-kit](https://github.com/coccinella-labs/go-kit) - Go CLI for working with Git hosting platforms.
- [tokensdk](https://github.com/coccinella-labs/tokensdk) - Official TypeScript client for the Coccinella API.
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

## Models and datasets

Small verified models and the data behind them, published on Hugging Face. No install commands; load with `transformers`, `datasets`, or plain HTTP.

- [quiz](https://huggingface.co/harpertoken/quiz) - DistilBERT extractive QA on SQuAD.
- [clue](https://huggingface.co/harpertoken/clue) - Continued QA fine-tune, 1k examples.
- [name](https://huggingface.co/harpertoken/name) - BERT named entity recognition on CoNLL-2003.
- [talk](https://huggingface.co/harpertoken/talk) - Whisper speech recognition.
- [word](https://huggingface.co/harpertoken/word) - From-scratch GPT-2, generation collapses to end-of-text, kept as a documented artifact.
- [chat](https://huggingface.co/harpertoken/chat) - GPT-2 conversational fine-tune.
- [tiny](https://huggingface.co/harpertoken/tiny) - SmolLM 4-bit quant, MLX only.
- [pole](https://huggingface.co/harpertoken/pole) - CMA-ES linear CartPole policy, scores 500.
- [mark](https://huggingface.co/harpertoken/mark) - IsolationForest telemetry anomaly detection.
- [wear](https://huggingface.co/harpertoken/wear) - CNN clothing classifier, 0.9073 on Fashion-MNIST.
- [tone](https://huggingface.co/harpertoken/tone) - CNN spoken-command classifier, 0.9116 on Speech Commands.
- [fuse](https://huggingface.co/harpertoken/fuse) - Image-caption matcher, 0.6933 on Flickr8k.
- [flow](https://huggingface.co/harpertoken/flow) - GRU sandbox-event classifier, 1.0000 where fields sit at chance.
- [move](https://huggingface.co/harpertoken/move) - CNN action classifier, 0.5046 on KTH with temporal gain over single-frame.
- [stat](https://huggingface.co/datasets/harpertoken/stat) - macOS system telemetry, 6,190 rows.
- [sandbox-lifecycle](https://huggingface.co/datasets/coccinella-labs/sandbox-lifecycle) - Controlled sandbox event sequences and a temporal ordering benchmark, v0, v1ord and v2 configs.

Training sources live in [harpertoken](https://github.com/coccinella-labs/harpertoken) (QA), [rl](https://github.com/coccinella-labs/rl) (CartPole), and the private `mark`, `wear`, `tone`, `fuse`, `move`, and `flow` preservation repos.

## Apps and utilities

Standalone tools, outside the five systems above.

- [browser](https://github.com/coccinella-labs/browser) - Flutter desktop browser for macOS, Windows, and Linux.
- [clipb](https://github.com/coccinella-labs/clipb) - A lightweight clipboard utility for developers.
- [license](https://github.com/coccinella-labs/license) - Shared legal and license documents for the organization.

## Start here

Discussion threads worth reading before filing anything, in the
[.github discussions](https://github.com/coccinella-labs/.github/discussions).

| Discussion | What it answers |
| --- | --- |
| [About coccinella-labs](https://github.com/coccinella-labs/.github/discussions/3) | What the organization is and what it builds. |
| [Organization defaults and how to change them](https://github.com/coccinella-labs/.github/discussions/42) | What `.github/` applies org-wide, and the blast radius of editing it. |
| [Running the Git GUI locally](https://github.com/coccinella-labs/.github/discussions/29) | How to install and run `git-gui`, and why `pip install git-gui` fails. |
| [What lives in this repository](https://github.com/coccinella-labs/.github/discussions/2) | Reference for the shared workflows, health files, and release history. |

> [!NOTE]
> Pin state lives in GitHub's interface, not in this file. GitHub allows four
> global pins and four per category; these four are the intended global set.
> They have to be applied in the web UI and are not recorded anywhere in git,
> so this list is the only durable record of the intent.

## Org activity

<!-- ORG_ACTIVITY:START -->
| Date | Actor | Activity | Repo |
| --- | --- | --- | --- |
| 2026-10-16 02:15 UTC | @github-actions[bot] | published a release nightly-50fd537097f390d7e5fa650ad0334477131dae9d-294.1 ([link](https://github.com/coccinella-labs/harper/releases/tag/nightly-50fd537097f390d7e5fa650ad0334477131dae9d-294.1)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-16 00:51 UTC | @gaoypChina | forked to [gaoypChina/browser](https://github.com/gaoypChina/browser) | [coccinella-labs/browser](https://github.com/coccinella-labs/browser) |
| 2026-10-15 22:20 UTC | @github-actions[bot] | published a release nightly-20261015-2220-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20261015-2220-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-10-15 16:18 UTC | @bniladridas | merged PR [#24](https://github.com/coccinella-labs/harperbot/pull/24) | [coccinella-labs/harperbot](https://github.com/coccinella-labs/harperbot) |
| 2026-10-15 16:17 UTC | @bniladridas | opened PR [#24](https://github.com/coccinella-labs/harperbot/pull/24) | [coccinella-labs/harperbot](https://github.com/coccinella-labs/harperbot) |
| 2026-10-15 15:56 UTC | @bniladridas | closed issue [#11: Providers and model discovery (OpenRouter, auto resolution)](https://github.com/coccinella-labs/harperbot/issues/11) | [coccinella-labs/harperbot](https://github.com/coccinella-labs/harperbot) |
| 2026-10-15 15:56 UTC | @bniladridas | closed issue [#10: Sticky comment protocol and review output formatting](https://github.com/coccinella-labs/harperbot/issues/10) | [coccinella-labs/harperbot](https://github.com/coccinella-labs/harperbot) |
| 2026-10-15 15:56 UTC | @bniladridas | created [a thread](https://github.com/coccinella-labs/harperbot/issues/10) | [coccinella-labs/harperbot](https://github.com/coccinella-labs/harperbot) |
| 2026-10-15 15:53 UTC | @harperbot-knows[bot] | created [a thread](https://github.com/coccinella-labs/harperbot/pull/23) | [coccinella-labs/harperbot](https://github.com/coccinella-labs/harperbot) |
| 2026-10-15 15:52 UTC | @bniladridas | opened PR [#23](https://github.com/coccinella-labs/harperbot/pull/23) | [coccinella-labs/harperbot](https://github.com/coccinella-labs/harperbot) |
| 2026-10-15 15:49 UTC | @bniladridas | deleted branch `feat/sticky-protocol` | [coccinella-labs/harperbot](https://github.com/coccinella-labs/harperbot) |
| 2026-10-15 15:49 UTC | @bniladridas | merged PR [#22](https://github.com/coccinella-labs/harperbot/pull/22) | [coccinella-labs/harperbot](https://github.com/coccinella-labs/harperbot) |
| 2026-10-15 15:48 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/harperbot/compare/75ee84fd8538afacd3d3cd4dd59c9cac157853d4...a0c6b847bb0235bd33c9d8b5178249c7185a32c9)) | [coccinella-labs/harperbot](https://github.com/coccinella-labs/harperbot) |
| 2026-10-15 15:47 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/harperbot/compare/d8c3dd6c2833787403948e656cb4e0c9f7ec82f1...96c75faf967206f0e56435dd1d3e48979417e939)) | [coccinella-labs/harperbot](https://github.com/coccinella-labs/harperbot) |
| 2026-10-15 15:47 UTC | @bniladridas | merged PR [#21](https://github.com/coccinella-labs/harperbot/pull/21) | [coccinella-labs/harperbot](https://github.com/coccinella-labs/harperbot) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-16T04:47:17.402Z • IST: 16/10/2026, 10:17:17 (10:17:17 am)_
