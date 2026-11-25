import { colors, fontSize } from '@/constants/tokens'
import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import { Platform, StyleSheet, View } from 'react-native'
import { FontAwesome, MaterialCommunityIcons, Ionicons, FontAwesome6 } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FloatingPlayer } from '@/components/FloatingPlayer'

// Height of the tab bar content above the bottom safe area (default 49 + paddingTop 8).
const TAB_BAR_HEIGHT = 57

const tabBarShape = {
	...StyleSheet.absoluteFillObject,
	overflow: 'hidden' as const,
	borderTopLeftRadius: 20,
	borderTopRightRadius: 20,
}

// expo-blur only blurs reliably on iOS and the web; Android gets a solid surface so the list never shows through.
const TabBarBackground = () =>
	Platform.OS === 'android' ? (
		<View style={[tabBarShape, { backgroundColor: '#161618' }]} />
	) : (
		<BlurView intensity={80} tint="dark" style={tabBarShape} />
	)

const TabsNavigation = () => {
	const { bottom } = useSafeAreaInsets()
	return (
		<View style={{ flex: 1 }}>
			<TabsBar />
			<FloatingPlayer bottom={TAB_BAR_HEIGHT + bottom + 8} />
		</View>
	)
}

const TabsBar = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: colors.primary,
				tabBarInactiveTintColor: colors.textMuted,
				tabBarLabelStyle: {
					fontSize: fontSize.xs,
					fontWeight: 500,
				},
				headerShown: false,
				tabBarStyle: {
					position: 'absolute',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					borderTopWidth: 0,
					paddingTop: 8,
				},
				tabBarBackground: TabBarBackground,
			}}
		>
			<Tabs.Screen
				name="favorites"
				options={{
					title: 'Favorites',
					tabBarIcon: ({ color }) => <FontAwesome name="heart" size={20} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="playlists"
				options={{
					title: 'Playlists',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="playlist-play" size={28} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="(songs)"
				options={{
					title: 'Songs',
					tabBarIcon: ({ color }) => <Ionicons name="musical-note-sharp" size={24} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="artists"
				options={{
					title: 'Artists',
					tabBarIcon: ({ color }) => <FontAwesome6 name="users-line" size={20} color={color} />,
				}}
			/>
		</Tabs>
	)
}

export default TabsNavigation
