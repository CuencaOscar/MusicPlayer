import { Asset } from 'expo-asset'

// Asset.fromModule resolves bundled images on native and on the web build.
export const unknownArtistImageUri = Asset.fromModule(require('@/assets/unknown_artist.png')).uri
export const unknownTrackImageUri = Asset.fromModule(require('@/assets/unknown_track.png')).uri
