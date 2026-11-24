import { Image, ImageStyle } from 'expo-image'
import { useState } from 'react'
import { StyleProp } from 'react-native'

type ArtworkProps = {
	uri?: string
	fallbackUri: string
	style: StyleProp<ImageStyle>
}

/** Remote artwork that falls back to a bundled placeholder when the URL is missing or fails to load. */
export const Artwork = ({ uri, fallbackUri, style }: ArtworkProps) => {
	const [failed, setFailed] = useState(false)
	return (
		<Image
			source={{ uri: !uri || failed ? fallbackUri : uri }}
			onError={() => setFailed(true)}
			style={style}
		/>
	)
}
