# Rainy Cafe Feature Pass Log

Date: 2026-05-16
Branch: `goal/overnight-rainy-cafe-pass`

## Goal

Bring the playable Rainy Cafe UI closer to `docs/references/rainy-cafe-reference.png` without changing chess rules, multiplayer scope, shop logic, puzzle logic, or dynamic text rendering.

## Attempted

- Upgraded the left player rail with a separate move-turn plaque, richer player cards, rating/timer presentation, captured trays, and a centered VS medallion.
- Reworked the right rail move history presentation and added an Analyze Position button.
- Replaced placeholder decor slot boxes with scene-supporting cafe decor, a cat mascot, a coach bubble, books, cup, chalkboard, cookies, and plant shapes.
- Reworked the bottom controls into chunkier reference-style buttons with icon identities and a centered quote.
- Added live board coordinates around the board frame.
- Added extra board frame vine/leaf accents using CSS decoration.

## Completed

- `White to move` / `Black to move` now appears in a top-left wooden plaque.
- Player cards now show avatar frame, name, side, rating, timer, and status text.
- Captured pieces UI exists and updates from live move history capture metadata.
- Move history remains dynamic and is organized as move number, White, and Black columns.
- Analyze Position button was added as a disabled future-facing control.
- Cat mascot and speech bubble were added to the lower-right panel area.
- Bottom controls now include Play, Undo, Hint, Focus, and Settings buttons.
- Bottom status quote was added: `Rainy days are perfect for quiet victories.`
- Board coordinates `a-h` and `1-8` are rendered dynamically in React/CSS.

## Improved

- The UI is closer to the approved reference composition: left info stack, central board with frame labels, parchment move history, right-side coach area, and chunky bottom controls.
- Placeholder slot feeling is reduced by removing visible `Lamp asset slot`, `Cup asset slot`, `Books asset slot`, and `Window decor slot` boxes from the app shell.
- Readability stayed acceptable at 1440x900 after the layout height was tightened.
- Existing Rainy Cafe frame, board, square, button, avatar, and room assets remain integrated through the theme system.

## Skipped

- No new chess piece sprite sheets were generated or integrated. The real piece assets do not exist yet, and replacing the current readable pieces without full sprite QA would be risky.
- No multiplayer, shop/customization, puzzle, auth, payment, or audio behavior was implemented.
- No new image assets were generated in this pass. CSS decor was used because it was safer than forcing low-quality generated assets into the branch.
- Analyze, Hint, Focus, and Settings remain visual/future controls only.

## New Assets Created

- None.

## Placeholder Boxes Removed

- `Lamp asset slot`
- `Cup asset slot`
- `Books asset slot`
- `Window decor slot`

## Screenshots

- `docs/references/visual-checks/feature-pass-step-01.png`
- `docs/references/visual-checks/feature-pass-step-02.png`
- `docs/references/visual-checks/feature-pass-step-03.png`
- `docs/references/visual-checks/rainy-cafe-feature-pass-final.png`

## Verification

- `npm run typecheck` passed.
- `npm run lint` passed.
- `npm run build` passed.
- Manual smoke test passed:
  - `e2` to `e4`
  - `e7` to `e5`
  - invalid `a2` to `a5` did not break turn
  - Undo
  - Play reset / new game behavior
  - board remained clickable
  - move history updated
  - current turn stayed correct

## Known Remaining Issues

- Player avatars are still initials inside avatar frames, not final Rainy Cafe portrait art.
- Chess pieces are still the current live glyph strategy, not production pixel-art sprite sheets.
- Captured pieces use letter tiles for readability until piece sprites exist.
- Analyze, Hint, Focus, and Settings are presentational controls only.
- Some decor is CSS-based placeholder art until production PNG/WebP assets are generated.

## Next Recommended Step

Generate or integrate the next safe asset batch: avatar portraits, captured tray/speech bubble frames, and eventually chess piece sprite sheets. Piece sprites should only land with focused QA for selected square, legal move, capture, check, last move, and contrast states.
