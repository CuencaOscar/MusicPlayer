import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { colors } from '@/constants/tokens'
import { PlayerProvider } from '@/providers/PlayerProvider'

const App = () => {
	return (
		<SafeAreaProvider>
			<PlayerProvider>
				{/* On the web demo the app keeps a phone-like width, centred on the page. */}
				<View style={styles.page}>
					<View style={styles.app}>
						<RootNavigation />
					</View>
				</View>
				<StatusBar style="light" />
			</PlayerProvider>
		</SafeAreaProvider>
	)
}

const RootNavigation = () => {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false, title: 'MusicPlayer' }} />
		</Stack>
	)
}

const styles = StyleSheet.create({
	page: { flex: 1, backgroundColor: Platform.OS === 'web' ? '#111' : colors.background },
	app: {
		flex: 1,
		width: '100%',
		maxWidth: Platform.OS === 'web' ? 480 : undefined,
		alignSelf: 'center',
		backgroundColor: colors.background,
	},
})

export default App
