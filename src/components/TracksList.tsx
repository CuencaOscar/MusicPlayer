import { FlatList, FlatListProps, View } from 'react-native'
import { Track, tracks as allTracks } from '@/helpers/library'
import { screenPadding } from '@/constants/tokens'
import { usePlayer } from '@/providers/PlayerProvider'
import { TrackListItem } from './TrackListItem'
import { EmptyState } from './EmptyState'

export type TracksListProps = Partial<FlatListProps<Track>> & {
	tracks?: Track[]
}

export const TracksList = ({ tracks = allTracks, ...flatlistProps }: TracksListProps) => {
	const { activeTrack, isPlaying, playQueue } = usePlayer()
	return (
		<FlatList
			data={tracks}
			keyExtractor={(track) => track.url}
			contentContainerStyle={{ paddingHorizontal: screenPadding.horizontal, paddingBottom: 200 }}
			ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
			ListEmptyComponent={<EmptyState icon="musical-notes-outline" message="No songs here yet" />}
			renderItem={({ item: track, index }) => (
				<TrackListItem
					track={{ ...track, image: track.artwork }}
					isActive={activeTrack?.url === track.url}
					isPlaying={isPlaying}
					onPress={() => playQueue(tracks, index)}
				/>
			)}
			{...flatlistProps}
		/>
	)
}
