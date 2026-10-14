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
| 2026-10-14 08:51 UTC | @github-actions[bot] | published a release nightly-20261014 ([link](https://github.com/coccinella-labs/diff-mac/releases/tag/nightly-20261014)) | [coccinella-labs/diff-mac](https://github.com/coccinella-labs/diff-mac) |
| 2026-10-14 05:47 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/a485a06b17146e5c9f2f10f0de3275a298635af6...a2d0e981cb31818d9fdd3c54fc4b98b8d7a6bed7)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-14 02:47 UTC | @coccinella-labs-bot[bot] | pushed ([diff](https://github.com/coccinella-labs/bot/compare/f80bbef6b9740d941b4b6d8fe9f10f1ef9389c07...ac53f52b8fcdc0dcf55d93f71c5ffd6e4b1d6178)) | [coccinella-labs/bot](https://github.com/coccinella-labs/bot) |
| 2026-10-14 02:33 UTC | @github-actions[bot] | published a release nightly-50fd537097f390d7e5fa650ad0334477131dae9d-292.1 ([link](https://github.com/coccinella-labs/harper/releases/tag/nightly-50fd537097f390d7e5fa650ad0334477131dae9d-292.1)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-14 00:07 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/6f375e4e5f281c599bab015ef2d1f2f0609627a4...a485a06b17146e5c9f2f10f0de3275a298635af6)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-14 00:07 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/ba112a69c94c8e3a13e54a6e02f517ab94c8a97d...93f0f27bc19008dbdb10b041d05ac34766fb80e7)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-13 23:33 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/35cc3eb89989fa468d36b72a4d26cc54becaf097...e991d1e26181d21f6bbc140d95b7e3d81f71227a)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-13 23:16 UTC | @github-actions[bot] | published a release nightly-20261013-2316-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20261013-2316-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-10-13 20:04 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/db3ec8dade75a3da815d94ba09df6bff6e107b16...6f375e4e5f281c599bab015ef2d1f2f0609627a4)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-13 20:04 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/4fc611ad164bbdc5aa662c868f8661e9d8d2bba1...ba112a69c94c8e3a13e54a6e02f517ab94c8a97d)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-13 19:57 UTC | @bniladridas | labeled issue [#77: Fix libpqxx compatibility across platforms (macOS/Ubuntu)](https://github.com/coccinella-labs/agentware/issues/77) (×2) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-13 15:49 UTC | @bniladridas | opened issue [#5: Filesystem layer: read-only FUSE mount (optional)](https://github.com/coccinella-labs/gpucomm-fs/issues/5) | [coccinella-labs/gpucomm-fs](https://github.com/coccinella-labs/gpucomm-fs) |
| 2026-10-13 15:49 UTC | @bniladridas | opened issue [#4: Sharing and transport: pack/unpack or push/pull](https://github.com/coccinella-labs/gpucomm-fs/issues/4) | [coccinella-labs/gpucomm-fs](https://github.com/coccinella-labs/gpucomm-fs) |
| 2026-10-13 15:49 UTC | @bniladridas | opened issue [#3: Integrity and lifecycle: verify, gc, prune](https://github.com/coccinella-labs/gpucomm-fs/issues/3) | [coccinella-labs/gpucomm-fs](https://github.com/coccinella-labs/gpucomm-fs) |
| 2026-10-13 15:49 UTC | @bniladridas | opened issue [#2: Artifact metadata schema and show command v0.2](https://github.com/coccinella-labs/gpucomm-fs/issues/2) | [coccinella-labs/gpucomm-fs](https://github.com/coccinella-labs/gpucomm-fs) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-14T08:54:38.023Z • IST: 14/10/2026, 14:24:38 (2:24:38 pm)_
