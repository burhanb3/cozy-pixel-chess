# AGENTS.md

This is the most important instruction file for future Codex sessions in this repository.

## Project Identity

Cozy Pixel Chess is a cozy pixel-art chess game, not a generic app shell. The experience should feel like a charming themed room where chess happens: warm, readable, soft, collectible, and beginner-friendly.

## Visual Direction

- Build toward cozy Imagen-style pixel-art chess interface references.
- Use modular game UI layers: background, board frame, board squares, panels, buttons, avatars, decor, particles, and sounds.
- The first theme is Rainy Cafe: dark brown, warm cream, muted blue, soft gold, rainy window atmosphere.
- Use CSS placeholders only until proper PNG/WebP/SVG/game assets are created.

## Strong Do-Not Rules

- Do not make this look like a SaaS dashboard, admin panel, landing page, or corporate web app.
- Do not recreate full reference mockups as one flat background image.
- Do not bake dynamic UI text into images.
- Do not overbuild online multiplayer, shop, economy, auth, payments, or puzzle systems before their phase.
- Do not add real copyrighted art assets.
- Do not introduce large libraries unless the feature truly needs them.

## Asset-Based UI Rule

Every visual system should assume assets can be swapped later without rewriting React components. Theme packs should own asset slot paths and style tokens. Components should consume theme data instead of hardcoding theme-specific assumptions where practical.

## Architecture Rules

- Keep React components small and readable.
- Put chess rules and move helpers in `src/game`.
- Put theme models and theme packs in `src/themes`.
- Put visual shells under `src/components`.
- Prefer simple React state until a feature clearly needs a store.
- Keep future multiplayer boundaries in mind: client UI should not become the final source of truth for online games.

## Testing and Build Rules

- Run `npm run build` after code changes.
- Run `npm run lint` when linting is available and relevant.
- Add focused tests when game logic grows beyond simple wrappers around `chess.js`.
- Do not claim a feature works without running the relevant command or manual check.

## Git and Commit Expectations

- Keep commits focused.
- Do not mix foundation, multiplayer, shop, puzzle mode, and art generation in one commit.
- Do not revert user changes unless explicitly asked.
- Recommend feature branches for major features.

## How To Handle Future Tasks

1. Read this file first.
2. Read the relevant docs in `docs/`.
3. Confirm the task belongs to the current phase or call out scope drift.
4. Make the smallest useful change.
5. Keep components modular and asset-ready.
6. Run build/typecheck.
7. Summarize changed files, what works, placeholders, and limitations.

## Anti-Overbuild Warning

This project will be tempting to expand. Resist that. Private multiplayer, puzzles, theme inventory, cosmetics, animation, and sound should arrive as separate careful phases. The foundation should stay stable enough that each future phase can build on it.

## Definition Of Done

A task is done only when:

- It matches the cozy pixel-art game direction.
- It preserves asset-based modularity.
- It avoids unrelated systems.
- It keeps the app buildable.
- It documents new concepts when they affect future work.
- It leaves clear TODOs for intentionally deferred work.
