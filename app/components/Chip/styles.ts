import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import { StyleSheet } from "react-native";

export default (theme: PalleteProps) => {
    return StyleSheet.create({
        container: {
            height: 36,
            paddingHorizontal: Tokens.spacing[12],
            minWidth: 50,
            borderRadius: Tokens.borderRadius[4],
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: Tokens.spacing[4],
            shadowColor: theme.chips.shadow,
            ...Tokens.shadow
        },
        containerFilled: { backgroundColor: theme.chips.filled.bg },
        containerBorderd: {
            borderWidth: 1,
            borderColor: theme.chips.border
        },
        textFilled: {
            color: theme.chips.filled.text
        },
        textBordered: {
            color: theme.chips.text
        }
    });
};
