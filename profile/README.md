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
| 2026-10-11 17:09 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/b5e5934378a8b11810ed9423be3a2f1cacc9515d...4378d8a8cac016d4297bd3b2e14dc0124e188c96)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 17:08 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/a7c60f88f606211647c123cfbef7087f07d8c866...b5e5934378a8b11810ed9423be3a2f1cacc9515d)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 16:54 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/29b480faa322d06aae7f8e54461f9b0fa978a3b8...6e037a821e4ee5430d83b2266923886cad1dd1b8)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 16:44 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/b46c81fc20591353051eee32f360c234330dd671...29b480faa322d06aae7f8e54461f9b0fa978a3b8)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 16:40 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/692bf424cd2b339f1b69f55bdeb27e940f6b8d07...b46c81fc20591353051eee32f360c234330dd671)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 16:38 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/ea922de5026154be39c59ef1532abe635c8610c7...692bf424cd2b339f1b69f55bdeb27e940f6b8d07)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 16:32 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/7d69b00089bda4d5d6050191ac64320619f875dd...9468bfb7dfa7450bd87406c37d7eb92a4e15b135)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-11 16:15 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/aa6c72ee373f20de4dc18a9daf2a5eea4fd9aacb...5b5add157618c73a7d349e3473eb7942ff001aea)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 15:35 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/ad7ec294e57d92b226b379cd4d45b6f43a8ff37f...aa6c72ee373f20de4dc18a9daf2a5eea4fd9aacb)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 15:10 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/.github/compare/33d0db822cc2e80631d77b87510f0a082ad4ea0f...c43d2bb3d612fac52c68bc99602cd218ace3dee4)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-11 15:05 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/c75b5557b33ee872416c862fed549002a1c1f40d...ad7ec294e57d92b226b379cd4d45b6f43a8ff37f)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 14:48 UTC | @bniladridas | deleted tag `main` | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 14:29 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/8f6d0cc4e8b8448e7e1cb35e9f41a25abe8052b8...498f2dbd2cc83789844496aa4c9ed4059aa7396d)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 14:21 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/7e52cf6b504ae91cb232bc7240b59490c62b3259...8f6d0cc4e8b8448e7e1cb35e9f41a25abe8052b8)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 14:15 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/e8bbb9c01f956e81e84fe3240f558039b665325a...9857581a714c78c9257e8d1b87c13fd8e030411d)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-11T18:14:21.617Z • IST: 11/10/2026, 23:44:21 (11:44:21 pm) 🌙_
