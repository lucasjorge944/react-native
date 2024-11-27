import React, { useRef } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import { router } from "expo-router";
import { ThemeProps, useTheme } from "../../../context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import { useFormContext } from "react-hook-form";
import { AntDesign } from "@expo/vector-icons";
import { FormProps } from "../types";
import Progress from "../components/Progress";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import styles from "./styles";

const StepOne = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useFormContext<FormProps>();

    const emailRef = useRef<TextInput>(null);

    const handleNextStep = () => {
        router.push("/register/stepTwo");
    };

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={_styles.container}
            >
                <Progress progress={33} />
                <Text style={_styles.description}>Criar sua conta</Text>
                <View style={_styles.form}>
                    <Input
                        inputProps={{
                            placeholder: "Nome",
                            onSubmitEditing: () => emailRef.current?.focus(),
                            returnKeyType: "next"
                        }}
                        icon={<AntDesign name="user" size={20} />}
                        error={errors.name?.message}
                        formProps={{
                            name: "name",
                            control,
                            rules: {
                                required: "Nome é obrigatório."
                            }
                        }}
                    />
                    <Input
                        inputProps={{
                            placeholder: "E-mail",
                            returnKeyType: "next",
                            onSubmitEditing: handleSubmit(handleNextStep)
                        }}
                        icon={<AntDesign name="mail" size={20} />}
                        error={errors.email?.message}
                        formProps={{
                            name: "email",
                            control,
                            rules: {
                                required: "E-mail é obrigatório.",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "E-mail inválido"
                                }
                            }
                        }}
                        ref={emailRef}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row"
                    }}
                >
                    <Button
                        text="Continuar"
                        onPress={handleSubmit(handleNextStep)}
                    />
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default StepOne;
