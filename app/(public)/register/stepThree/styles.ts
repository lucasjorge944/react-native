import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import { StyleSheet } from "react-native";

export default (theme: PalleteProps) => {
    return StyleSheet.create({
        container: {
            backgroundColor: theme.background,
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            gap: Tokens.spacing[18],
            paddingHorizontal: Tokens.spacing[16],
            position: "relative"
        },
        description: {
            color: theme.text,
            fontSize: Tokens.fontSize[30],
            fontWeight: "600",
            marginBottom: Tokens.spacing[24],
            textAlign: "center"
        },
        logo: {
            width: 110,
            height: 110,
            borderRadius: Tokens.borderRadius[16],
            alignSelf: "center"
        },
        form: {
            gap: Tokens.spacing[16]
        }
    });
};
