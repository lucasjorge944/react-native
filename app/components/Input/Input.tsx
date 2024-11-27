import { View, Text, TextInput, TextInputProps } from "react-native";
import React, { forwardRef } from "react";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import styles from "./styles";
import { Controller, UseControllerProps } from "react-hook-form";
import clsx from "clsx";

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

type Props = {
    refInput?: any;
    icon?: React.ReactNode;
    label?: string;
    inputProps: TextInputProps;
    formProps: UseControllerProps;
    error?: string;
};

export default Input;
