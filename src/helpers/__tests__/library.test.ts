import { artists, favorites, playlists, songCount, tracks } from '@/helpers/library'

describe('library helpers', () => {
	it('groups tracks by artist, skipping tracks without one', () => {
		const neffex = artists.find((group) => group.name === 'NEFFEX')
		expect(neffex?.tracks.length).toBe(tracks.filter((t) => t.artist === 'NEFFEX').length)
		expect(artists.every((group) => group.name.length > 0)).toBe(true)
		const grouped = artists.reduce((sum, group) => sum + group.tracks.length, 0)
		expect(grouped).toBe(tracks.filter((t) => t.artist).length)
	})

	it('sorts groups alphabetically and picks artwork from their tracks', () => {
		const names = artists.map((group) => group.name)
		expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b)))
		for (const group of playlists) {
			expect(group.tracks.some((t) => t.artwork === group.artwork) || !group.artwork).toBe(true)
		}
	})

	it('puts a track in every playlist it belongs to', () => {
		const multi = tracks.find((t) => (t.playlist?.length ?? 0) > 1)
		if (!multi?.playlist) return
		for (const name of multi.playlist) {
			expect(playlists.find((p) => p.name === name)?.tracks).toContain(multi)
		}
	})

	it('lists only top-rated tracks as favorites', () => {
		expect(favorites.length).toBeGreaterThan(0)
		expect(favorites.every((t) => t.rating === 1)).toBe(true)
	})

	it('pluralises song counts', () => {
		expect(songCount(1)).toBe('1 song')
		expect(songCount(5)).toBe('5 songs')
	})
})
