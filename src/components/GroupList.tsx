import { FlatList, View } from 'react-native'
import { screenPadding } from '@/constants/tokens'
import { TrackGroup } from '@/helpers/library'
import { GroupListItem } from './GroupListItem'
import { EmptyState } from './EmptyState'

type GroupListProps = {
	groups: TrackGroup[]
	variant: 'artist' | 'playlist'
}

export const GroupList = ({ groups, variant }: GroupListProps) => (
	<FlatList
		data={groups}
		keyExtractor={(group) => group.name}
		contentInsetAdjustmentBehavior="automatic"
		contentContainerStyle={{ paddingHorizontal: screenPadding.horizontal, paddingBottom: 128 }}
		ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
		ListEmptyComponent={<EmptyState icon="albums-outline" message="Nothing to show yet" />}
		renderItem={({ item }) => <GroupListItem group={item} variant={variant} />}
	/>
)
