import { GroupList } from '@/components/GroupList'
import { playlists } from '@/helpers/library'
import { defaultStyles } from '@/styles'
import { View } from 'react-native'

const PlaylistsScreen = () => (
	<View style={defaultStyles.container}>
		<GroupList groups={playlists} variant="playlist" />
	</View>
)

export default PlaylistsScreen
