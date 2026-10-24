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
| 2026-10-24 08:16 UTC | @github-actions[bot] | published a release nightly-20261024 ([link](https://github.com/coccinella-labs/diff-mac/releases/tag/nightly-20261024)) | [coccinella-labs/diff-mac](https://github.com/coccinella-labs/diff-mac) |
| 2026-10-24 03:14 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/d980254097df9580e8246882e2b5c8f9489cccb6...5a8f6400c41270fdd4bd6b47cff9023b586db634)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-24 02:35 UTC | @coccinella-labs-bot[bot] | pushed ([diff](https://github.com/coccinella-labs/bot/compare/65ee566bc9d6d96d42448127d6612d6313249ffa...0d9b89bb2bed3e122c6e36149b45cda8c7908c1f)) | [coccinella-labs/bot](https://github.com/coccinella-labs/bot) |
| 2026-10-24 02:33 UTC | @github-actions[bot] | published a release nightly-50fd537097f390d7e5fa650ad0334477131dae9d-302.1 ([link](https://github.com/coccinella-labs/harper/releases/tag/nightly-50fd537097f390d7e5fa650ad0334477131dae9d-302.1)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-24 00:47 UTC | @dependabot[bot] | labeled PR [#4](https://github.com/coccinella-labs/rl/pull/4) (×2) | [coccinella-labs/rl](https://github.com/coccinella-labs/rl) |
| 2026-10-24 00:47 UTC | @dependabot[bot] | opened PR [#4](https://github.com/coccinella-labs/rl/pull/4) | [coccinella-labs/rl](https://github.com/coccinella-labs/rl) |
| 2026-10-24 00:03 UTC | @github-actions[bot] | created [a thread](https://github.com/coccinella-labs/agentware/issues/113) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-24 00:03 UTC | @bniladridas | merged PR [#251](https://github.com/coccinella-labs/agentware/pull/251) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-23 23:48 UTC | @github-merge-queue[bot] | created branch `gh-readonly-queue/main/pr-251-cd0539031f94c2b984c…` | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-23 23:47 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/03ec99e65c90ee9dd07fe08c633e4da8328194d2...d980254097df9580e8246882e2b5c8f9489cccb6)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-23 23:24 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/1371519cbaf2dd577bc38ce5a70b14db00e44e6b...12dd298df6df1a68c952edd6cba3fd6b4c4d5098)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-23 23:21 UTC | @bniladridas | closed issue [#59: Allow Ollama to use its default prediction limit](https://github.com/coccinella-labs/xoi/issues/59) | [coccinella-labs/xoi](https://github.com/coccinella-labs/xoi) |
| 2026-10-23 23:21 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/xoi/compare/9b8a519f1f0cfe6a3717937db7e3577ce4098f6f...d04fde073f43d30bdb32813eedb930611658e069)) | [coccinella-labs/xoi](https://github.com/coccinella-labs/xoi) |
| 2026-10-23 23:21 UTC | @bniladridas | merged PR [#60](https://github.com/coccinella-labs/xoi/pull/60) | [coccinella-labs/xoi](https://github.com/coccinella-labs/xoi) |
| 2026-10-23 22:43 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/2bb2119d5eef5e3788d4388c90a436955ff99985...36da6e40b1598c84b8e3cd97d730d959f6190695)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-24T09:41:59.360Z • IST: 24/10/2026, 15:11:59 (3:11:59 pm)_
