import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import { StyleSheet } from "react-native";

export default (theme: PalleteProps) => {
    return StyleSheet.create({
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
        },
        logo: {
            width: 50,
            height: 50,
            borderRadius: Tokens.borderRadius[16],
            alignSelf: "center"
        },
        label: {
            color: theme.textInfo,
            fontSize: Tokens.fontSize[14],
            fontWeight: "400",
            alignSelf: "center"
        }
    });
};
