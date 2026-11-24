import { Artwork } from './Artwork'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { colors, fontSize } from '@/constants/tokens'
import { unknownArtistImageUri, unknownTrackImageUri } from '@/constants/images'
import { TrackGroup, songCount } from '@/helpers/library'

type GroupListItemProps = {
	group: TrackGroup
	variant: 'artist' | 'playlist'
}

export const GroupListItem = ({ group, variant }: GroupListItemProps) => {
	const fallback = variant === 'artist' ? unknownArtistImageUri : unknownTrackImageUri
	return (
		<TouchableHighlight underlayColor="rgba(255,255,255,0.06)">
			<View style={styles.row}>
				<Artwork
					uri={group.artwork}
					fallbackUri={fallback}
					style={[styles.artwork, variant === 'artist' && styles.round]}
				/>
				<View style={styles.texts}>
					<Text numberOfLines={1} style={styles.title}>
						{group.name}
					</Text>
					<Text style={styles.subtitle}>{songCount(group.tracks.length)}</Text>
				</View>
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	row: { flexDirection: 'row', alignItems: 'center', columnGap: 14 },
	artwork: { width: 64, height: 64, borderRadius: 10 },
	round: { borderRadius: 32 },
	texts: { flex: 1 },
	title: { color: colors.text, fontSize: fontSize.sm, fontWeight: '600' },
	subtitle: { color: colors.textMuted, fontSize: 14, marginTop: 4 },
})
