import { PalleteProps } from "@/constants/Pallete";
import { StyleSheet } from "react-native";

export default (theme: PalleteProps) => {
    return StyleSheet.create({
        container: {
            width: 36,
            height: 36,
            borderRadius: 18,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        default: {
            backgroundColor: theme.buttonIcon.bg
        },
        containerFilled: {
            backgroundColor: theme.buttonIconFilled.bg
        },
        icon: {
            color: theme.buttonIcon.color
        },
        iconFilled: {
            color: theme.buttonIconFilled.color
        }
    });
};
