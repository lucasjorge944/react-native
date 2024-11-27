import Colors from "@/constants/Colors";
import { PalleteProps } from "@/constants/Pallete";
import { StyleSheet } from "react-native";

export default (theme: PalleteProps) => {
    return StyleSheet.create({
        container: {
            backgroundColor: Colors.light.white[500],
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 12,
            borderBottomWidth: 1,
            borderBottomColor: Colors.light.white[700]
        },
        buttonReturn: {
            width: 36,
            height: 36,
            backgroundColor: Colors.light.white[600],
            borderRadius: 18,
            alignItems: "center",
            justifyContent: "center"
        }
    });
};
