import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet
} from "react-native";
import React from "react";
import { PalleteProps } from "@/constants/Pallete";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import Tokens from "@/constants/Tokens";

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

type CustomProps = { text: string; backgroundColor?: string };

type Props = CustomProps & TouchableOpacityProps;

const styles = (theme: PalleteProps, props: Props) => {
    return StyleSheet.create({
        container: {
            backgroundColor: props.backgroundColor || theme.button.primary.bg,
            padding: Tokens.spacing[16],
            borderRadius: Tokens.borderRadius[8],
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: props.backgroundColor || theme.button.primary.shadow,
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.4,
            shadowRadius: 2,
            elevation: 5,
            gap: Tokens.spacing[8],
            height: 52,
            minHeight: 52,
            maxHeight: 52
        },
        text: {
            color: theme.button.primary.text,
            fontSize: Tokens.fontSize[14]
        }
    });
};

export default Button;
