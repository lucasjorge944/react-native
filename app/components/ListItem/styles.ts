import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import { StyleSheet } from "react-native";
import { Props } from "./types";

export default (theme: PalleteProps, props: Props) => {
    return StyleSheet.create({
        container: {
            flex: 1
        },
        item: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: Tokens.spacing[16],
            borderBottomWidth: 1,
            borderBottomColor: theme.border.thin,
            paddingHorizontal: Tokens.spacing[16]
        },
        textContainer: {
            flexDirection: "column",
            width: "80%",
            gap: Tokens.spacing[8]
        },
        title: {
            fontSize: Tokens.fontSize[16],
            fontWeight: "500"
        },
        subtitle: {
            fontSize: Tokens.fontSize[12],
            color: theme.textSecondary,
            fontWeight: "300"
        }
    });
};
