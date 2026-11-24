// import { NativeStackNavigationOptions } from "react-native-screens/lib/typescript/native-stack/types";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack"
import { Platform } from "react-native"
import { colors } from "./tokens"

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
    headerLargeTitle: true,
    headerLargeStyle: {
        backgroundColor: colors.background,
    },
    headerTintColor: colors.text,
    // Large transparent headers are an iOS feature; Android gets a solid header.
    headerTransparent: Platform.OS === 'ios',
    headerStyle: { backgroundColor: colors.background },
    headerBlurEffect: 'prominent',
    headerShadowVisible: false,
}