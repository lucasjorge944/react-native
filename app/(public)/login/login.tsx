import * as Haptics from "expo-haptics";
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
import { ThemeProps, useTheme } from "../../context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import { useForm } from "react-hook-form";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import Input from "../../components/Input";

import styles from "./styles";
import Button from "@/app/components/Button";

const Login = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormProps>();

    const passwordRef = useRef<TextInput>(null);

    //const { onLogin } = useAuth();

    const login = async (data: FormProps) => {
        // if (!data.email || !data.password) return;
        // const result = await onLogin!(data.email, data.password);
        // if (result && result.error) {
        //     Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        //     alert(result.msg);
        // } else {
        //     Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        // }
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
                <View style={{ flex: 1 }}></View>
                <Text style={_styles.title}>Entrar</Text>
                <View style={_styles.form}>
                    <Input
                        inputProps={{
                            placeholder: "Email",
                            onSubmitEditing: () => passwordRef.current?.focus(),
                            returnKeyType: "next"
                        }}
                        formProps={{
                            name: "email",
                            control,
                            rules: {
                                required: "Email é obrigatório.",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Email inválido"
                                }
                            }
                        }}
                        error={errors.email?.message}
                        icon={<AntDesign name="mail" size={20} />}
                    />
                    <Input
                        inputProps={{
                            placeholder: "Senha",
                            secureTextEntry: true,
                            onSubmitEditing: handleSubmit(login)
                        }}
                        formProps={{
                            name: "password",
                            control,
                            rules: {
                                required: "Senha é obrigatória.",
                                minLength: {
                                    value: 8,
                                    message:
                                        "Senha deve ter no mínimo 8 caracteres."
                                }
                            }
                        }}
                        error={errors.password?.message}
                        icon={<FontAwesome6 name="asterisk" size={20} />}
                        ref={passwordRef}
                    />
                </View>
                <Text style={_styles.forgotPassword}>Esqueceu sua senha?</Text>
                <View
                    style={{
                        flexDirection: "row"
                    }}
                >
                    <Button text="Entrar" onPress={handleSubmit(login)} />
                </View>
                <Text style={_styles.forgotPassword}>ou</Text>

                <View style={{ flex: 1 }} />
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

type FormProps = {
    email?: string;
    password?: string;
};

export default Login;
