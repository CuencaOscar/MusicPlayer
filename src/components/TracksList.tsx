import { FlatList, FlatListProps, View } from 'react-native'
import { Track, tracks as allTracks } from '@/helpers/library'
import { screenPadding } from '@/constants/tokens'
import { TrackListItem } from './TrackListItem'
import { EmptyState } from './EmptyState'

export type TracksListProps = Partial<FlatListProps<Track>> & {
	tracks?: Track[]
}

export const TracksList = ({ tracks = allTracks, ...flatlistProps }: TracksListProps) => {
	return (
		<FlatList
			data={tracks}
			keyExtractor={(track) => track.url}
			contentContainerStyle={{ paddingHorizontal: screenPadding.horizontal, paddingBottom: 128 }}
			ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
			ListEmptyComponent={<EmptyState icon="musical-notes-outline" message="No songs here yet" />}
			renderItem={({ item: track }) => <TrackListItem track={{ ...track, image: track.artwork }} />}
			{...flatlistProps}
		/>
	)
}
