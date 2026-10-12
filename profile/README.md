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
| 2026-10-12 07:29 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/39ef1092fe9e1f38f5e9b52ff1880ca54c6c0c2c...851182a59b01bd6e8fc99b9112e8895354ec47e4)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-12 06:57 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/ad9bd277f64558c574d7f80aeb0729416da09f3b...39ef1092fe9e1f38f5e9b52ff1880ca54c6c0c2c)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-12 06:57 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/26786fcd843664e50a45a4fcce4b59dcdbcf445c...83fded8a12fc45a72036e6687366e44c9f2fb7de)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-12 06:56 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/29da6647433d4becb18b0615ccdb2f39fb4b3878...283b58e6fc9cf4e8479a756a38d3a2299b378f42)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-12 06:32 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/c6db10b512481c3f3b28975382814022917d0d05...ad9bd277f64558c574d7f80aeb0729416da09f3b)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-12 06:10 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/930ef17b5656cf8ed76fcceca0dcd05af8b2978e...c6db10b512481c3f3b28975382814022917d0d05)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-12 04:22 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/5aee363c750b31a36bed298c9c0f83e8d89d64ab...4caff2f7ffb9ba62e4b7548254abb9b10429a027)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-12 04:22 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/2559eafb0b8e56aabfce3b10104242c5e43e4c8a...5aee363c750b31a36bed298c9c0f83e8d89d64ab)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-12 04:19 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/75325cc80fab56e2c9c53188dd5b2b80c72376ed...8ce0f049518aafdb8fc8886f4d70a3287e2ec4ae)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-12 04:11 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/8e611b5da34b0ccad0889b664d92fba7b9d2ae7f...45e571baeb795c4421816fe3687eb718ce207989)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-12 03:37 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/eb641ec47fcf83fd61a6ad45781324c40f461816...15cef96d95943849d15b78e31944dd64dfad339a)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-12 03:23 UTC | @coccinella-labs-bot[bot] | pushed ([diff](https://github.com/coccinella-labs/bot/compare/280d64d045f0aa2fdc37f83ad53e00cc53806a06...6f1dbff7b2b387ddbbf6ded1093ab69fec31a987)) | [coccinella-labs/bot](https://github.com/coccinella-labs/bot) |
| 2026-10-12 03:16 UTC | @github-actions[bot] | published a release nightly-50fd537097f390d7e5fa650ad0334477131dae9d-290.1 ([link](https://github.com/coccinella-labs/harper/releases/tag/nightly-50fd537097f390d7e5fa650ad0334477131dae9d-290.1)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-12 01:29 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/00dad0f6798843cd4699466ea3b34638dae3979c...d8b7e254ef3f8f34ac854aa2cbc6cff8e690667c)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-12 00:12 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/714ec319be4a9300d4cc1dec425affe4faec470c...26786fcd843664e50a45a4fcce4b59dcdbcf445c)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-12T07:52:32.062Z • IST: 12/10/2026, 13:22:32 (1:22:32 pm)_
