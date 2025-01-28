import { View, Text, Alert } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { useState, useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import { useTheme, ThemeProps } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import styles from "./styles";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import Progress from "../register/components/Progress";
import SocialLogin from "@/app/components/SocialLogin";
import Divider from "@/app/components/Divider";
import Footer from "./components/Footer";

const Signup = () => {
    const { isLoaded, signUp, setActive } = useSignUp();
    const [pendingVerification, setPendingVerification] = useState(false);
    const router = useRouter();
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormProps>();

    const onSignUpPress = async (data: FormProps) => {
        if (!isLoaded) {
            console.log("Clerk is not loaded yet");
            return;
        }

        try {
            console.log("Starting signup process...");
            console.log("Data:", {
                email: data.email,
                password: data.password
            });

            const signUpAttempt = await signUp.create({
                emailAddress: data.email,
                password: data.password
            });

            console.log("Sign up attempt:", signUpAttempt);

            if (signUpAttempt.status === "complete") {
                await setActive({ session: signUpAttempt.createdSessionId });
                router.push("/(auth)/(tabs)/myspaces");
                return;
            }

            if (signUpAttempt.status === "missing_requirements") {
                console.log("Preparing email verification...");
                await signUp.prepareEmailAddressVerification({
                    strategy: "email_code"
                });
                setPendingVerification(true);
            }
        } catch (err: any) {
            console.error("Signup error:", err);
            Alert.alert(
                "Error",
                err.errors?.[0]?.message || "An error occurred during sign up"
            );
        }
    };

    const onVerifyPress = async (data: FormProps) => {
        if (!isLoaded) {
            console.log("Clerk is not loaded yet");
            return;
        }

        try {
            console.log("Attempting email verification...");
            const completeSignUp = await signUp.attemptEmailAddressVerification(
                {
                    code: data.code!
                }
            );

            console.log("Verification result:", completeSignUp);

            if (completeSignUp.status === "complete") {
                await setActive({ session: completeSignUp.createdSessionId });
                router.push("/(auth)/(tabs)/myspaces");
            } else {
                console.log(
                    "Unexpected verification status:",
                    completeSignUp.status
                );
                Alert.alert(
                    "Verification Error",
                    "Unable to verify email address. Please try again."
                );
            }
        } catch (err: any) {
            console.error("Verification error:", err);
            Alert.alert(
                "Error",
                err.errors?.[0]?.message ||
                    "An error occurred during verification"
            );
        }
    };

    return (
        <View style={_styles.container}>
            <Stack.Screen options={{ title: "Sign Up" }} />

            <View style={_styles.content}>
                <View style={_styles.inputContainer}>
                    <View style={_styles.formContainer}>
                        <Progress progress={33} />
                        {!pendingVerification ? (
                            <>
                                <Text style={_styles.title}>Criar conta</Text>

                                <Input
                                    inputProps={{
                                        autoCapitalize: "none",
                                        placeholder: "Email",
                                        keyboardType: "email-address"
                                    }}
                                    formProps={{
                                        name: "email",
                                        control,
                                        rules: {
                                            required: "Email é obrigatório"
                                        }
                                    }}
                                    error={errors.email?.message}
                                    icon={
                                        <AntDesign
                                            name="mail"
                                            size={20}
                                            color={theme.text}
                                        />
                                    }
                                />

                                <Input
                                    inputProps={{
                                        placeholder: "Senha",
                                        secureTextEntry: true,
                                        onSubmitEditing:
                                            handleSubmit(onSignUpPress)
                                    }}
                                    formProps={{
                                        name: "password",
                                        control,
                                        rules: {
                                            required: "Senha é obrigatória",
                                            minLength: {
                                                value: 8,
                                                message:
                                                    "Senha deve ter no mínimo 8 caracteres"
                                            }
                                        }
                                    }}
                                    error={errors.password?.message}
                                    icon={
                                        <FontAwesome6
                                            name="asterisk"
                                            size={20}
                                            color={theme.text}
                                        />
                                    }
                                />

                                <Button
                                    text="Continuar"
                                    onPress={handleSubmit(onSignUpPress)}
                                />
                                <Divider text="ou continue com" />
                                <SocialLogin />
                                <View style={{ flex: 1 }} />
                                <Footer />
                            </>
                        ) : (
                            <>
                                <Text style={_styles.title}>
                                    Verificar Email
                                </Text>

                                <Input
                                    inputProps={{
                                        placeholder: "Código...",
                                        keyboardType: "number-pad",
                                        onSubmitEditing:
                                            handleSubmit(onVerifyPress)
                                    }}
                                    formProps={{
                                        name: "code",
                                        control,
                                        rules: {
                                            required: "Código é obrigatório"
                                        }
                                    }}
                                    error={errors.code?.message}
                                    icon={
                                        <AntDesign
                                            name="Safety"
                                            size={20}
                                            color={theme.text}
                                        />
                                    }
                                />

                                <Button
                                    text="Verificar"
                                    onPress={handleSubmit(onVerifyPress)}
                                />
                            </>
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
};

type FormProps = {
    email?: string;
    password?: string;
    code?: string;
};

export default Signup;
