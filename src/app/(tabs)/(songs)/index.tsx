import { TracksList } from "@/components/TracksList"
import { defaultStyles } from "@/styles"
import { ScrollView, Text, View } from "react-native"

const SongsScreen = () => {
    return (
        <View style={defaultStyles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <TracksList scrollEnabled={false}/>
            </ScrollView>
        </View>
    )
}

export default SongsScreen