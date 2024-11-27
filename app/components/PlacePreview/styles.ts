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
            width: screenWidth - 32
        },
        name: {
            color: theme.text,
            fontSize: Tokens.fontSize[14],
            fontWeight: "400",
            lineHeight: 18,
            width: "100%"
        },
        distance: {
            color: theme.textInfo,
            fontSize: Tokens.fontSize[12],
            fontWeight: "400",
            width: 180
        }
    });
};
