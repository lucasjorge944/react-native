import {
    View,
    Text,
    TextInput,
    TextInputProps,
    StyleSheet
} from "react-native";
import React, { forwardRef } from "react";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import { Controller, UseControllerProps } from "react-hook-form";
import clsx from "clsx";
import Tokens from "@/constants/Tokens";

const Input = forwardRef<TextInput, Props>((props, ref) => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme, props);
    return (
        <Controller
            render={({ field }) => (
                <View style={_styles.container}>
                    {props.label && (
                        <Text style={_styles.label}>{props.label}</Text>
                    )}
                    <View style={_styles.group}>
                        {props.icon && (
                            <View style={_styles.containerIcon}>
                                <Text
                                    style={[
                                        _styles.iconLeft,
                                        {
                                            color: clsx({
                                                [theme.warn]:
                                                    props.error?.length,
                                                [theme.input.placeholder]:
                                                    !props.error?.length &&
                                                    !field.value,
                                                [theme.text]:
                                                    field.value &&
                                                    !props.error?.length
                                            })
                                        }
                                    ]}
                                >
                                    {props.icon}
                                </Text>
                            </View>
                        )}
                        <TextInput
                            ref={ref}
                            placeholderTextColor={theme.input.placeholder}
                            style={_styles.input}
                            value={field.value}
                            onChangeText={field.onChange}
                            {...props.inputProps}
                        />
                    </View>
                </View>
            )}
            {...props.formProps}
        />
    );
});

const styles = (theme: PalleteProps, props: Props) => {
    return StyleSheet.create({
        container: {
            flexDirection: "column",
            gap: Tokens.spacing[8],
            width: "100%"
        },
        group: {
            flexDirection: "row",
            backgroundColor: "white",
            borderRadius: Tokens.borderRadius[8],
            height: 52,
            overflow: "hidden",
            borderWidth: props.error ? 1 : 0,
            borderColor: theme.warn
        },
        label: {
            color: theme.textInfo,
            fontSize: Tokens.fontSize[14],
            fontWeight: "400",
            marginLeft: Tokens.spacing[8]
        },
        input: {
            color: theme.input.text,
            fontSize: Tokens.fontSize[14],
            fontWeight: "400",
            paddingLeft: Tokens.spacing[16],
            flex: 1
        },
        iconLeft: {
            fontSize: Tokens.fontSize[20]
        },
        containerIcon: {
            width: 52,
            height: 52,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRightWidth: 3,
            borderRightColor: theme.background
        }
    });
};

export type Props = {
    refInput?: any;
    icon?: React.ReactNode;
    label?: string;
    inputProps: TextInputProps;
    formProps: UseControllerProps;
    error?: string;
};

export default Input;
