import { Ionicons } from '@expo/vector-icons'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fontSize } from '@/constants/tokens'
import { unknownTrackImageUri } from '@/constants/images'
import { usePlayer } from '@/providers/PlayerProvider'
import { Artwork } from './Artwork'

/** Mini player shown above the tab bar while a track is loaded. */
export const FloatingPlayer = ({ bottom }: { bottom: number }) => {
	const { activeTrack, isPlaying, isLoading, error, togglePlay, skipToNext, index, queue } =
		usePlayer()
	if (!activeTrack) return null

	return (
		<View style={[styles.container, { bottom }]}>
			<Artwork
				uri={activeTrack.artwork}
				fallbackUri={unknownTrackImageUri}
				style={styles.artwork}
			/>
			<View style={styles.texts}>
				<Text numberOfLines={1} style={styles.title}>
					{activeTrack.title}
				</Text>
				<Text numberOfLines={1} style={[styles.subtitle, error ? styles.error : null]}>
					{error ?? activeTrack.artist ?? 'Unknown artist'}
				</Text>
			</View>
			{isLoading ? (
				<ActivityIndicator color={colors.text} style={styles.button} />
			) : (
				<TouchableOpacity
					accessibilityLabel={isPlaying ? 'Pause' : 'Play'}
					onPress={togglePlay}
					style={styles.button}
				>
					<Ionicons name={isPlaying ? 'pause' : 'play'} size={26} color={colors.text} />
				</TouchableOpacity>
			)}
			<TouchableOpacity
				accessibilityLabel="Next track"
				onPress={skipToNext}
				disabled={index >= queue.length - 1}
				style={styles.button}
			>
				<Ionicons
					name="play-forward"
					size={24}
					color={index >= queue.length - 1 ? colors.textMuted : colors.text}
				/>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		left: 8,
		right: 8,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 8,
		paddingRight: 12,
		borderRadius: 14,
		backgroundColor: '#252525',
		columnGap: 12,
	},
	artwork: { width: 44, height: 44, borderRadius: 8 },
	texts: { flex: 1 },
	title: { color: colors.text, fontSize: fontSize.sm, fontWeight: '600' },
	subtitle: { color: colors.textMuted, fontSize: 13, marginTop: 2 },
	error: { color: colors.primary },
	button: { padding: 4 },
})
