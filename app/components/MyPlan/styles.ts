import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import { Dimensions, StyleSheet } from "react-native";

export default (theme: PalleteProps) => {
    const { width: screenWidth } = Dimensions.get("window");

    return StyleSheet.create({
        container: {
            flexDirection: "row",
            gap: Tokens.spacing[12],
            width: screenWidth * 0.8
        },
        card: {
            backgroundColor: theme.card.bg,
            borderRadius: Tokens.borderRadius[8],
            padding: Tokens.spacing[8],
            width: screenWidth - 32,
            shadowColor: theme.card.shadow,
            ...Tokens.shadow
        },
        logoWrapper: {
            width: 60,
            height: 60,
            borderRadius: Tokens.borderRadius[8],
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            borderWidth: Tokens.borderWidth[1],
            borderColor: theme.border.thin
        },
        logo: {
            width: 60,
            height: 60,
            backgroundColor: "rgba(0,0,0,0.1)"
        },
        name: {
            color: theme.text,
            fontSize: Tokens.fontSize[14],
            fontWeight: "400",
            lineHeight: 18,
            width: "100%"
        },
        description: {
            color: theme.textInfo,
            fontSize: Tokens.fontSize[12],
            fontWeight: "400",
            width: 180
        }
    });
};
