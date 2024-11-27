import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import { Platform, StyleSheet } from "react-native";

export default (theme: PalleteProps) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            height: 100,
            justifyContent: "flex-end",
            paddingTop: Platform.select({
                ios: 0,
                android: 46
            })
        },
        containerRow: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: Tokens.spacing[16]
        }
    });
};
