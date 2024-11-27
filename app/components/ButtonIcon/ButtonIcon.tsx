import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import { Props } from "./types";
import styles from "./styles";

const ButtonIcon = (props: Props) => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[
                _styles.container,
                props.filled ? _styles.containerFilled : _styles.default
            ]}
        >
            <Text
                style={[
                    _styles.icon,
                    props.filled ? _styles.iconFilled : _styles.icon
                ]}
            >
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

export default ButtonIcon;
