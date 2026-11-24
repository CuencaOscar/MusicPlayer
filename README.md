# MusicPlayer 🎵

Mobile music player built with **React Native**, **Expo** and **Expo Router**.
The app is organized in tabs — **Songs**, **Artists**, **Playlists** and **Favorites** — with a
reusable track list and a shared design-token system for colors, spacing and typography.

![React Native](https://img.shields.io/badge/React_Native-61DAFB?logo=react&logoColor=black)
![Expo](https://img.shields.io/badge/Expo-000020?logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

## Status

| Area | Status |
|---|---|
| Tab navigation with nested stacks (Expo Router) | ✅ Done |
| Track list and track item components | ✅ Done |
| Design tokens and shared styles | ✅ Done |
| Audio playback | 🚧 Planned |

## Tech stack

- React Native 0.74 · Expo SDK 51 · TypeScript
- Expo Router (file-based navigation), `expo-image`, `expo-blur`
- ESLint + Prettier

## Project structure

```
src/
├── app/
│   └── (tabs)/       # songs, artists, playlists, favorites
├── components/       # TracksList, TrackListItem
├── constants/        # design tokens, images
└── styles/
```

## Getting started

```bash
npm install
npx expo start
```

---

**Oscar Cuenca** · [LinkedIn](https://www.linkedin.com/in/ocuenca-moreno/)
