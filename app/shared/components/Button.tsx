import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { PalleteProps } from "@/constants/Pallete";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import Tokens from "@/constants/Tokens";

type CustomProps = { text: string; backgroundColor?: string };

type Props = CustomProps & TouchableOpacityProps;

const Button = (props: Props) => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme, props);
    return (
        <TouchableOpacity
            {...props}
            style={{
                ...styles.container,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                shadowColor:
                    props.backgroundColor || theme.button.primary.shadow,
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.4,
                shadowRadius: 2,
                elevation: 5,
                gap: Tokens.spacing[8]
            }}
        >
            {props.children}
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const createStyles = (theme: PalleteProps, props: Props) => {
    return {
        container: {
            backgroundColor: props.backgroundColor || theme.button.primary.bg,
            padding: Tokens.spacing[16],
            borderRadius: Tokens.borderRadius[8],
            flex: 1
        },
        text: {
            color: theme.button.primary.text,
            fontSize: Tokens.fontSize[14]
        }
    };
};

export default Button;
