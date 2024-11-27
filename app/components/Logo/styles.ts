import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import { StyleSheet } from "react-native";

export default (theme: PalleteProps) => {
    return StyleSheet.create({
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
        }
    });
};
