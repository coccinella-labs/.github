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
| 2026-10-08 19:54 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/1d1cec5d06a64a8f9ba340fa9a1f556a39642279...e216b3ff0a17a27fd89c78ec413348930d5aff4d)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-08 19:54 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/.github/compare/ba3c79791b5791ef7e68e090797d4cc422791c70...1d1cec5d06a64a8f9ba340fa9a1f556a39642279)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-08 19:52 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/bitinfer/compare/be45992da3ec64ff1706ce44ab9ad5a5d618974f...decf08eca1d0e4734afa7e61b04f2208b92af43c)) | [coccinella-labs/bitinfer](https://github.com/coccinella-labs/bitinfer) |
| 2026-10-08 17:16 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/1e1aeabc5897e6e9f970cd733404c04b98b095ac...be4896722bbfce4b3d5dc25296847492aae1c5a6)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-08 11:15 UTC | @dependabot[bot] | deleted branch `dependabot/npm_and_yarn/types/node-26.6.3` | [coccinella-labs/release-notes](https://github.com/coccinella-labs/release-notes) |
| 2026-10-08 11:15 UTC | @dependabot[bot] | created [a thread](https://github.com/coccinella-labs/release-notes/pull/10) | [coccinella-labs/release-notes](https://github.com/coccinella-labs/release-notes) |
| 2026-10-08 11:14 UTC | @dependabot[bot] | labeled PR [#11](https://github.com/coccinella-labs/release-notes/pull/11) (×2) | [coccinella-labs/release-notes](https://github.com/coccinella-labs/release-notes) |
| 2026-10-08 11:14 UTC | @dependabot[bot] | opened PR [#11](https://github.com/coccinella-labs/release-notes/pull/11) | [coccinella-labs/release-notes](https://github.com/coccinella-labs/release-notes) |
| 2026-10-08 10:44 UTC | @github-actions[bot] | published a release nightly-20261008 ([link](https://github.com/coccinella-labs/diff-mac/releases/tag/nightly-20261008)) | [coccinella-labs/diff-mac](https://github.com/coccinella-labs/diff-mac) |
| 2026-10-08 10:37 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/ml/compare/9a9d58dbb4a250f3b5c20b08e64bb4da3115ae68...fce8e06882c60b748f8d26209c837edf8c14aeab)) | [coccinella-labs/ml](https://github.com/coccinella-labs/ml) |
| 2026-10-08 10:15 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/ml/compare/54fe67762311fce72c1db6c95b2d6e792d6c0ab6...4238108f368c6b0c8035ae5285ffcf2096b8e98d)) | [coccinella-labs/ml](https://github.com/coccinella-labs/ml) |
| 2026-10-08 09:57 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/54dd5c52f644340d35f66e4327197aefebdf9e63...a566184bf9d7d3b0c3c0cf77277b2add4e061af1)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-08 09:45 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/ml/compare/2ef78191ce83bf611c92983ee37d30804acc5b66...54fe67762311fce72c1db6c95b2d6e792d6c0ab6)) | [coccinella-labs/ml](https://github.com/coccinella-labs/ml) |
| 2026-10-08 09:16 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/63de8191ee47784c345d2e8b9d03545f07b376a8...0bd8f24db292fc478e229fe6bf4620c702461f28)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-10-08 04:12 UTC | @dependabot[bot] | created [a thread](https://github.com/coccinella-labs/gh-tag/pull/9) | [coccinella-labs/gh-tag](https://github.com/coccinella-labs/gh-tag) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-08T19:57:38.656Z • IST: 9/10/2026, 01:27:38 (1:27:38 am) 🌙_
