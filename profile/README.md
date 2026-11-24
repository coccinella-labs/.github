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
| 2026-11-23 20:54 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/vesper/compare/c14ffcb87d1e424f9c907668821a743e9d98ec8c...fd29bf0536e5203c663cbe1b192dded4254391a2)) | [coccinella-labs/vesper](https://github.com/coccinella-labs/vesper) |
| 2026-11-23 20:46 UTC | @github-actions[bot] | opened PR [#3](https://github.com/coccinella-labs/l2/pull/3) | [coccinella-labs/l2](https://github.com/coccinella-labs/l2) |
| 2026-11-23 17:21 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/5e4c9a37d76be887f6697d5780801ed4c35d5bb6...7b0877a2ef51910b425d0f81c8cdcff85ad20eae)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-11-23 13:27 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/d2ad85b1471f614f21232556a5bef1c50ff54a62...e7749c6ad3838aec651c77cf060df461e6e4c57d)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-11-23 13:10 UTC | @github-actions[bot] | published a release nightly-20261123 ([link](https://github.com/coccinella-labs/diff-mac/releases/tag/nightly-20261123)) | [coccinella-labs/diff-mac](https://github.com/coccinella-labs/diff-mac) |
| 2026-11-23 06:10 UTC | @dependabot[bot] | labeled PR [#973](https://github.com/coccinella-labs/harper/pull/973) (×2) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-11-23 06:10 UTC | @dependabot[bot] | opened PR [#973](https://github.com/coccinella-labs/harper/pull/973) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-11-23 06:10 UTC | @dependabot[bot] | created branch `dependabot/cargo/cargo-minor-patch-d1fbb20556` | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-11-23 06:09 UTC | @dependabot[bot] | created [a thread](https://github.com/coccinella-labs/harper/pull/971) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-11-23 06:06 UTC | @dependabot[bot] | closed PR [#971](https://github.com/coccinella-labs/harper/pull/971) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-11-23 05:43 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/88622e878d4b39b97fed0ab1be05498b4029ece3...5e4c9a37d76be887f6697d5780801ed4c35d5bb6)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-11-23 04:33 UTC | @github-actions[bot] | published a release nightly-c220e923415860999ebe71127ffe11c5573da97a-332.1 ([link](https://github.com/coccinella-labs/harper/releases/tag/nightly-c220e923415860999ebe71127ffe11c5573da97a-332.1)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-11-23 03:26 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/.github/compare/8bd9a8cf73d7a01fe1345fde1e5a5edc998cbcd5...d2ad85b1471f614f21232556a5bef1c50ff54a62)) | [coccinella-labs/.github](https://github.com/coccinella-labs/.github) |
| 2026-11-23 01:41 UTC | @coccinella-labs-harper[bot] | labeled issue [#972: 2 advisory ignore entries no longer match anything in `Carg…](https://github.com/coccinella-labs/harper/issues/972) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-11-23 01:41 UTC | @zyl71 | opened issue [#972: 2 advisory ignore entries no longer match anything in `Carg…](https://github.com/coccinella-labs/harper/issues/972) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
<!-- ORG_ACTIVITY:END -->

</details>

<br>

<p align="center">
  <!-- LAST_UPDATED:START --><sub>Last updated: 2026-11-24</sub><!-- LAST_UPDATED:END -->
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
