# Cozy Pixel Chess

Cozy Pixel Chess is a long-term indie game project: a cozy pixel-art themed chess game with local play first, then private online rooms, beginner-friendly puzzles, collectible themes, avatars, decorative cosmetics, soft animations, ambient sounds, and gentle learning feedback.

This repository is currently the foundation scaffold. It is intentionally small: one asset-based Rainy Cafe UI shell, a playable offline chess board powered by `chess.js`, and documentation that keeps future work aligned.

## Install

```bash
npm install
```

## Run Dev Server

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Current Status

- Vite, React, TypeScript, Tailwind CSS, and `chess.js` are installed.
- The first fixed 16:9 game canvas is in place.
- Rainy Cafe exists as a placeholder theme pack.
- Offline local chess is playable by clicking a piece and then a legal target square.
- Online multiplayer, shop/customization, and puzzle mode are planned but not implemented.

## Current MVP Target

The first MVP is one polished Rainy Cafe local chess experience with move history, simple player cards, theme-aware UI, and a clear path toward private room multiplayer and beginner puzzles.
