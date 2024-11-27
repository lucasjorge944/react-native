import * as Haptics from "expo-haptics";
import React, { useRef } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback
} from "react-native";
import { ThemeProps, useTheme } from "../../../context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import { useAuth } from "../../../context/AuthContext";
import { useFormContext } from "react-hook-form";
import { FontAwesome6 } from "@expo/vector-icons";
import Input from "../../../components/Input";
import Progress from "../components/Progress";
import styles from "./styles";
import Button from "@/app/components/Button";

const StepThree = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);

    const { onLogin, onRegister } = useAuth();

    const {
        control,
        handleSubmit,
        formState: { errors },
        getValues
    } = useFormContext<FormProps>();

    const passwordConfirmationRef = useRef<TextInput>(null);

    const validatePasswordConfirmation = (passwordConfirmation: string) => {
        const { password } = getValues();
        return (
            password === passwordConfirmation || "As senhas devem ser iguais."
        );
    };

    const handleNextStep = (data: FormProps) => {
        if (!data.email || !data.password) return;
        register(data.email, data.password);
    };

    const login = async (email: string, password: string) => {
        const result = await onLogin!(email, password);
        if (result && result.error) {
            alert(result.msg);
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        } else {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }
    };

    const register = async (email: string, password: string) => {
        const result = await onRegister!(email, password);
        if (result && result.error) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
            alert(result.msg);
        } else {
            login(email, password);
        }
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
                <Progress progress={90} />
                <Text style={_styles.description}>Escholha sua senha</Text>
                <View style={_styles.form}>
                    <Input
                        inputProps={{
                            placeholder: "Senha",
                            onSubmitEditing: () =>
                                passwordConfirmationRef.current?.focus(),
                            returnKeyType: "next",
                            secureTextEntry: true
                        }}
                        icon={<FontAwesome6 name="asterisk" size={20} />}
                        error={errors.password?.message}
                        formProps={{
                            name: "password",
                            control,
                            rules: {
                                required: "Senha é obrigatória.",
                                minLength: {
                                    value: 8,
                                    message:
                                        "Senha deve ter pelo menos 8 dígitos."
                                }
                            }
                        }}
                    />
                    <Input
                        inputProps={{
                            placeholder: "Confirme sua senha",
                            onSubmitEditing: handleSubmit(handleNextStep),
                            returnKeyType: "go",
                            secureTextEntry: true
                        }}
                        icon={<FontAwesome6 name="asterisk" size={20} />}
                        error={errors.passwordConfirmation?.message}
                        formProps={{
                            name: "passwordConfirmation",
                            control,
                            rules: {
                                required: "Senha é obrigatória.",
                                validate: validatePasswordConfirmation
                            }
                        }}
                        ref={passwordConfirmationRef}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row"
                    }}
                >
                    <Button
                        text="Finalizar"
                        onPress={handleSubmit(handleNextStep)}
                    />
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

type FormProps = {
    name?: string;
    email?: string;
    birth?: string;
    phone?: string;
    password?: string;
    passwordConfirmation?: string;
};

export default StepThree;
