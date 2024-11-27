import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import { StyleSheet } from "react-native";
import { Props } from "./types";

export default (theme: PalleteProps, props: Props) => {
    return StyleSheet.create({
        container: {
            flexDirection: "column",
            gap: Tokens.spacing[8],
            width: "100%"
        },
        group: {
            flexDirection: "row",
            backgroundColor: "white",
            borderRadius: Tokens.borderRadius[8],
            height: 52,
            overflow: "hidden",
            borderWidth: props.error ? 1 : 0,
            borderColor: theme.warn
        },
        label: {
            color: theme.textInfo,
            fontSize: Tokens.fontSize[14],
            fontWeight: "400",
            marginLeft: Tokens.spacing[8]
        },
        input: {
            color: theme.input.text,
            fontSize: Tokens.fontSize[14],
            fontWeight: "400",
            paddingLeft: Tokens.spacing[16],
            flex: 1
        },
        iconLeft: {
            fontSize: Tokens.fontSize[20]
        },
        containerIcon: {
            width: 52,
            height: 52,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRightWidth: 3,
            borderRightColor: theme.background
        }
    });
};
