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
| 2026-10-12 00:12 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/714ec319be4a9300d4cc1dec425affe4faec470c...26786fcd843664e50a45a4fcce4b59dcdbcf445c)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-12 00:12 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/6d9a4abf20988b61d06f3147d01c71db760046b2...29da6647433d4becb18b0615ccdb2f39fb4b3878)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-11 22:56 UTC | @github-actions[bot] | published a release nightly-20261011-2255-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20261011-2255-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-10-11 20:47 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/9468bfb7dfa7450bd87406c37d7eb92a4e15b135...714ec319be4a9300d4cc1dec425affe4faec470c)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-11 20:47 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/0d6683626072d9f1416607b13b76f42908d3313f...6d9a4abf20988b61d06f3147d01c71db760046b2)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-10-11 20:05 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/0fa7d9921172f943b0bd44731b2529672b19e4dc...249f0202ead88d79dcd0aa7d69cc6e4e57575219)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 20:01 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/b1d98bb50b06a23d1a6cb4ab02996e374e49a993...c18d6d071e6060bb335d46bfa0c8a39d2248edab)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 19:55 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/eccfbae566a79929678c226d7166f0f8ff0bfe2b...03d93f9285200f74ee22e8ef5411d23529ee2ccd)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 19:39 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/31bd95d886d33db6f94591c24f46b1edbf707152...018ed35082d4c85e4f77efc67ea581bd3443dc6a)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 19:14 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/817f33231edab199b113ddc7e93a20c69a0b2566...e2f8138ce9a1d46f79293fc13d00475b2882a1c3)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 19:11 UTC | @bniladridas | pushed ([diff](https://github.com/coccinella-labs/agentware/compare/8b04b20065c168c780199ff2bd5b868349bf89f0...817f33231edab199b113ddc7e93a20c69a0b2566)) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 19:03 UTC | @github-actions[bot] | created [a thread](https://github.com/coccinella-labs/agentware/issues/113) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 19:00 UTC | @github-actions[bot] | created [a thread](https://github.com/coccinella-labs/agentware/issues/113) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 18:58 UTC | @github-actions[bot] | labeled PR [#156](https://github.com/coccinella-labs/agentware/pull/156) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-10-11 18:58 UTC | @bniladridas | deleted branch `test-cla-bot-2` | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
<!-- ORG_ACTIVITY:END -->

[View all repositories](https://github.com/orgs/coccinella-labs/repositories) · [Project catalog](https://coccinella-labs.github.io)


_Last updated: 2026-10-12T01:29:16.492Z • IST: 12/10/2026, 06:59:16 (6:59:16 am)_
