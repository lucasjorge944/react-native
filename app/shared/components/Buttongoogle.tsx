import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export default function Buttongoogle() {
    return (
        <TouchableOpacity
            style={{
                ...style.buttonSocial,
                backgroundColor: Colors.google.blue
            }}
        >
            <FontAwesome5
                name="google"
                size={24}
                color={Colors.light.white[500]}
                style={{ position: "absolute", left: 16 }}
            />
            <Text
                style={{
                    color: Colors.light.white[500],
                    fontSize: 16
                }}
            >
                Entrar com Google
            </Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    buttonSocial: {
        width: "100%",
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.light.white[500],
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.2,
        flexDirection: "row"
    }
});
