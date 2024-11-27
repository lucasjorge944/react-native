import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { PalleteProps } from "@/constants/Pallete";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import styles from "./styles";
import { Props } from "./types";

const Button = (props: Props) => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme, props);
    return (
        <TouchableOpacity {...props} style={_styles.container}>
            {props.children}
            <Text style={_styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};

export default Button;
