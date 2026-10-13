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

## Org activity

<!-- ORG_ACTIVITY:START -->
| Date | Actor | Activity | Repo |
| --- | --- | --- | --- |
| 2026-10-13 04:31 UTC | @github-actions[bot] | published a release nightly-50fd537097f390d7e5fa650ad0334477131dae9d-291.1 ([link](https://github.com/coccinella-labs/harper/releases/tag/nightly-50fd537097f390d7e5fa650ad0334477131dae9d-291.1)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-13 02:03 UTC | @dependabot[bot] | pushed ([diff](https://github.com/coccinella-labs/benchmark/compare/9372a2537a94b149f5fe170f13c390368730facc...3da6117b6995df59a5c4d5bd054bc57b071257d5)) | [coccinella-labs/benchmark](https://github.com/coccinella-labs/benchmark) |
| 2026-10-13 02:03 UTC | @dependabot[bot] | pushed ([diff](https://github.com/coccinella-labs/benchmark/compare/3651609202d46e4f7308f77f287497d0b887926d...8f1329822649c3b766379911c3f7aff523abb198)) | [coccinella-labs/benchmark](https://github.com/coccinella-labs/benchmark) |
| 2026-10-13 01:59 UTC | @dependabot[bot] | pushed ([diff](https://github.com/coccinella-labs/vesper/compare/1474dc0742afbf212b54fb8f5ceacc57f5f1de6b...54f9ebecef1f335fa2b0e469d291f5cdee4faad1)) | [coccinella-labs/vesper](https://github.com/coccinella-labs/vesper) |
| 2026-10-13 01:59 UTC | @dependabot[bot] | pushed ([diff](https://github.com/coccinella-labs/vesper/compare/49c35edc65d24debbddfd8066f3b330e5a84c005...7b050b889b3bfcbfec0bdecd146dd77fb5035bbe)) | [coccinella-labs/vesper](https://github.com/coccinella-labs/vesper) |
| 2026-10-13 01:22 UTC | @github-actions[bot] | published a release nightly-20261013-0122-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20261013-0122-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-10-12 23:42 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/64252d1dce6633721b96573afc64a8ae70b15a0d...ac9467902948d8bed293402a9efd6ffb19cc94a3)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-12 23:29 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/b2643a960b747d985a4bf1c77a97ab002847ca72...207ea78a13f1c3739a765cf5be588bffe32696ef)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-12 23:28 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/84e935497a861a44cfb4dc9de8905a129d864a31...7e971b77232a59b1323cde6707e5f37295a95e01)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-12 22:37 UTC | @TheArchitectEngineer | forked to [TheArchitectEngineer/Coccinella-labs-xnubuild](https://github.com/TheArchitectEngineer/Coccinella-labs-xnubuild) | [coccinella-labs/xnubuild](https://github.com/coccinella-labs/xnubuild) |
| 2026-10-12 22:12 UTC | @coccinella-labs-harper[bot] | labeled PR [#179](https://github.com/coccinella-labs/harper/pull/179) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-12 22:11 UTC | @coccinella-labs-harper[bot] | labeled PR [#164](https://github.com/coccinella-labs/harper/pull/164) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-12 22:11 UTC | @coccinella-labs-harper[bot] | labeled PR [#162](https://github.com/coccinella-labs/harper/pull/162) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-12 22:11 UTC | @coccinella-labs-harper[bot] | labeled PR [#160](https://github.com/coccinella-labs/harper/pull/160) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-12 22:11 UTC | @coccinella-labs-harper[bot] | labeled PR [#145](https://github.com/coccinella-labs/harper/pull/145) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-13T05:04:00.014Z • IST: 13/10/2026, 10:34:00 (10:34:00 am)_
