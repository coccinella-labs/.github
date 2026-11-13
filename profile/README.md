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
| 2026-11-13 00:27 UTC | @github-actions[bot] | published a release nightly-20261113-0027-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20261113-0027-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-11-12 21:13 UTC | @dependabot[bot] | created [a thread](https://github.com/coccinella-labs/metal/pull/20) | [coccinella-labs/metal](https://github.com/coccinella-labs/metal) |
| 2026-11-12 21:13 UTC | @dependabot[bot] | opened PR [#20](https://github.com/coccinella-labs/metal/pull/20) | [coccinella-labs/metal](https://github.com/coccinella-labs/metal) |
| 2026-11-12 11:29 UTC | @github-actions[bot] | published a release nightly-20261112 ([link](https://github.com/coccinella-labs/diff-mac/releases/tag/nightly-20261112)) | [coccinella-labs/diff-mac](https://github.com/coccinella-labs/diff-mac) |
| 2026-11-12 09:15 UTC | @github-actions[bot] | pushed ([diff](https://github.com/coccinella-labs/harpertoken.github.io/compare/9060bb28a212e7dd9e15eb20118501e05596df0e...c0bd66d539ad6b6c3ab506daf94a18831643a32d)) | [coccinella-labs/harpertoken.github.io](https://github.com/coccinella-labs/harpertoken.github.io) |
| 2026-11-12 08:58 UTC | @github-actions[bot] | created [a thread](https://github.com/coccinella-labs/l2/pull/2) | [coccinella-labs/l2](https://github.com/coccinella-labs/l2) |
| 2026-11-12 05:56 UTC | @dependabot[bot] | labeled PR [#969](https://github.com/coccinella-labs/harper/pull/969) (×2) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-11-12 05:56 UTC | @dependabot[bot] | created branch `dependabot/cargo/cargo-minor-patch-1ba712acfd` | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-11-12 05:56 UTC | @dependabot[bot] | opened PR [#969](https://github.com/coccinella-labs/harper/pull/969) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-11-12 05:56 UTC | @dependabot[bot] | closed PR [#968](https://github.com/coccinella-labs/harper/pull/968) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-11-12 05:56 UTC | @dependabot[bot] | created [a thread](https://github.com/coccinella-labs/harper/pull/968) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-11-12 04:45 UTC | @github-actions[bot] | published a release nightly-c220e923415860999ebe71127ffe11c5573da97a-321.1 ([link](https://github.com/coccinella-labs/harper/releases/tag/nightly-c220e923415860999ebe71127ffe11c5573da97a-321.1)) | [coccinella-labs/harper](https://github.com/coccinella-labs/harper) |
| 2026-11-12 01:32 UTC | @github-actions[bot] | published a release nightly-20261112-0132-e2916be ([link](https://github.com/coccinella-labs/diff/releases/tag/nightly-20261112-0132-e2916be)) | [coccinella-labs/diff](https://github.com/coccinella-labs/diff) |
| 2026-11-11 17:27 UTC | @bniladridas | reviewed PR [#284](https://github.com/coccinella-labs/agentware/pull/284) | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
| 2026-11-11 17:27 UTC | @bniladridas | PullRequestReviewCommentEvent | [coccinella-labs/agentware](https://github.com/coccinella-labs/agentware) |
<!-- ORG_ACTIVITY:END -->

</details>

<br>

<p align="center">
  <!-- LAST_UPDATED:START --><sub>Last updated: 2026-11-13</sub><!-- LAST_UPDATED:END -->
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
