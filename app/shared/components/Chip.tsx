import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import { FontAwesome6 } from "@expo/vector-icons";

const Chip = ({ initialText, filled, icon, onPress }: BindingType) => {
    const [text, setText] = useState(initialText);
    useEffect(() => {
        if (initialText) setText(initialText);
    }, [initialText]);
    return (
        <TouchableOpacity
            style={[
                styles.container,
                filled ? styles.containerFilled : styles.containerBordered
            ]}
            onPress={onPress}
        >
            <Text style={[filled ? styles.textFilled : styles.textBordered]}>
                {text}
            </Text>
            {icon && (
                <FontAwesome6
                    name="chevron-down"
                    size={12}
                    style={
                        filled
                            ? { color: Colors.light.white[500] }
                            : { color: Colors.light.gray[600] }
                    }
                />
            )}
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        height: 30,
        paddingHorizontal: 12,
        minWidth: 50,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8
    },
    containerBordered: {
        borderColor: Colors.light.gray[300],
        borderWidth: 1
    },
    containerFilled: { backgroundColor: Colors.light.gray[600] },
    textFilled: {
        color: Colors.light.white[500]
    },
    textBordered: {
        color: Colors.light.gray[600]
    }
});

type BindingType = {
    initialText: string;
    filled?: boolean;
    icon?: boolean;
    onPress?: () => void;
};

export default Chip;
