#!/usr/bin/env bash
# Read-only audit of coccinella-labs repository defaults.
#
# Lists every repository in the org with its default branch, total branch
# count, last push date, and how far the default branch sits behind the
# repo's newest commit. That last column is the useful one: it surfaces a
# default branch that has fallen behind real work, which is how the
# tokensdk and molplatform defaults were found.
#
# Makes no writes of any kind. Review the CSV before changing anything.
#
# Usage: scripts/audit-org-defaults.sh
#
# A full run over ~156 repos takes several minutes and roughly three API
# calls per repo.

set -euo pipefail

ORG="coccinella-labs"

if ! command -v gh >/dev/null 2>&1; then
  echo "gh is required" >&2
  exit 1
fi

printf 'org,repo,default_branch,total_branches,last_push,default_behind_newest,archived\n'

gh api "orgs/${ORG}/repos?per_page=100&type=public" --paginate --jq '.[] | [
  .name,
  .default_branch,
  (.pushed_at // ""),
  .archived
] | @tsv' |
while IFS=$'\t' read -r repo default last_push archived; do
  branches=$(gh api "repos/${ORG}/${repo}/branches?per_page=100" --paginate --jq '.[].name' 2>/dev/null | wc -l | tr -d ' ')

  # How far behind the default branch is the repo's newest commit, if any.
  behind="n/a"
  newest=$(gh api "repos/${ORG}/${repo}/commits?per_page=100" --paginate --jq '.[].sha' 2>/dev/null | head -1 || true)
  if [ -n "$newest" ]; then
    compare=$(gh api "repos/${ORG}/${repo}/compare/${default}...${newest}" --jq '.behind_by' 2>/dev/null || echo "n/a")
    [ -n "$compare" ] && behind="$compare"
  fi

  printf '%s,%s,%s,%s,%s,%s,%s\n' \
    "$ORG" "$repo" "$default" "$branches" "$last_push" "$behind" "$archived"
done
