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
import { AntDesign, Entypo } from "@expo/vector-icons";
import { FormProps } from "../types";
import Progress from "../components/Progress";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import styles from "./styles";

const StepTwo = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useFormContext<FormProps>();

    const phoneRef = useRef<TextInput>(null);

    const handleNextStep = () => {
        router.push({
            pathname: "/register/stepThree"
        });
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
                <Progress progress={66} />
                <Text style={_styles.description}>Sobre você</Text>
                <View style={_styles.form}>
                    <Input
                        inputProps={{
                            placeholder: "Data de nascimento",
                            onSubmitEditing: () => phoneRef.current?.focus(),
                            returnKeyType: "next"
                        }}
                        icon={<AntDesign name="calendar" size={20} />}
                        error={errors.birth?.message}
                        formProps={{
                            name: "birth",
                            control,
                            rules: {
                                required: "Data de nascimento é obrigatória.",
                                pattern: {
                                    value: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
                                    message: "Data de nascimento inválida."
                                }
                            }
                        }}
                    />
                    <Input
                        inputProps={{
                            placeholder: "Celular",
                            returnKeyType: "next",
                            onSubmitEditing: handleSubmit(handleNextStep)
                        }}
                        icon={<Entypo name="mobile" size={20} />}
                        error={errors.phone?.message}
                        formProps={{
                            name: "phone",
                            control,
                            rules: {
                                required: "Celular é obrigatório.",
                                minLength: {
                                    value: 11,
                                    message: "Celular inválido."
                                }
                            }
                        }}
                        ref={phoneRef}
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

export default StepTwo;
