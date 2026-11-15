<p align="center">
  <img src="https://raw.githubusercontent.com/coccinella-labs/.github/main/profile/logo.png" alt="Coccinella Labs" width="520">
</p>

<p align="center">
  <b>Developer tools, agent runtimes, and Apple Silicon compute.</b>
</p>

<p align="center">
  <a href="https://coccinella-labs.github.io">Catalog</a> &nbsp;·&nbsp;
  <a href="https://huggingface.co/harpertoken">Hugging Face</a> &nbsp;·&nbsp;
  <a href="https://github.com/coccinella-labs/.github/discussions">Discussions</a>
</p>

<p align="center">
  <img alt="Rust" src="https://img.shields.io/badge/Rust-000000?style=flat-square&logo=rust&logoColor=white">
  <img alt="C++20" src="https://img.shields.io/badge/C++20-00599C?style=flat-square&logo=cplusplus&logoColor=white">
  <img alt="Swift" src="https://img.shields.io/badge/Swift-F05138?style=flat-square&logo=swift&logoColor=white">
  <img alt="Go" src="https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white">
  <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white">
</p>

<br>

## What we build

<table>
<tr>
<td width="50%" valign="top">

### Agent infrastructure
Runtimes, SDKs, and bots that plan work, run it, and ship the result.

- **[harper](https://github.com/coccinella-labs/harper)**: Rust agent runtime
- **[agentware](https://github.com/coccinella-labs/agentware)**: terminal coding agent
- **[harperbot](https://github.com/coccinella-labs/harperbot)**: automated code review

<details>
<summary>More</summary>

[agent-sdk](https://github.com/coccinella-labs/agent-sdk) · [swe-agent](https://github.com/coccinella-labs/swe-agent)

</details>

</td>
<td width="50%" valign="top">

### GPU and ML compute
Metal kernels and runtimes for Apple Silicon, plus inference for local and serverless ML.

- **[core](https://github.com/coccinella-labs/core)**: Metal compute runtime
- **[kernels](https://github.com/coccinella-labs/kernels)**: Metal kernels, with a CUDA translation demo
- **[gpucomm-fs](https://github.com/coccinella-labs/gpucomm-fs)**: content-addressed GPU artifact store

<details>
<summary>More</summary>

[gpucomm-bot](https://github.com/coccinella-labs/gpucomm-bot) · [bitinfer](https://github.com/coccinella-labs/bitinfer) · [ml](https://github.com/coccinella-labs/ml) · [mlapi](https://github.com/coccinella-labs/mlapi) · [rl](https://github.com/coccinella-labs/rl) · [benchmark](https://github.com/coccinella-labs/benchmark)

</details>

</td>
</tr>
<tr>
<td width="50%" valign="top">

### Developer tooling
CLIs, SDKs, and code tools the rest of our work builds on.

- **[cli](https://github.com/coccinella-labs/cli)**: GitHub CLI extension
- **[vertex](https://github.com/coccinella-labs/vertex)**: understand software before you change it
- **[omnitype](https://github.com/coccinella-labs/omnitype)**: experimental type checker

<details>
<summary>More</summary>

[hub](https://github.com/coccinella-labs/hub) · [go-kit](https://github.com/coccinella-labs/go-kit) · [tokensdk](https://github.com/coccinella-labs/tokensdk) · [dotenv-keep](https://github.com/coccinella-labs/dotenv-keep)

</details>

</td>
<td width="50%" valign="top">

### Build and release automation
Versioning, CI, and release tooling that ships every other project.

- **[bump](https://github.com/coccinella-labs/bump)**: automated version bumps after merged PRs
- **[release-assets](https://github.com/coccinella-labs/release-assets)**: signed release assets
- **[buildanywhere](https://github.com/coccinella-labs/buildanywhere)**: one CI script set for Actions, GitLab, and CircleCI

<details>
<summary>More</summary>

[bot](https://github.com/coccinella-labs/bot) · [auto-label](https://github.com/coccinella-labs/auto-label)

</details>

</td>
</tr>
<tr>
<td colspan="2" valign="top">

### Models and datasets
Small models and the datasets behind them, published on [Hugging Face](https://huggingface.co/harpertoken). Load them with `transformers`, `datasets`, or plain HTTP.

<details>
<summary>Browse all models and datasets</summary>

| Name | Description | Data or result |
| --- | --- | --- |
| [quiz](https://huggingface.co/harpertoken/quiz) | DistilBERT extractive QA | Trained on SQuAD |
| [clue](https://huggingface.co/harpertoken/clue) | Continued QA fine-tune | 1k examples |
| [name](https://huggingface.co/harpertoken/name) | BERT named entity recognition | Trained on CoNLL-2003 |
| [talk](https://huggingface.co/harpertoken/talk) | Whisper speech recognition | |
| [chat](https://huggingface.co/harpertoken/chat) | GPT-2 conversational fine-tune | |
| [word](https://huggingface.co/harpertoken/word) | From-scratch GPT-2 | Generation collapses to end-of-text; kept as a documented artifact |
| [tiny](https://huggingface.co/harpertoken/tiny) | SmolLM 4-bit quant | MLX only |
| [pole](https://huggingface.co/harpertoken/pole) | CMA-ES linear CartPole policy | Scores 500 |
| [mark](https://huggingface.co/harpertoken/mark) | IsolationForest telemetry anomaly detection | |
| [wear](https://huggingface.co/harpertoken/wear) | CNN clothing classifier | 0.9073 on Fashion-MNIST |
| [tone](https://huggingface.co/harpertoken/tone) | CNN spoken-command classifier | 0.9116 on Speech Commands |
| [fuse](https://huggingface.co/harpertoken/fuse) | Image-caption matcher | 0.6933 on Flickr8k |
| [flow](https://huggingface.co/harpertoken/flow) | GRU sandbox-event classifier | 1.0000 where fields sit at chance |
| [move](https://huggingface.co/harpertoken/move) | CNN action classifier | 0.5046 on KTH, temporal gain over single-frame |
| [stat](https://huggingface.co/datasets/harpertoken/stat) | Dataset: macOS system telemetry | 6,190 rows |
| [sandbox-lifecycle](https://huggingface.co/datasets/coccinella-labs/sandbox-lifecycle) | Dataset: sandbox event sequences, temporal ordering benchmark | v0, v1ord, v2 configs |

Training sources are public for [harpertoken](https://github.com/coccinella-labs/harpertoken) (QA) and [rl](https://github.com/coccinella-labs/rl) (CartPole), and kept private for the rest.

</details>

</td>
</tr>
</table>

### Standalone projects

- **[browser](https://github.com/coccinella-labs/browser)**: Flutter desktop browser for macOS, Windows, and Linux
- **[clipb](https://github.com/coccinella-labs/clipb)**: clipboard utility for developers
- **[license](https://github.com/coccinella-labs/license)**: shared legal documents

<br>

## Before you file anything

| Read this | It answers |
| --- | --- |
| [About coccinella-labs](https://github.com/coccinella-labs/.github/discussions/3) | What the organization is and what it builds. |
| [Organization defaults](https://github.com/coccinella-labs/.github/discussions/42) | What `.github/` applies org-wide, and what editing it affects. |
| [Running the Git GUI locally](https://github.com/coccinella-labs/.github/discussions/29) | How to install `git-gui`, and why `pip install git-gui` fails. |
| [What lives in this repository](https://github.com/coccinella-labs/.github/discussions/2) | Shared workflows, community health files, and release history. |

<br>

<details>
<summary><b>Recent activity</b> (updated automatically)</summary>

<!-- ORG_ACTIVITY:START -->
| Date | Actor | Activity | Repo |
| --- | --- | --- | --- |
| 2026-11-15 05:06 UTC | @bniladridas | opened issue [#3: Fail the build when XNU compilation fails instead of publis…](https://github.com/coccinella-labs/xnubuild/issues/3) | [coccinella-labs/xnubuild](https://github.com/coccinella-labs/xnubuild) |
| 2026-11-15 05:04 UTC | @bniladridas | opened issue [#1: Avoid counting environment variable mentions in comments as…](https://github.com/coccinella-labs/dotenv-keep/issues/1) | [coccinella-labs/dotenv-keep](https://github.com/coccinella-labs/dotenv-keep) |
| 2026-11-15 05:04 UTC | @bniladridas | opened issue [#4: Keep report actions read-only instead of modifying every ma…](https://github.com/coccinella-labs/bot/issues/4) | [coccinella-labs/bot](https://github.com/coccinella-labs/bot) |
| 2026-11-15 05:04 UTC | @bniladridas | opened issue [#1: Prevent release automation from force-moving existing versi…](https://github.com/coccinella-labs/hub/issues/1) | [coccinella-labs/hub](https://github.com/coccinella-labs/hub) |
| 2026-11-15 05:01 UTC | @bniladridas | opened issue [#2: Validate task creation requests before adding dashboard tas…](https://github.com/coccinella-labs/ml/issues/2) | [coccinella-labs/ml](https://github.com/coccinella-labs/ml) |
| 2026-11-15 05:01 UTC | @bniladridas | opened issue [#5: Make the published CartPole checkpoint loadable through CMA…](https://github.com/coccinella-labs/rl/issues/5) | [coccinella-labs/rl](https://github.com/coccinella-labs/rl) |
| 2026-11-15 05:01 UTC | @bniladridas | opened issue [#137: Load runtime model and generation settings from config.yaml](https://github.com/coccinella-labs/mlapi/issues/137) | [coccinella-labs/mlapi](https://github.com/coccinella-labs/mlapi) |
| 2026-11-15 04:58 UTC | @bniladridas | opened issue [#163: Calculate word error rate using word-level edit distance](https://github.com/coccinella-labs/benchmark/issues/163) | [coccinella-labs/benchmark](https://github.com/coccinella-labs/benchmark) |
| 2026-11-15 04:58 UTC | @bniladridas | opened issue [#1: Handle empty inputs and invalid batch sizes in adaptive inf…](https://github.com/coccinella-labs/bitinfer/issues/1) | [coccinella-labs/bitinfer](https://github.com/coccinella-labs/bitinfer) |
| 2026-11-15 04:54 UTC | @bniladridas | opened issue [#21: Keep pull-request creation inside the documented sandbox ex…](https://github.com/coccinella-labs/swe-agent/issues/21) | [coccinella-labs/swe-agent](https://github.com/coccinella-labs/swe-agent) |
| 2026-11-15 04:54 UTC | @bniladridas | opened issue [#20: Constrain repository names to the configured clone root](https://github.com/coccinella-labs/swe-agent/issues/20) | [coccinella-labs/swe-agent](https://github.com/coccinella-labs/swe-agent) |
| 2026-11-15 04:52 UTC | @bniladridas | opened issue [#13: Escape JSON strings and object keys in canonical tool-call…](https://github.com/coccinella-labs/agent-sdk/issues/13) | [coccinella-labs/agent-sdk](https://github.com/coccinella-labs/agent-sdk) |
| 2026-11-15 04:52 UTC | @bniladridas | opened issue [#12: Serialize reconstructed tool calls instead of interpolating…](https://github.com/coccinella-labs/agent-sdk/issues/12) | [coccinella-labs/agent-sdk](https://github.com/coccinella-labs/agent-sdk) |
| 2026-11-15 04:51 UTC | @bniladridas | opened issue [#30: Make skipped CI stages visible when no supported project ty…](https://github.com/coccinella-labs/buildanywhere/issues/30) | [coccinella-labs/buildanywhere](https://github.com/coccinella-labs/buildanywhere) |
| 2026-11-15 04:51 UTC | @bniladridas | opened issue [#29: Do not treat Python lint failures as a missing flake8 insta…](https://github.com/coccinella-labs/buildanywhere/issues/29) | [coccinella-labs/buildanywhere](https://github.com/coccinella-labs/buildanywhere) |
<!-- ORG_ACTIVITY:END -->

</details>

<br>

<p align="center">
  <!-- LAST_UPDATED:START --><sub>Last updated: 2026-11-15</sub><!-- LAST_UPDATED:END -->
</p>

<!--
Maintainer notes (not rendered):
- Pin state lives in GitHub's web UI, not in git. Four global pins are allowed
  and four per category; the intended global set is the four "Before you file anything"
  discussions: #3, #42, #29, #2. This comment is the only durable record.
- The ORG_ACTIVITY markers are written by automation. Paste the generated table
  between them; do not rename the markers.
- The "Last updated" date is also generated. Keep it between the
  LAST_UPDATED:START/END markers so scripts/update-org-activity.mjs can find it.
- Optional dark-mode logo: wrap the hero <img> in <picture> with a
  <source media="(prefers-color-scheme: dark)" srcset="logo-dark.png">.
-->
