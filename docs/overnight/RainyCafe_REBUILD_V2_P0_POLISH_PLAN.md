# Rainy Cafe Rebuild V2 P0 Polish Plan

Date: 2026-05-17
Branch: `goal/rainy-cafe-reference-rebuild-v2`

## Scope

This is a controlled P0 visual polish pass on the existing rebuild v2 result. It does not restart the rebuild, create a new branch, add gameplay features, or change chess rules.

## Exact P0 Issues To Fix

1. Piece sprites still have dirty edges and unfinished-looking silhouettes.
2. Some live UI text still reads as web text placed on assets.
3. Captured trays still feel too empty because the empty state is only a plain horizontal mark.
4. Board coordinates are improved, but need stronger embedded frame treatment.
5. `Analyze Position` shows a duplicate magnifier: one live CSS icon plus one baked into the button frame.
6. Move history empty state, coach bubble, button labels, hint badge, and quote text need a final cohesion polish.

## Weakest Piece Sprites

P0 cleanup targets:

- `white-b-reference-v2.png`: weakest; missing/dirty interior detail and uneven silhouette.
- `white-q-reference-v2.png`: crown edge and lower contour feel thin/dirty.
- `white-n-reference-v2.png`: outline needs stronger cleanup at in-game scale.
- `white-k-reference-v2.png`: readable, but cross/upper edge needs cleanup.
- `black-b-reference-v2.png`: dark silhouette is readable but muddy around edges.
- `black-n-reference-v2.png`: head outline is good but edge noise remains.
- `black-q-reference-v2.png`: crown has strong reference character but some noisy pixels.

Secondary audit targets:

- pawns and rooks mostly work, but should receive edge smoothing and baseline consistency if the cleanup script can do it safely.

## UI Text Regions That Still Feel Too Web-Like

- turn plaque label
- player names and side labels
- rating/timer pills
- captured tray title
- move history title and empty state
- analyze button label
- coach bubble text
- bottom button labels
- quote banner text

## Panels / Controls Needing Polish

- captured trays: soften empty state and make it look intentional
- analyze button: remove duplicate live magnifier and tighten text alignment
- move history: warmer, softer empty state and title treatment
- coach bubble: more compact text treatment
- bottom buttons: label/icon alignment and hint badge integration
- quote banner: stronger premium text treatment

## Safe Execution Order

1. Capture a current P0 audit screenshot at 1440x900.
2. Clean the existing piece sprite sheets and individual piece files without changing gameplay code.
3. Verify pieces at board size and capture `p0-polish-step-02-piece-cleanup.png`.
4. Polish coordinates and typography in CSS.
5. Polish captured trays, analyze button, move history, coach bubble, buttons, hint badge, and quote banner.
6. Capture typography/panel and final screenshots.
7. Run `npm run typecheck`, `npm run lint`, `npm run build`.
8. Run manual gameplay smoke, including a simple capture to verify captured sprites.
9. Write `RainyCafe_REBUILD_V2_P0_POLISH_LOG.md`.
10. Commit and push the current branch.

## Stop Conditions

Stop and document if:

- piece cleanup makes silhouettes worse
- typography changes reduce readability
- panel polish becomes cluttered
- gameplay clickability or move history breaks
