import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import { Platform, StyleSheet } from "react-native";

export default (theme: PalleteProps) => {
    return StyleSheet.create({
        actionRow: {
            flexDirection: "row",
            paddingVertical: Tokens.spacing[12],
            paddingHorizontal: Tokens.spacing[12],
            gap: Tokens.spacing[12],
            width: "100%"
        },
        container: {
            height: Tokens.headerHeigth,
            paddingTop: Platform.select({
                ios: 0,
                android: 32
            }),
            backgroundColor: theme.background
        }
    });
};
