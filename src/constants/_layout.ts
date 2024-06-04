// import { NativeStackNavigationOptions } from "react-native-screens/lib/typescript/native-stack/types";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack"
import { colors } from "./tokens"

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
    headerLargeTitle: true,
    headerLargeStyle: {
        backgroundColor: colors.background,
    },
    headerTintColor: colors.text,
    headerTransparent: true,
    headerBlurEffect: 'prominent',
    headerShadowVisible: false,
}