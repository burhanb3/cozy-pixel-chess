# Codex Workflow

Future Codex sessions should work in small, careful phases.

## Session Steps

1. Read `AGENTS.md` first.
2. Read the docs relevant to the current task.
3. Keep the task scoped.
4. Do not implement multiple large systems at once.
5. Preserve the asset-based UI model.
6. Run `npm run build` after changes.
7. Run `npm run lint` when relevant.
8. Summarize files changed, what works, known limitations, and placeholders.

## Task Discipline

- Keep main branch stable.
- Recommend feature branches for major features.
- Leave TODOs clearly when work is intentionally deferred.
- Do not add multiplayer, shop, puzzle mode, auth, or payments unless the task is specifically for that phase.
- Do not drift into generic SaaS UI patterns.

## Reporting

Every completion report should mention:

- What changed.
- What works.
- What is placeholder.
- Commands run and whether they passed.
- Recommended next prompt or next phase.
