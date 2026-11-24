import { unknownTrackImageUri } from '@/constants/images'
import { colors, fontSize } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { TouchableHighlight, View, StyleSheet, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Artwork } from './Artwork'

export type TrackListItemProps = {
	track: { title: string; image?: string; artist?: string }
	isActive?: boolean
	isPlaying?: boolean
	onPress?: () => void
}

export const TrackListItem = ({ track, isActive = false, isPlaying = false, onPress }: TrackListItemProps) => {
	const isActiveTrack = isActive
	return (
		<TouchableHighlight onPress={onPress} underlayColor="rgba(255,255,255,0.06)">
			<View style={styles.trackItemContainer}>
				<View>
					<Artwork
						uri={track.image}
						fallbackUri={unknownTrackImageUri}
						style={{
							...styles.trackArtworkImage,
							opacity: isActiveTrack ? 0.6 : 1,
						}}
					/>
					{isActiveTrack && (
						<Ionicons
							name={isPlaying ? 'stats-chart' : 'play'}
							size={20}
							color={colors.text}
							style={styles.activeIcon}
						/>
					)}
				</View>
				<View style={{ width: '100%' }}>
					<Text
						numberOfLines={1}
						style={{
							...styles.trackTitletext,
							color: isActiveTrack ? colors.primary : colors.text,
						}}
					>
						{track.title}
					</Text>

					{track.artist && (
						<Text numberOfLines={1} style={styles.trackArtistText}>
							{track.artist}
						</Text>
					)}
				</View>
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
    trackItemContainer: {
        flexDirection: 'row',
        columnGap: 14,
        alignItems: 'center',
        paddingRight: 20,
    },
	trackArtworkImage: {
		borderRadius: 8,
		width: 50,
		height: 50,
	},
	activeIcon: {
		position: 'absolute',
		top: 15,
		left: 15,
	},
	trackTitletext: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: '600',
		maxWidth: '90%',
	},
	trackArtistText: {
		...defaultStyles.text,
		color: colors.textMuted,
		fontSize: 14,
		marginTop: 4,
	},
})
