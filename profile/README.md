<p align="center">
  <img src="https://raw.githubusercontent.com/coccinella-labs/.github/main/profile/logo.png" alt="Coccinella Labs" width="600">
</p>

coccinella-labs builds small developer tools and the systems behind them: agent runtimes, GPU and machine learning compute, runtimes and developer tooling, and the automation that ships it all. Published work is public; training sources for the Hub models are kept private.

Work falls into five systems below, plus a short list of standalone tools at the end. The catalog at [coccinella-labs.github.io](https://coccinella-labs.github.io) lists every code project with its language, type, license, and install command.

## Agent infrastructure

Harnesses, runtimes, and bots that plan work, execute it, and ship results.

- [harper](https://github.com/coccinella-labs/harper) - Rust agent runtime with a TUI, an HTTP API, and a sandbox.
- [agent-sdk](https://github.com/coccinella-labs/agent-sdk) - Reusable agent runtime extracted from Harper.
- [agentware](https://github.com/coccinella-labs/agentware) - AI-assisted coding tools and developer workflows.
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
| 2026-10-10 06:02 UTC | @coccinella-labs-harper[bot] | labeled issue [#926: sandbox-exec narrow deny profiles abort on macOS 27; cause…](https://github.com/coccinella-labs/harper/issues/926) (×3) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-10 06:02 UTC | @bniladridas | opened issue [#926: sandbox-exec narrow deny profiles abort on macOS 27; cause…](https://github.com/coccinella-labs/harper/issues/926) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-10 05:31 UTC | @coccinella-labs-harper[bot] | labeled issue [#925: Sandbox-exec profile omits ARM Homebrew prefix](https://github.com/coccinella-labs/harper/issues/925) (×2) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-10 05:31 UTC | @bniladridas | opened issue [#925: Sandbox-exec profile omits ARM Homebrew prefix](https://github.com/coccinella-labs/harper/issues/925) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-10 03:27 UTC | @coccinella-labs-bot[bot] | pushed ([diff](https://github.com/coccinella-labs/bot/compare/04c5317745bb95b4bb312286ddf4babbf1c79fa0...46da8c3f4a5d6f6e0523276d332ae7d9632c5f42)) | [coccinella-labs/bot](https://github.com/coccinella-labs/bot) |
| 2026-10-10 03:11 UTC | @github-actions[bot] | published a release nightly-51f83193e734ed6ab28f9a2ce02e1838b0848566-288.1 ([link](https://github.com/coccinella-labs/harper/releases/tag/nightly-51f83193e734ed6ab28f9a2ce02e1838b0848566-288.1)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-10 02:03 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/7782e4a22e268f7a39bac8a69b0bc0937478b98e...00342dabb5caa4fd94286a0997ee25b4aaefec4d)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-10 00:10 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/caff550e071912ba715a618e94640eeca2f2e70f...88dcd6bf3db6e242e32b6cdadf18ae04087f9638)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-09 23:17 UTC | @github-actions[bot] | published a release nightly-20261009-2316-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20261009-2316-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-10-09 22:13 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/b8130e8c9a4703c8a51b70ad2ea4745579d90a46...7782e4a22e268f7a39bac8a69b0bc0937478b98e)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-09 17:17 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/bc354c002df57bcb22f4b1b7045e5af68dbab365...b8130e8c9a4703c8a51b70ad2ea4745579d90a46)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-09 15:26 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/e164287f7c81c4f3323839c03a7c3a34de8dbad3...4c8c3325d154b758d4e2f14513b1792581edbe30)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-09 15:22 UTC | @bniladridas | closed issue [#1: Decide next track: GitHub App auth vs real GPU CI](https://github.com/coccinella-labs/gpucomm-bot/issues/1) | [coccinella-labs/gpucomm-bot](https://github.com/coccinella-labs/gpucomm-bot) |
| 2026-10-09 15:22 UTC | @bniladridas | created [a thread](https://github.com/coccinella-labs/gpucomm-bot/issues/1) | [coccinella-labs/gpucomm-bot](https://github.com/coccinella-labs/gpucomm-bot) |
| 2026-10-09 15:21 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/gpucomm-bot/compare/fe0798cf535431bb24eb86b631e5f6ca6f55c5e4...c98db32d9e3374a0a243e5600bb17038fa251855)) | [coccinella-labs/gpucomm-bot](https://github.com/coccinella-labs/gpucomm-bot) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-10T06:09:11.516Z • IST: 10/10/2026, 11:39:11 (11:39:11 am)_
