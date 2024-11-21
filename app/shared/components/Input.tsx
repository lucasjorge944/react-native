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
import { AntDesign } from "@expo/vector-icons";

type CustomProps = {
    label?: string;
    refInput?: any;
    iconLeft?: any;
};

type Props = CustomProps & TextInputProps;

const Input = (props: Props) => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme, props);
    return (
        <View style={styles.container}>
            {props.label && <Text style={styles.label}>{props.label}</Text>}
            <View style={{ position: "relative" }}>
                {props.iconLeft && (
                    <AntDesign
                        name={props.iconLeft}
                        size={20}
                        style={styles.iconLeft}
                    />
                )}
                <TextInput
                    placeholderTextColor={theme.input.placeholder}
                    style={styles.input}
                    ref={props.refInput}
                    {...props}
                />
            </View>
        </View>
    );
};

const createStyles = (theme: PalleteProps, props: Props) => {
    return StyleSheet.create({
        container: {
            flexDirection: "column",
            gap: Tokens.spacing[8]
        },
        label: {
            color: theme.textInfo,
            fontSize: Tokens.fontSize[14],
            fontWeight: "400",
            marginLeft: Tokens.spacing[8]
        },
        input: {
            backgroundColor: "white",
            color: theme.input.text,
            paddingLeft: props.iconLeft ? 40 : 18,
            paddingVertical: Tokens.spacing[8],
            borderRadius: Tokens.borderRadius[8],
            height: 52,
            fontSize: Tokens.fontSize[14],
            fontWeight: "500"
        },
        iconLeft: {
            position: "absolute",
            left: 12,
            top: 16,
            color: theme.input.placeholder,
            zIndex: 1
        }
    });
};

export default Input;
