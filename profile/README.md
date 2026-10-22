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
| 2026-10-22 12:53 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/fc3a07963d83b405f1e2fbb6418c4258cc2a729f...d8a6e597a5fcc01c3507c9fbd77f13868c7bd52d)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-22 12:50 UTC | @github-actions[bot] | merged PR [#206](https://github.com/coccinella-labs/agentware/pull/206) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-22 12:48 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/57d73551e4f6e712b483e385a33580c2944c1036...ccb8c1c1e0a4b06c1a03281e3511dcdcfa837c2a)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-22 12:46 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/2d027537eb89d8a56b4053a97182ea9144e2f34b...c3aa34540214174557b9e830ed9b7f689fa6739b)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-22 12:45 UTC | @github-actions[bot] | deleted branch `ci/job-timeouts-and-concurrency` | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-22 08:45 UTC | @github-actions[bot] | published a release nightly-20261022 ([link](https://github.com/coccinella-labs/diff-mac/releases/tag/nightly-20261022)) | [coccinella-labs/diff-mac](https://github.com/coccinella-labs/diff-mac) |
| 2026-10-22 02:33 UTC | @coccinella-labs-bot[bot] | pushed ([diff](https://github.com/coccinella-labs/bot/compare/eb9a1635db7c7b9ad4f70e6d453ce5b2c483b9a7...410779d186e4d3a249d1f7d6a4408ab674a9a44f)) | [coccinella-labs/bot](https://github.com/coccinella-labs/bot) |
| 2026-10-22 02:18 UTC | @github-actions[bot] | published a release nightly-50fd537097f390d7e5fa650ad0334477131dae9d-300.1 ([link](https://github.com/coccinella-labs/harper/releases/tag/nightly-50fd537097f390d7e5fa650ad0334477131dae9d-300.1)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-22 01:43 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/367d0d43bf95190da6aa3da8318e20917e954634...975881d289736f536cf75aec140dc631cae22928)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-22 01:22 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/509a94b38b289644f9ad6eac3ce3bc126080d2d4...6ddb71601e6ea97510fe6aa59b5817430bf1039b)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-22 01:12 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/9f38c792c504801e9e2838962e8917b6eab101e5...7787756aceed5d2e4aced932b7cf0ccbf6a344dc)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-22 01:11 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/ff55dc26c02e346696349994fabdd04215974251...c09eb1c257396d6702784bf242eeb8aab16d272a)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-22 01:11 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/c802dc5615cf702d40c679b492d815ed3e8245fe...63d718de2de7719d38709da3209b78a4797f0e8b)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-22 01:09 UTC | @github-actions[bot] | labeled issue [#235: TODO: update documentation](https://github.com/coccinella-labs/agentware/issues/235) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-22 01:07 UTC | @github-actions[bot] | opened issue [#235: TODO: update documentation](https://github.com/coccinella-labs/agentware/issues/235) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-22T12:55:38.833Z • IST: 22/10/2026, 18:25:38 (6:25:38 pm) 🌙_
