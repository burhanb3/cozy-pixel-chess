# Rainy Cafe Rebuild V2 Blueprint

Date: 2026-05-17
Branch: `goal/rainy-cafe-reference-rebuild-v2`
Base: `main`
Reference: `docs/references/rainy-cafe-reference.png` at 1448x1086
Previous result: `docs/references/visual-checks/rainy-cafe-final-fidelity-pass.png` at 1440x900

## Why Rebuild V2 Exists

The previous experimental branch improved the Rainy Cafe UI, but it still reads as React/CSS interface modules placed over a strong background. The approved reference reads as a compact illustrated game screen where board, side rails, controls, decor, and text all belong to the same pixel-art world.

This branch starts from `main` so the rebuild is not trapped by the old experimental layout. The reference is the blueprint; the old branch is only supporting material.

## Strict Comparison

Reference:
- board is the central object and takes most of the vertical middle
- left rail is a compact stack: turn plaque, TeaLeaf, captured tray, VS, MossyCat, captured tray, decor
- right rail is compact: move history, analyze button, mascot/bubble, books/cat decor
- bottom controls are five large rounded-square colored buttons, with quote banner centered below
- text has a friendly pixel-game feel with warm cream shadows and dark outlines
- pieces are chunky, carved, shaded, and readable
- coordinates are visually part of the wooden frame

Previous final fidelity result:
- layout is close in broad zones, but still too much CSS/React chrome
- buttons improved, but still do not fully match the reference button geometry and label integration
- pieces remain weaker than the reference and are arranged from a generated sheet, not a direct reference study
- coordinates still feel like HTML labels placed on top
- move history empty state and player card internals still feel web-like
- background/decor is mostly one large layer instead of deliberate region composition

## Reference Region Crops

Reference crops were created under:

`docs/references/visual-checks/rebuild-v2-reference-crops/`

Contact sheet:

`docs/references/visual-checks/rebuild-v2-reference-crops/reference-region-contact-sheet.png`

The crop set includes:

1. board + frame
2. board squares + pieces
3. turn plaque
4. top player card
5. bottom player card
6. captured trays + VS
7. move history
8. analyze button
9. mascot + coach bubble
10. bottom buttons
11. quote banner
12. left-bottom decor
13. right-top window/lamp
14. right-bottom books/cat

## Blueprint Regions

Coordinates below use the 1448x1086 reference image. The app target remains a 1440x900 review viewport, so vertical proportions are compressed into the live scene while preserving the reference hierarchy.

| Region | Reference box | Relationship | Dynamic text | Current too far off? | Needed assets / treatment |
|---|---:|---|---|---|---|
| turn plaque | x26 y34 w299 h70 | top-left, wide short wood/parchment sign | turn status dynamic | yes, old version close but less reference-native | plaque frame or CSS over frame, live text |
| top player card | x28 y120 w296 h174 | compact portrait-left card | name, side, rating, timer, status dynamic | yes, internals too CSS | TeaLeaf portrait, player frame, rating/timer pills |
| top captured tray | x30 y316 w296 h108 | parchment tray below TeaLeaf | label and captured sprites dynamic | yes, too empty | captured tray frame, mini piece sprites |
| VS badge | x122 y442 w116 h62 | centered medallion between trays | static VS okay | yes, should be embedded | VS badge asset |
| bottom captured tray | x30 y698 w296 h112 | tray below MossyCat | label and captured sprites dynamic | yes | captured tray frame, mini piece sprites |
| bottom player card | x30 y508 w294 h174 | compact black cat card | name, side, rating, timer, status dynamic | yes | MossyCat portrait, player frame |
| board frame / board | x340 y16 w782 h830 | dominant center, near full height | board state dynamic; coordinates can be live or frame-integrated | yes, pieces/coords weaker | reference-derived board frame, square textures, piece set |
| move history | x1148 y246 w272 h404 | right parchment panel | title and move rows dynamic | partly | move panel frame, compact notation flow |
| analyze button | x1148 y656 w272 h60 | dark narrow wood control | label dynamic | partly | analyze frame or reused asset |
| mascot + bubble | x1140 y724 w296 h128 | lower-right vignette | coach text dynamic | partly | mascot asset, coach bubble frame |
| left-bottom decor | x0 y760 w360 h326 | chalkboard/cup/cookies/plant cluster | no dynamic text needed | old background acceptable, but not modular | decor cluster or old background reuse |
| right-top window/lamp | x1100 y0 w348 h252 | window, lamp, mug, plant | no dynamic text | old background acceptable | background/window cluster |
| right-bottom books/cat | x1110 y840 w338 h246 | books, plants, sleeping cat | no dynamic text | old background acceptable | background/decor cluster |
| bottom buttons | x360 y846 w760 h138 | five equal chunky buttons | labels and hint count dynamic | yes | five button skins, integrated labels |
| quote banner | x392 y1008 w698 h76 | centered under controls | quote dynamic | partly | quote banner frame |

## Target Zones For Rebuild V2

Target 1440x900 zones:

- left rail: x40-360, y38-790
- board: x390-1045, y44-710
- right rail: x1080-1390, y42-715
- buttons: x360-1090, y705-820
- quote: x410-1040, y825-880
- left decor: x0-350, y620-900
- right-top decor: x1080-1440, y0-240
- right-bottom decor: x1100-1440, y640-900

The rebuild should prefer this compact blueprint over the old branch's module-first layout.

## Asset Decisions

Regenerate or derive:
- board frame/squares from the reference board crop
- white and black piece sprite sheets from reference piece crops if clean enough
- typography treatment in CSS

Reuse only if they genuinely help:
- old branch rainy-room background
- old branch player/captured/history/analyze/coach/quote frames
- old branch TeaLeaf/MossyCat portraits and mascot
- old branch final button skins if generation is not stronger

Reject:
- old placeholder decor slots
- old Unicode/glyph piece rendering
- old wide footer/action bar structure
- generic CSS-only card and button styling
