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

- [core](https://github.com/coccinella-labs/core) - Metal-based GPU compute runtime for Apple Silicon.
- [kernels](https://github.com/coccinella-labs/kernels) - Metal compute kernels written in Swift.
- [gpucomm-fs](https://github.com/coccinella-labs/gpucomm-fs) - Binary-aware artifact store for GPU artifacts, datasets, and weights.
- [gpucomm-bot](https://github.com/coccinella-labs/gpucomm-bot) - GPU-aware GitHub App and CI automation.
- [bitinfer](https://github.com/coccinella-labs/bitinfer) - Model inference on Apple Silicon.
- [ml](https://github.com/coccinella-labs/ml) - Distributed machine learning framework.
- [mlapi](https://github.com/coccinella-labs/mlapi) - FastAPI service for model inference.
- [benchmark](https://github.com/coccinella-labs/benchmark) - Compares Whisper and Wav2Vec2 transcription quality.

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
| 2026-10-07 13:38 UTC | @bniladridas | published a release v0.1.0 ([link](https://github.com/coccinella-labs/sandbox-lifecycle/releases/tag/v0.1.0)) | [coccinella-labs/sandbox-lifecycle](https://github.com/coccinella-labs/sandbox-lifecycle) |
| 2026-10-07 10:47 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/2800c908bc225b25cc28e374e4a91c99b163940e...38492338dd50c8d390665c645364ff7911fb431e)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-07 10:24 UTC | @github-actions[bot] | published a release nightly-20261007 ([link](https://github.com/coccinella-labs/diff-mac/releases/tag/nightly-20261007)) | [coccinella-labs/diff-mac](https://github.com/coccinella-labs/diff-mac) |
| 2026-10-07 09:48 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/.github/compare/7e0c3333dd0712ab0d47fcfca87d80689854a4d2...df2397fd1ddd801c6893ca2d3232b87af8fb2ef2)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-07 09:46 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/.github/compare/aa3265334975aef44acd4062ded7bd65a5b37207...604c00b02be8e7b63770b54ca77e140add242cb0)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-07 09:44 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/.github/compare/dfe163e3aba08fd74a46e3a5599e09d427eacb92...d3d749d5cc30aca89ef0cc90626123a2ef827b82)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-07 09:41 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/e61f18017d5a6d72c3924006d9d99b298beb8563...dfe163e3aba08fd74a46e3a5599e09d427eacb92)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-07 09:41 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/.github/compare/78ba1cb72ee0eeb3a3be6f706d495ba29dcac626...e61f18017d5a6d72c3924006d9d99b298beb8563)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-07 09:37 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/ml/compare/9f1af85c1a54fec0c04fb1082730e28f7d6e17b1...3b41913066e8794f5d4742f17a5c5cbb07eab32f)) | [coccinella-labs/ml](https://github.com/coccinella-labs/ml) |
| 2026-10-07 09:35 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/gpucomm-bot/compare/8da944b477fa2c15ae3b4d9b627f09be11fa1eee...9afe3a7878fd86e780328bebb435bbcaa8ae20af)) | [coccinella-labs/gpucomm-bot](https://github.com/coccinella-labs/gpucomm-bot) |
| 2026-10-07 09:30 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/core/compare/1b12f6d0116e4e88a595ae621a7ca22a1499a28c...52b0d234feedfed96c811c45305c8c8f57de4a50)) | [coccinella-labs/core](https://github.com/coccinella-labs/core) |
| 2026-10-07 08:59 UTC | @bniladridas | published a release v1.0.0 ([link](https://github.com/coccinella-labs/sandbox-lifecycle/releases/tag/v1.0.0)) | [coccinella-labs/sandbox-lifecycle](https://github.com/coccinella-labs/sandbox-lifecycle) |
| 2026-10-07 03:51 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/72ba1f75a87bb63313ff0d4c98fe57350e13fcf1...78ba1cb72ee0eeb3a3be6f706d495ba29dcac626)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-07 03:24 UTC | @coccinella-labs-bot[bot] | pushed ([diff](https://github.com/coccinella-labs/bot/compare/80525a779fe408d766a713edb93b7ce76d67c96c...5d493160645921b0091b0430a4e98afb27e490de)) | [coccinella-labs/bot](https://github.com/coccinella-labs/bot) |
| 2026-10-07 03:08 UTC | @github-actions[bot] | published a release nightly-51f83193e734ed6ab28f9a2ce02e1838b0848566-285.1 ([link](https://github.com/coccinella-labs/harper/releases/tag/nightly-51f83193e734ed6ab28f9a2ce02e1838b0848566-285.1)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-07T21:21:06.913Z • IST: 8/10/2026, 02:51:06 (2:51:06 am) 🌙_
