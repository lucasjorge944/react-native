import { View, Text, Alert } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { Stack, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import { useTheme, ThemeProps } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import styles from "./styles";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import Footer from "./components/Footer";
import Divider from "@/app/components/Divider";
import SocialLogin from "@/app/components/SocialLogin";

const SignIn = () => {
    const { signIn, setActive, isLoaded } = useSignIn();
    const router = useRouter();
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormProps>();

    const onSignInPress = async (data: FormProps) => {
        if (!isLoaded) {
            console.log("Clerk is not loaded yet");
            return;
        }

        try {
            console.log("Attempting sign in...");
            console.log(data);
            const completeSignIn = await signIn.create({
                identifier: data.email!,
                password: data.password!
            });

            console.log("Sign in result:", completeSignIn);

            await setActive({ session: completeSignIn.createdSessionId });
            router.push("/(auth)/(tabs)/myspaces");
        } catch (err: any) {
            console.error("Sign in error:", err);
            Alert.alert(
                "Error",
                err.errors?.[0]?.message || "An error occurred during sign in"
            );
        }
    };

    return (
        <View style={_styles.container}>
            <Stack.Screen options={{ title: "Sign In" }} />

            <View style={_styles.content}>
                <View style={_styles.inputContainer}>
                    <View style={_styles.formContainer}>
                        <Text style={_styles.title}>Bem vindo de volta!</Text>

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
                                    required: "Email is required."
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
                                onSubmitEditing: handleSubmit(onSignInPress)
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
                            icon={
                                <FontAwesome6
                                    name="asterisk"
                                    size={20}
                                    color={theme.text}
                                />
                            }
                        />

                        <Button
                            text="Entrar"
                            onPress={handleSubmit(onSignInPress)}
                        />
                    </View>
                    <View style={_styles.socialContainer}>
                        <Divider text="ou continue com" />
                        <SocialLogin />
                    </View>
                </View>
                <Footer />
            </View>
        </View>
    );
};

type FormProps = {
    email?: string;
    password?: string;
};

export default SignIn;
