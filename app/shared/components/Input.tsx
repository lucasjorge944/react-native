import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TextInputProps
} from "react-native";
import React from "react";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";

type CustomProps = {
    label?: string;
};

type Props = CustomProps & TextInputProps;

const Input = (props: Props) => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme);
    return (
        <View style={styles.container}>
            {props.label && <Text style={styles.label}>{props.label}</Text>}
            <TextInput
                placeholderTextColor={theme.input.placeholder}
                style={styles.input}
                {...props}
            />
        </View>
    );
};

const createStyles = (theme: PalleteProps) => {
    return StyleSheet.create({
        container: {
            flexDirection: "column",
            gap: Tokens.spacing[8]
        },
        label: {
            color: theme.textSecondary,
            fontSize: Tokens.fontSize[14],
            fontWeight: "500",
            marginLeft: Tokens.spacing[8]
        },
        input: {
            backgroundColor: theme.input.bg,
            color: theme.input.text,
            paddingHorizontal: Tokens.spacing[18],
            paddingVertical: Tokens.spacing[8],
            borderRadius: Tokens.borderRadius[8],
            height: 52,
            fontSize: Tokens.fontSize[14],
            fontWeight: "500",
            shadowColor: theme.input.shadow,
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 5
        }
    });
};

export default Input;
