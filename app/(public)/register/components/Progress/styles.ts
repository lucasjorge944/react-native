import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import { StyleSheet } from "react-native";

export default (theme: PalleteProps) => {
    return StyleSheet.create({
        container: {
            width: "100%",
            height: 4,
            borderRadius: 2,
            backgroundColor: theme.progress.background
        },
        progress: {
            height: 4,
            borderRadius: 2,
            backgroundColor: theme.progress.bar
        }
    });
};
