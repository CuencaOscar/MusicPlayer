import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PlayerProvider } from '@/providers/PlayerProvider'

const App = () => {
	return (
		<SafeAreaProvider>
			<PlayerProvider>
				<RootNavigation />
				<StatusBar style="light" />
			</PlayerProvider>
		</SafeAreaProvider>
	)
}

const RootNavigation = () => {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	)
}

export default App
