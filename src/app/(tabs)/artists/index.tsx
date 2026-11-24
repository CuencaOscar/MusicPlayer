import { GroupList } from '@/components/GroupList'
import { artists } from '@/helpers/library'
import { defaultStyles } from '@/styles'
import { View } from 'react-native'

const ArtistsScreen = () => (
	<View style={defaultStyles.container}>
		<GroupList groups={artists} variant="artist" />
	</View>
)

export default ArtistsScreen
