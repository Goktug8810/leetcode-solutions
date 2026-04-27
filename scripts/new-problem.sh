#!/usr/bin/env bash

set -euo pipefail

if [[ $# -lt 2 ]]; then
  echo "Usage: ./scripts/new-problem.sh <id> \"<title>\" [js|cs|both]"
  exit 1
fi

problem_id_raw="$1"
shift
title="$1"
shift || true
language_target="${1:-both}"

problem_id="$(printf "%04d" "$problem_id_raw")"
slug="$(
  printf '%s' "$title" \
    | tr '[:upper:]' '[:lower:]' \
    | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//'
)"

problem_dir="problems/${problem_id}-${slug}"

if [[ -e "$problem_dir" ]]; then
  echo "Problem already exists: $problem_dir"
  exit 1
fi

mkdir -p "$problem_dir"
cp templates/problem/README.md "$problem_dir/README.md"
cp templates/problem/notes.md "$problem_dir/notes.md"
sed -i '' \
  -e "s/0000/${problem_id}/g" \
  -e "s/Problem Title/${title}/g" \
  "$problem_dir/README.md"

case "$language_target" in
  js)
    mkdir -p "$problem_dir/js"
    cp templates/problem/js/solution.js "$problem_dir/js/solution.js"
    ;;
  cs)
    mkdir -p "$problem_dir/cs"
    cp templates/problem/cs/Solution.cs "$problem_dir/cs/Solution.cs"
    ;;
  both)
    mkdir -p "$problem_dir/js" "$problem_dir/cs"
    cp templates/problem/js/solution.js "$problem_dir/js/solution.js"
    cp templates/problem/cs/Solution.cs "$problem_dir/cs/Solution.cs"
    ;;
  *)
    echo "Language must be one of: js, cs, both"
    exit 1
    ;;
esac

year="$(date +%Y)"
month="$(date +%Y-%m)"
log_file="logs/daily-${year}.md"
today="$(date +%F)"

if [[ ! -f "$log_file" ]]; then
  {
    echo "# Daily Log ${year}"
    echo
    echo "## ${month}"
    echo
  } > "$log_file"
fi

if ! grep -q "^## ${month}$" "$log_file"; then
  {
    echo
    echo "## ${month}"
    echo
  } >> "$log_file"
fi

printf -- "- %s: %s\n" "$today" "${problem_id}. ${title}" >> "$log_file"

echo "Created $problem_dir"
