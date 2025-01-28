import { StyleSheet } from "react-native";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";

const styles = (theme: PalleteProps) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
            padding: Tokens.spacing[18]
        },
        content: {
            flex: 1,
            justifyContent: "space-between"
        },
        inputContainer: {
            gap: Tokens.spacing[16],
            marginTop: "20%",
            flex: 1
        },
        formContainer: {
            gap: Tokens.spacing[16],
            flex: 1
        },
        title: {
            fontSize: Tokens.fontSize[24],
            fontWeight: 500,
            color: theme.text,
            marginBottom: Tokens.spacing[12]
        }
    });

export default styles;
