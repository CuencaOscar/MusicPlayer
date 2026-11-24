import { TracksList } from '@/components/TracksList'
import { defaultStyles } from '@/styles'
import { View } from 'react-native'

const SongsScreen = () => (
	<View style={defaultStyles.container}>
		<TracksList contentInsetAdjustmentBehavior="automatic" />
	</View>
)

export default SongsScreen
