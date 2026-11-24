import { TracksList } from '@/components/TracksList'
import { favorites } from '@/helpers/library'
import { defaultStyles } from '@/styles'
import { View } from 'react-native'

const FavoritesScreen = () => (
	<View style={defaultStyles.container}>
		<TracksList tracks={favorites} contentInsetAdjustmentBehavior="automatic" />
	</View>
)

export default FavoritesScreen
