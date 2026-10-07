<p align="center">
  <img src="https://raw.githubusercontent.com/coccinella-labs/.github/main/profile/logo.png" alt="Coccinella Labs" width="600">
</p>

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
- [stat](https://huggingface.co/datasets/harpertoken/stat) - macOS system telemetry, 6,190 rows.
- [sandbox-lifecycle](https://huggingface.co/datasets/coccinella-labs/sandbox-lifecycle) - Controlled sandbox event sequences, v0 and v1ord configs.

Training sources live in [harpertoken](https://github.com/coccinella-labs/harpertoken) (QA), [rl](https://github.com/coccinella-labs/rl) (CartPole), and the private `mark`, `wear`, `tone`, `fuse`, `move`, and `flow` preservation repos.

## Apps and utilities

Standalone tools outside the four systems.

- [browser](https://github.com/coccinella-labs/browser) - Flutter desktop browser for macOS, Windows, and Linux.
- [clipb](https://github.com/coccinella-labs/clipb) - A lightweight clipboard utility for developers.
- [license](https://github.com/coccinella-labs/license) - Shared legal and license documents for the organization.

## Org activity

<!-- ORG_ACTIVITY:START -->
| Date | Actor | Activity | Repo |
| --- | --- | --- | --- |
| 2026-10-07 08:59 UTC | @bniladridas | published a release v1.0.0 ([link](https://github.com/coccinella-labs/sandbox-lifecycle/releases/tag/v1.0.0)) | [coccinella-labs/sandbox-lifecycle](https://github.com/coccinella-labs/sandbox-lifecycle) |
| 2026-10-07 03:51 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/72ba1f75a87bb63313ff0d4c98fe57350e13fcf1...78ba1cb72ee0eeb3a3be6f706d495ba29dcac626)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-07 03:08 UTC | @github-actions[bot] | published a release nightly-51f83193e734ed6ab28f9a2ce02e1838b0848566-285.1 ([link](https://github.com/coccinella-labs/harper/releases/tag/nightly-51f83193e734ed6ab28f9a2ce02e1838b0848566-285.1)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-10-07 00:33 UTC | @dependabot[bot] | deleted branch `dependabot/pip/ruff-0.16.10` | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-07 00:33 UTC | @dependabot[bot] | created [a thread](https://github.com/coccinella-labs/.github/pull/58) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-07 00:33 UTC | @github-actions[bot] | created [a thread](https://github.com/coccinella-labs/.github/pull/58) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-07 00:33 UTC | @github-actions[bot] | closed PR [#58](https://github.com/coccinella-labs/.github/pull/58) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-07 00:33 UTC | @dependabot[bot] | labeled PR [#58](https://github.com/coccinella-labs/.github/pull/58) (×4) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-07 00:33 UTC | @dependabot[bot] | created branch `dependabot/pip/ruff-0.16.10` | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-07 00:33 UTC | @dependabot[bot] | opened PR [#58](https://github.com/coccinella-labs/.github/pull/58) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-06 23:30 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/c358edb426df836fb6fc0d60e9e9206fc06ec3cf...72ba1f75a87bb63313ff0d4c98fe57350e13fcf1)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-06 23:04 UTC | @github-actions[bot] | published a release nightly-20261006-2304-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20261006-2304-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-10-06 22:18 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/dec955b52f2a88be887ef40be7a1cd9ae68acd62...c7cb057e86976161f0aad22d79b2df5317189f9a)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-06 21:05 UTC | @bniladridas | created branch `main` | [coccinella-labs/sandbox-lifecycle](https://github.com/coccinella-labs/sandbox-lifecycle) |
| 2026-10-06 17:54 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/0928092f32c3b0bd82f9a9e6920b32c7753b7324...dec955b52f2a88be887ef40be7a1cd9ae68acd62)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-07T09:41:41.609Z • IST: 7/10/2026, 15:11:41 (3:11:41 pm)_
