import library from '@/assets/data/library.json'

export type Track = {
	url: string
	title: string
	artist?: string
	artwork?: string
	rating?: number
	playlist?: string[]
}

export type TrackGroup = {
	name: string
	tracks: Track[]
	artwork?: string
}

export const tracks: Track[] = library

const groupBy = (keyOf: (track: Track) => string[]): TrackGroup[] => {
	const groups = new Map<string, Track[]>()
	for (const track of tracks) {
		for (const key of keyOf(track)) {
			groups.set(key, [...(groups.get(key) ?? []), track])
		}
	}
	return [...groups.entries()]
		.map(([name, items]) => ({
			name,
			tracks: items,
			artwork: items.find((t) => t.artwork)?.artwork,
		}))
		.sort((a, b) => a.name.localeCompare(b.name))
}

export const artists = groupBy((track) => (track.artist ? [track.artist] : []))

export const playlists = groupBy((track) => track.playlist ?? [])

export const favorites = tracks.filter((track) => track.rating === 1)

export const songCount = (count: number) => `${count} ${count === 1 ? 'song' : 'songs'}`
