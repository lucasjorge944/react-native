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
            paddingHorizontal: Tokens.spacing[16]
        },
        title: {
            color: theme.text,
            fontSize: Tokens.fontSize[30],
            fontWeight: "600",
            marginBottom: Tokens.spacing[16]
        },
        description: {
            color: theme.textInfo,
            fontSize: Tokens.fontSize[14],
            fontWeight: "400",
            alignSelf: "center"
        },
        form: {
            gap: Tokens.spacing[16]
        },
        forgotPassword: {
            color: theme.textInfo,
            fontSize: Tokens.fontSize[14],
            fontWeight: "400",
            alignSelf: "center"
        },
        notMember: {
            flexDirection: "row",
            alignSelf: "center",
            gap: Tokens.spacing[4],
            marginBlock: Tokens.spacing[24]
        },
        register: {
            color: theme.text,
            fontSize: Tokens.fontSize[14],
            fontWeight: "400",
            alignSelf: "center"
        }
    });
};
