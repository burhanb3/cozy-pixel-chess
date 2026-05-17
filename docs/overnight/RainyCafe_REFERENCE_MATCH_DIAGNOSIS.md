# Rainy Cafe Reference Match Diagnosis

Date: 2026-05-16
Branch: `goal/overnight-rainy-cafe-pass`

Gold standard: `docs/references/rainy-cafe-reference.png`
Current branch screenshot captured before this pass: `docs/references/visual-checks/reference-match-current-start-1440.png`

## Summary

The current branch is materially better than the original scaffold, but it still does not match the approved Rainy Cafe reference closely enough. It reads as a web game UI arranged over a good background, while the reference reads as one compact illustrated game interface. The current state has real assets, but the layout, scale, player identity, spacing, and some live HTML treatments still break the illusion.

The strict pass should prioritize composition and reuse/regenerate only where the current asset quality is a clear blocker. The current assets are acceptable as a base for frames, portraits, buttons, and pieces, but several are being used at the wrong scale or in the wrong structure.

## Reference UI

- The board is the dominant center object and nearly fills the vertical middle of the scene.
- The left rail is compact: turn plaque, TeaLeaf raccoon card, captured tray, centered VS badge, MossyCat cat card, captured tray, and bottom-left decor all read as one vertical structure.
- The right rail is compact and integrated: move history is parchment-like, Analyze Position is a dark wood control directly below it, and the cat coach area sits near books and plants.
- Bottom controls are centered as five large rounded-square buttons. There is no giant full-width status module dominating the bottom.
- The quote banner sits centered below the button row as a separate object.
- Coordinates are embedded in the wooden board frame, not floating as loose web labels.
- Pieces are chunky, shaded pixel-art silhouettes with strong contrast and consistent scale.
- Environmental decor is visible and narrative: cup/cookies/chalkboard/plant on the left, rainy window/lamp on the right, books and sleeping cat on the lower right.

## Current Branch UI

- The current layout is still too spread out. The board is smaller and lower-impact than the reference.
- The left player order and names are wrong for the approved target: current top card is Moon Baker, current bottom card is Tea Sprite. The required target is TeaLeaf raccoon on top and MossyCat black cat on bottom.
- The left rail has too much vertical looseness and too many labels competing for space.
- Captured trays still show `Quiet table`, which feels placeholder-like.
- The VS badge is asset-based but too small and weak compared with the reference.
- The move history still uses `WHITE` / `BLACK` column headers. The reference uses a compact notation flow without table-heading weight.
- The bottom still has `LOCAL PLAY / A quiet table for two sides`, which the reference does not contain.
- The bottom action bar still reads as a wide full-width container, not centered controls plus a separate quote banner.
- The quote banner is attached to the right of the action bar instead of centered below the controls.
- The board coordinates are present but slightly float outside the frame rhythm and are too large/bright in places.
- Current piece sprites are better than Unicode, but they are small inside squares and less chunky than the reference pieces.
- The background contains key scene objects, but much of the left-bottom and right-bottom storytelling is hidden behind the bottom bar or too dark.

## Current Assets

Ready and worth keeping for this pass unless a direct replacement is clearly better:

- `src/assets/themes/rainy-cafe/backgrounds/rainy-room-background.png`
- `src/assets/themes/rainy-cafe/boards/board-frame.png`
- `src/assets/themes/rainy-cafe/boards/square-light.png`
- `src/assets/themes/rainy-cafe/boards/square-dark.png`
- `src/assets/themes/rainy-cafe/panels/player-panel-frame.png`
- `src/assets/themes/rainy-cafe/panels/move-history-panel-frame.png`
- `src/assets/themes/rainy-cafe/panels/captured-pieces-tray.png`
- `src/assets/themes/rainy-cafe/panels/turn-plaque-frame.png`
- `src/assets/themes/rainy-cafe/panels/vs-badge.png`
- `src/assets/themes/rainy-cafe/panels/analyze-position-button-frame.png`
- `src/assets/themes/rainy-cafe/panels/coach-comment-panel.png`
- `src/assets/themes/rainy-cafe/panels/quote-banner-frame.png`
- `src/assets/themes/rainy-cafe/buttons/button-base-normal.png`
- `src/assets/themes/rainy-cafe/buttons/button-base-hover.png`
- `src/assets/themes/rainy-cafe/buttons/button-base-pressed.png`
- `src/assets/themes/rainy-cafe/avatars/avatar-tealeaf.png`
- `src/assets/themes/rainy-cafe/avatars/avatar-mossycat.png`
- `src/assets/themes/rainy-cafe/decor/cat-mascot.png`
- `src/assets/themes/rainy-cafe/pieces/white-piece-set.png`
- `src/assets/themes/rainy-cafe/pieces/black-piece-set.png`

## Missing Assets

- Separate visible left-bottom decor cluster: cup, cookies, chalkboard, plant, small table accents.
- Separate right-top window/lamp cluster if the background does not expose the reference area strongly enough.
- Separate right-bottom books/sleeping-cat/plant cluster if the bottom UI continues to hide the background story.
- Timer pill frame and move row highlight remain planned assets, not production assets.
- True per-button color skins are missing; current buttons use one base asset plus CSS hue rotation.
- Dedicated final chess piece set is still desirable. Current sprites are acceptable for gameplay preservation but are not yet as bold as the reference.

## Weak Approximations

- Bottom buttons use asset bases but color identity is CSS filter-based, so they are not truly individual skins.
- Captured piece display uses letter tiles instead of piece sprites.
- Some icons are CSS shapes rather than production pixel-art symbols.
- Rating, timer, status pills, and move rows are still CSS-heavy.
- Environment story is mostly in the full background; the live UI does not yet layer decor clusters as modular scene assets.

## What Is Wrong In Overall Composition

- The main layout is less compact than the reference.
- The board does not dominate enough.
- The bottom bar visually spans too much width and pushes the design toward an app footer.
- Left, center, and right modules feel parallel rather than nested into one illustrated room.
- The right lower coach area is squeezed and partly hidden by the bottom bar.
- The left-bottom decor area is not presented like the reference cup/cookies/chalkboard scene.

## What Is Wrong In Scale

- Board frame should be larger relative to side panels.
- Player cards are close in asset size but arranged too loosely and text is too dense.
- VS badge should be larger and more central.
- Bottom buttons should be taller and closer to rounded-square proportions.
- Piece sprites should occupy more of each square and read chunkier.
- Move history is taller than the active move content needs at game start.

## What Is Wrong In Spacing

- Horizontal gaps between left rail, board, and right rail are still too airy.
- Bottom controls and quote share a wide frame instead of a stacked center composition.
- Left captured trays have placeholder text centered in large empty areas.
- Coach bubble and mascot are cramped near the bottom-right edge.
- Board coordinates need tighter in-frame alignment.

## What Is Wrong In Asset Quality

- Existing frame assets are usable but some are too ornamental/noisy when scaled down.
- Current piece set is not close enough to the reference's chunky carved pieces.
- Button color variety is not truly asset-driven.
- Environment details are good in the background, but not modularly controlled enough for exact reference matching.

## What Still Feels Too CSS Or Fake

- `LOCAL PLAY` status block.
- `Quiet table` captured placeholders.
- `WHITE` / `BLACK` table header bar.
- CSS hue-rotated button colors.
- CSS icons for leaf, undo, hint, focus, settings, rating star, and timer clock.
- CSS pill frames for rating, timer, and status.

## What Must Be Regenerated As Real Assets

Only regenerate if the output is clearly stronger than current assets. Best candidates:

1. Per-button skins for Play, Undo, Hint, Focus, Settings.
2. A chunkier final chess piece set.
3. Modular left-bottom decor cluster.
4. Modular right-bottom books/sleeping-cat cluster.
5. Timer pill and move-row highlight frames.

If generation gives two weak/off-target results in a row, stop and document a handoff rather than forcing new art into the branch.

## What Can Stay Dynamic HTML

- Turn text.
- Player names, ratings, timers, side labels, and status text.
- Captured piece values.
- Move history numbers and SAN notation.
- Analyze label and coach text.
- Button labels and hint count.
- Board squares, click targets, selected state, legal move state, last move state, check state, invalid move state.
- Coordinates, as long as they are visually embedded into the frame.

## What Must Be Repositioned

- Player stack must become TeaLeaf/raccoon on top, MossyCat/black cat on bottom.
- Board should scale up and anchor the center more strongly.
- Move history should be slightly tighter and less table-like.
- Analyze button should sit directly below move history with a narrower, darker asset feel.
- Bottom buttons should be centered.
- Quote banner should be centered below the buttons.
- Coach bubble/mascot should sit in a clearer lower-right composition.

## What Must Be Removed

- `LOCAL PLAY / A quiet table for two sides` from the bottom visual.
- `Quiet table` captured placeholder text.
- `WHITE` / `BLACK` move history headers.
- Any hidden or visible generic placeholder label that describes an asset slot rather than presenting a game object.

## Strict Priority Order

1. Fix identity/order: TeaLeaf raccoon top, MossyCat black cat bottom.
2. Make layout more compact and board more dominant at 1440x900.
3. Remove bottom status block and restructure controls into centered button row plus centered quote.
4. Remove move-history table headers and make the notation flow more reference-like.
5. Remove captured placeholder text, enlarge VS badge, and tighten left rail spacing.
6. Reposition coach/mascot and Analyze Position into a more compact right rail.
7. Tune board coordinates into the frame.
8. Increase piece visual scale if safe.
9. Add or expose decor clusters only if they improve reference match without clutter.
10. Document remaining asset-generation needs.
