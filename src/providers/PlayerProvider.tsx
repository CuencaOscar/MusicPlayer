import { Audio, AVPlaybackStatus } from 'expo-av'
import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react'
import { Track } from '@/helpers/library'

type PlayerState = {
	queue: Track[]
	index: number
	activeTrack?: Track
	isPlaying: boolean
	isLoading: boolean
	error?: string
	playQueue: (tracks: Track[], startIndex: number) => Promise<void>
	togglePlay: () => Promise<void>
	skipToNext: () => Promise<void>
	skipToPrevious: () => Promise<void>
}

const PlayerContext = createContext<PlayerState | null>(null)

/** Streams tracks with expo-av and keeps a simple play queue. */
export const PlayerProvider = ({ children }: PropsWithChildren) => {
	const sound = useRef<Audio.Sound | null>(null)
	const [queue, setQueue] = useState<Track[]>([])
	const [index, setIndex] = useState(-1)
	const [isPlaying, setIsPlaying] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string>()
	const advance = useRef<() => void>(() => {})

	useEffect(() => {
		Audio.setAudioModeAsync({ playsInSilentModeIOS: true, shouldDuckAndroid: true }).catch(() => {})
		return () => {
			sound.current?.unloadAsync()
		}
	}, [])

	const load = useCallback(async (tracks: Track[], position: number) => {
		const track = tracks[position]
		if (!track) return
		setQueue(tracks)
		setIndex(position)
		setIsLoading(true)
		setError(undefined)
		try {
			await sound.current?.unloadAsync()
			const { sound: next } = await Audio.Sound.createAsync(
				{ uri: track.url },
				{ shouldPlay: true },
				(status: AVPlaybackStatus) => {
					if (!status.isLoaded) return
					setIsPlaying(status.isPlaying)
					if (status.didJustFinish) advance.current()
				},
			)
			sound.current = next
		} catch {
			setError('This track could not be played.')
			setIsPlaying(false)
		} finally {
			setIsLoading(false)
		}
	}, [])

	const skipToNext = useCallback(async () => {
		if (index < queue.length - 1) await load(queue, index + 1)
	}, [index, queue, load])

	const skipToPrevious = useCallback(async () => {
		if (index > 0) await load(queue, index - 1)
	}, [index, queue, load])

	advance.current = () => {
		skipToNext()
	}

	const togglePlay = useCallback(async () => {
		if (!sound.current) return
		if (isPlaying) await sound.current.pauseAsync()
		else await sound.current.playAsync()
	}, [isPlaying])

	const value = useMemo<PlayerState>(
		() => ({
			queue,
			index,
			activeTrack: queue[index],
			isPlaying,
			isLoading,
			error,
			playQueue: load,
			togglePlay,
			skipToNext,
			skipToPrevious,
		}),
		[queue, index, isPlaying, isLoading, error, load, togglePlay, skipToNext, skipToPrevious],
	)

	return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}

export const usePlayer = () => {
	const context = useContext(PlayerContext)
	if (!context) throw new Error('usePlayer must be used inside PlayerProvider')
	return context
}
