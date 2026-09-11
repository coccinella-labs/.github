import fs from "node:fs/promises";

const ORG =
  process.env.ORG_NAME ||
  process.env.GITHUB_REPOSITORY_OWNER ||
  process.env.GITHUB_ACTOR;
const OUTPUT_FILE = process.env.OUTPUT_FILE || "profile/README.md";
const MAX_ITEMS = Number.parseInt(process.env.MAX_ITEMS || "15", 10);
const EXCLUDE_TYPES = new Set(
  (process.env.EXCLUDE_TYPES || "WatchEvent")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean),
);
const EXCLUDE_ACTORS = new Set(
  (process.env.EXCLUDE_ACTORS || "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean),
);
const EXCLUDE_BOTS =
  (process.env.EXCLUDE_BOTS || "false").toLowerCase() === "true";

const TOKEN = process.env.GITHUB_TOKEN || process.env.TOKEN;

if (!ORG) {
  throw new Error("ORG_NAME (or GITHUB_REPOSITORY_OWNER) is required.");
}
if (!TOKEN) {
  throw new Error("GITHUB_TOKEN (or TOKEN) is required.");
}

function apiHeaders() {
  return {
    Authorization: `Bearer ${TOKEN}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "update-org-activity",
  };
}

function repoUrl(repoFullName) {
  return `https://github.com/${repoFullName}`;
}

function pullRequestUrl(repoFullName, pr) {
  if (pr?.html_url) return pr.html_url;
  if (repoFullName && pr?.number) return `${repoUrl(repoFullName)}/pull/${pr.number}`;
  return repoFullName ? `${repoUrl(repoFullName)}/pulls` : "";
}

function issueUrl(repoFullName, issue) {
  if (issue?.html_url) return issue.html_url;
  if (repoFullName && issue?.number) return `${repoUrl(repoFullName)}/issues/${issue.number}`;
  return repoFullName ? `${repoUrl(repoFullName)}/issues` : "";
}

function yyyyMmDd(isoString) {
  try {
    return new Date(isoString).toISOString().slice(0, 10);
  } catch {
    return "";
  }
}

function formatDateTime(isoString) {
  try {
    const d = new Date(isoString);
    if (Number.isNaN(d.getTime())) return yyyyMmDd(isoString);
    // YYYY-MM-DD HH:MM UTC keeps rows sortable at a glance.
    return `${d.toISOString().slice(0, 10)} ${d.toISOString().slice(11, 16)} UTC`;
  } catch {
    return yyyyMmDd(isoString);
  }
}

function escapeMarkdown(text, maxLen = 60) {
  let s = String(text).replace(/[\[\]]/g, "\\$&").replace(/\n/g, " ").trim();
  if (s.length > maxLen) s = `${s.slice(0, maxLen - 1).trimEnd()}…`;
  return s;
}

function escapeTableCell(text) {
  return String(text).replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function activityRow(date, actor, activity, repo) {
  return `| ${date} | ${escapeTableCell(actor)} | ${escapeTableCell(activity)} | ${repo} |`;
}

function eventToLine(event) {
  const date = formatDateTime(event.created_at);
  const actor = event.actor?.login ? `@${event.actor.login}` : "someone";
  const repoFullName = event.repo?.name || "";
  const repoLink = repoFullName ? `[${repoFullName}](${repoUrl(repoFullName)})` : "a repo";

  const type = event.type;
  const payload = event.payload || {};

  if (type === "PushEvent") {
    const commitsArr = Array.isArray(payload.commits) ? payload.commits : [];
    const count =
      Number.isInteger(payload.distinct_size) && payload.distinct_size > 0
        ? payload.distinct_size
        : Number.isInteger(payload.size) && payload.size > 0
          ? payload.size
          : commitsArr.length;
    const head = payload.head;
    const before = payload.before;

    let targetUrl = repoFullName ? `${repoUrl(repoFullName)}/commits` : "";
    if (repoFullName && head && before && head !== before) {
      targetUrl = `${repoUrl(repoFullName)}/compare/${before}...${head}`;
    } else if (repoFullName && head) {
      targetUrl = `${repoUrl(repoFullName)}/commit/${head}`;
    }

    const commitsText =
      count === 1 ? "1 commit" : count > 1 ? `${count} commits` : "";
    const activity = targetUrl
      ? commitsText
        ? `pushed ${commitsText} ([diff](${targetUrl}))`
        : `pushed ([diff](${targetUrl}))`
      : commitsText
        ? `pushed ${commitsText}`
        : "pushed";
    return activityRow(date, actor, activity, repoLink);
  }

  if (type === "PullRequestEvent" && payload.pull_request) {
    const action = payload.action || "updated";
    const pr = payload.pull_request;
    const prNumber = pr.number ? `#${pr.number}` : "";
    const title = pr.title ? `: ${escapeMarkdown(pr.title)}` : "";
    const url = pullRequestUrl(repoFullName, pr);
    return activityRow(date, actor, `${action} PR [${prNumber}${title}](${url})`, repoLink);
  }

  if (type === "IssuesEvent" && payload.issue) {
    const action = payload.action || "updated";
    const issue = payload.issue;
    const issueNumber = issue.number ? `#${issue.number}` : "";
    const title = issue.title ? `: ${escapeMarkdown(issue.title)}` : "";
    const url = issueUrl(repoFullName, issue);
    return activityRow(date, actor, `${action} issue [${issueNumber}${title}](${url})`, repoLink);
  }

  if (type === "IssueCommentEvent" && payload.comment) {
    const action = payload.action || "commented on";
    const comment = payload.comment;
    const issueUrl = payload.issue?.html_url || payload.pull_request?.html_url || comment.html_url;
    return activityRow(date, actor, `${action} [a thread](${issueUrl})`, repoLink);
  }

  if (type === "ReleaseEvent" && payload.release) {
    const action = payload.action || "published";
    const release = payload.release;
    const tag = release.tag_name ? ` ${escapeMarkdown(release.tag_name)}` : "";
    return activityRow(date, actor, `${action} a release${tag} ([link](${release.html_url}))`, repoLink);
  }

  if (type === "ForkEvent" && payload.forkee?.html_url) {
    return activityRow(
      date,
      actor,
      `forked to [${escapeMarkdown(payload.forkee.full_name || "a fork")}](${payload.forkee.html_url})`,
      repoLink,
    );
  }

  if (type === "PublicEvent") {
    return activityRow(date, actor, "made public", repoLink);
  }

  if (type === "CreateEvent") {
    const refType = payload.ref_type || "ref";
    const ref = payload.ref ? ` \`${escapeMarkdown(payload.ref, 50)}\`` : "";
    return activityRow(date, actor, `created ${escapeMarkdown(refType, 20)}${ref}`, repoLink);
  }

  if (type === "DeleteEvent") {
    const refType = payload.ref_type || "ref";
    const ref = payload.ref ? ` \`${escapeMarkdown(payload.ref, 50)}\`` : "";
    return activityRow(date, actor, `deleted ${escapeMarkdown(refType, 20)}${ref}`, repoLink);
  }

  // Fallback: keep it short and still link to the repo.
  return activityRow(date, actor, escapeMarkdown(type), repoLink);
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: apiHeaders() });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`GitHub API ${res.status} for ${url}${body ? `: ${body}` : ""}`);
  }
  return res.json();
}

async function fetchOrgEvents() {
  const perPage = 100;
  const pages = [1, 2, 3]; // headroom for filtering + collapsing bursts
  const all = [];

  for (const page of pages) {
    const url = `https://api.github.com/orgs/${encodeURIComponent(ORG)}/events?per_page=${perPage}&page=${page}`;
    const events = await fetchJson(url);
    if (!Array.isArray(events) || events.length === 0) break;
    all.push(...events);
    if (events.length < perPage) break;
    if (all.length >= perPage * 2) break;
  }
  return all;
}

function updateReadme(original, activityLines) {
  const start = "<!-- ORG_ACTIVITY:START -->";
  const end = "<!-- ORG_ACTIVITY:END -->";
  const updatedTag = "<!-- ORG_ACTIVITY_UPDATED -->";
  const now = new Date();
  const updatedAt = now.toISOString();
  const updatedAtIST = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", hour12: false });
  const updatedAtIST12 = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", hour12: true, hour: "numeric", minute: "2-digit", second: "2-digit" });
  const hourIST = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", hour: "numeric", hour12: false }).padStart(2, "0");
  const hourNum = Number.parseInt(hourIST, 10);
  const emoji = hourNum >= 18 || hourNum < 6 ? " 🌙" : "";
  const istLine = `_Last updated: ${updatedAt} • IST: ${updatedAtIST} (${updatedAtIST12})${emoji}_`;
  const updateTimestamp = (text) => {
    if (text.includes(updatedTag)) return text.replace(updatedTag, updatedAt);
    return text
      .replace(
        /(_Last updated:.*?\d{4}-\d{2}-\d{2}T[0-9:.]+Z.*?_)/g,
        istLine,
      );
  };

  if (!original.includes(start) || !original.includes(end)) {
    const section = [
      "## Org activity",
      "",
      start,
      ...activityLines,
      end,
      "",
      istLine,
      "",
    ].join("\n");
    return updateTimestamp(`${original.trimEnd()}\n\n${section}`);
  }

  const before = original.slice(0, original.indexOf(start) + start.length);
  const after = original.slice(original.indexOf(end));
  const next = `${before}\n${activityLines.join("\n")}\n${after}`;
  return updateTimestamp(next);
}

function shouldExclude(event) {
  if (EXCLUDE_TYPES.has(event.type)) return true;
  const login = event.actor?.login || "";
  if (EXCLUDE_BOTS && login.endsWith("[bot]")) return true;
  if (login && EXCLUDE_ACTORS.has(login.toLowerCase())) return true;
  return false;
}

function dedupeKey(event) {
  const actor = event.actor?.login || "someone";
  const repo = event.repo?.name || "";
  const type = event.type || "";
  const payload = event.payload || {};
  const action = payload.action || "";
  const num =
    payload.pull_request?.number ??
    payload.issue?.number ??
    payload.pull_request?.id ??
    payload.issue?.id ??
    "";
  // Collapse burst spam like 4x "labeled PR #14" into one row.
  // Only collapse repeatable actions; opened/closed/merged stay separate
  // unless fully identical.
  const collapsible = new Set([
    "labeled",
    "unlabeled",
    "assigned",
    "unassigned",
    "review_requested",
    "review_request_removed",
  ]);
  if (collapsible.has(action) && num !== "") {
    return `${actor}|${repo}|${type}|${action}|${num}`;
  }
  return `${event.id || ""}|${actor}|${repo}|${type}|${action}|${num}`;
}

function withCount(line, count) {
  if (count <= 1) return line;
  // Insert " (×N)" at end of Activity cell: | date | actor | activity | repo |
  const parts = line.split(" | ");
  if (parts.length < 4) return line;
  parts[2] = `${parts[2]} (×${count})`;
  return parts.join(" | ");
}

const allEvents = await fetchOrgEvents();
// API should already be newest-first, but sort explicitly so the
// date column never looks out of order.
allEvents.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
const grouped = new Map(); // key -> { line, count }
for (const ev of allEvents) {
  if (shouldExclude(ev)) continue;
  const key = dedupeKey(ev);
  const existing = grouped.get(key);
  if (existing) {
    existing.count += 1;
    continue;
  }
  const line = eventToLine(ev);
  if (!line) continue;
  grouped.set(key, { line, count: 1 });
}
const lines = [...grouped.values()]
  .slice(0, MAX_ITEMS)
  .map(({ line, count }) => withCount(line, count));

if (lines.length === 0) {
  lines.push("| - | - | _No recent public activity found._ | - |");
}

const current = await fs.readFile(OUTPUT_FILE, "utf8");
const activityTable = [
  "| Date | Actor | Activity | Repo |",
  "| --- | --- | --- | --- |",
  ...lines,
];
const next = updateReadme(current, activityTable);

if (next !== current) {
  await fs.writeFile(OUTPUT_FILE, next, "utf8");
}
