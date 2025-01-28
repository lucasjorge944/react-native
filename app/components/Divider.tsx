import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";

type DividerProps = {
    text: string;
};

const Divider = ({ text }: DividerProps) => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);

    return (
        <View style={_styles.container}>
            <View style={_styles.line} />
            <Text style={_styles.text}>{text}</Text>
            <View style={_styles.line} />
        </View>
    );
};

const styles = (theme: PalleteProps) => {
    return StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: "center",
            gap: Tokens.spacing[16]
        },
        line: {
            flex: 1,
            height: 1,
            backgroundColor: theme.textInfo
        },
        text: {
            color: theme.textInfo,
            fontSize: Tokens.fontSize[14]
        }
    });
};

export default Divider;
