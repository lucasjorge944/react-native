import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import { Platform, StyleSheet } from "react-native";

export default (theme: PalleteProps) => {
    return StyleSheet.create({
        container: {
            height: Tokens.headerMySpacesHeight,
            backgroundColor: theme.background,
            paddingHorizontal: Tokens.spacing[12],
            paddingTop: Platform.select({
                ios: 0,
                android: 40
            })
        }
    });
};
