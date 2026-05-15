# Multiplayer Plan

Multiplayer is planned only. It is not part of the foundation implementation.

## Direction

- Private rooms first.
- A player creates a room and shares a room code or link.
- Players are assigned white and black.
- Spectators may be added later.
- Reconnect handling comes later.
- Timers come later.
- Move validation should eventually happen server-side.
- Anti-cheat is not part of the MVP.

## Possible Backend Options

- Supabase Realtime.
- A custom WebSocket server.
- Firebase.

No final backend has been chosen yet. The first multiplayer phase should compare options against simplicity, hosting cost, reconnect behavior, server-side validation, and long-term maintainability.
