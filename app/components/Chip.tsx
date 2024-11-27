import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import { FontAwesome6 } from "@expo/vector-icons";
import Tokens from "@/constants/Tokens";
import { ChipProps } from "@/types/Chips";

const Chip = (props: ChipProps) => {
    const hookTheme = useTheme();
    const theme = hookTheme.theme as PalleteProps;
    const [text, setText] = useState(props.initialText);
    const _styles = styles(theme);

    useEffect(() => {
        if (props.initialText) setText(props.initialText);
    }, [props.initialText]);

    return (
        <TouchableOpacity
            style={[
                _styles.container,
                props.filled
                    ? _styles.containerFilled
                    : _styles.containerBorderd
            ]}
            onPress={props.onPress}
        >
            <Text
                style={[
                    props.filled ? _styles.textFilled : _styles.textBordered
                ]}
            >
                {text}
            </Text>
            {props.icon && (
                <FontAwesome6
                    name="chevron-down"
                    size={12}
                    style={
                        props.filled
                            ? { color: theme.chips.filled.text }
                            : { color: theme.chips.text }
                    }
                />
            )}
        </TouchableOpacity>
    );
};

const styles = (theme: PalleteProps) => {
    return StyleSheet.create({
        container: {
            height: 36,
            paddingHorizontal: Tokens.spacing[12],
            minWidth: 50,
            borderRadius: Tokens.borderRadius[4],
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: Tokens.spacing[4],
            shadowColor: theme.chips.shadow,
            ...Tokens.shadow
        },
        containerFilled: { backgroundColor: theme.chips.filled.bg },
        containerBorderd: {
            borderWidth: 1,
            borderColor: theme.chips.border
        },
        textFilled: {
            color: theme.chips.filled.text
        },
        textBordered: {
            color: theme.chips.text
        }
    });
};

export default Chip;
