import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fontSize } from '@/constants/tokens'

type EmptyStateProps = {
	icon: keyof typeof Ionicons.glyphMap
	message: string
}

export const EmptyState = ({ icon, message }: EmptyStateProps) => (
	<View style={styles.container}>
		<Ionicons name={icon} size={48} color={colors.textMuted} />
		<Text style={styles.message}>{message}</Text>
	</View>
)

const styles = StyleSheet.create({
	container: { alignItems: 'center', marginTop: 80, rowGap: 12 },
	message: { color: colors.textMuted, fontSize: fontSize.sm },
})
