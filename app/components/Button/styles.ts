import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import { StyleSheet } from "react-native";
import { Props } from "./types";

export default (theme: PalleteProps, props: Props) => {
    return StyleSheet.create({
        container: {
            backgroundColor: props.backgroundColor || theme.button.primary.bg,
            padding: Tokens.spacing[16],
            borderRadius: Tokens.borderRadius[8],
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: props.backgroundColor || theme.button.primary.shadow,
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.4,
            shadowRadius: 2,
            elevation: 5,
            gap: Tokens.spacing[8],
            height: 52,
            minHeight: 52,
            maxHeight: 52
        },
        text: {
            color: theme.button.primary.text,
            fontSize: Tokens.fontSize[14]
        }
    });
};
