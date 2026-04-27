# LeetCode Solutions

This repository is organized around problems first.
That keeps each LeetCode question in a single place and makes daily updates easier.

## Structure

```text
problems/
  0011-container-with-most-water/
    README.md
    notes.md
    js/solution.js
    cs/Solution.cs

notes/
  fundamentals/

logs/
  daily-2026.md

templates/
  problem/

scripts/
  new-problem.sh
```

## Daily Flow

1. Create a new problem folder with `./scripts/new-problem.sh <id> "<title>"`.
2. Write the solution in `js/` and or `cs/`.
3. Add short reasoning to that problem's `README.md`.
4. If needed, keep longer notes in `notes.md`.

## Conventions

- One problem per folder.
- Problem folders use `0000-title-slug` format.
- JavaScript solutions live in `js/solution.js`.
- C# solutions live in `cs/Solution.cs`.
- Shared study material lives under `notes/`.
