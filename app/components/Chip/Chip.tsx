import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import { FontAwesome6 } from "@expo/vector-icons";
import styles from "./styles";
import { ChipProps } from "./types";

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

export default Chip;
