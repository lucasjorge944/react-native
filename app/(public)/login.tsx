import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, router } from "expo-router";
import { ThemeProps, useTheme } from "../context/ThemeContext";
import Tokens from "@/constants/Tokens";
import { PalleteProps } from "@/constants/Pallete";
import Input from "../shared/components/Input";
import Button from "../shared/components/Button";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

const Login = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, onRegister } = useAuth();

    useEffect(() => {}, []);

    const login = async () => {
        const result = await onLogin!(email, password);
        if (result && result.error) {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
            alert(result.msg);
        } else {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }
    };

    const onAuthGoogle = () => {
        router.push("/(modals)/google");
    };

    const onAuthFacebook = () => {
        router.push("/(modals)/facebook");
    };

    const ref_input2 = useRef<TextInput | null>(null);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={{ flex: 1 }}></View>
            <Image
                source={require("@/assets/images/ftv-logo.webp")}
                style={styles.logo}
            />
            <View style={{ gap: Tokens.spacing[8] }}>
                <Text style={styles.title}>Entrar</Text>
                <Text style={styles.description}>
                    Hora do jogo, insira seu email e senha ou cadastre!
                </Text>
            </View>
            <View style={styles.form}>
                <Input label="Email" placeholder="Digite seu email" />
                <Input label="Senha" placeholder="Senha" secureTextEntry={true} />
            </View>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
            <View
                style={{
                    flexDirection: "row"
                }}
            >
                <Button text="Entrar" onPress={login} />
            </View>
            <Text style={styles.forgotPassword}>ou</Text>
            <View
                style={{
                    flexDirection: "row",
                    gap: Tokens.spacing[16]
                }}
            >
                <Button
                    onPress={onAuthGoogle}
                    text="Google"
                    backgroundColor={theme.google}
                >
                    <AntDesign
                        name="googleplus"
                        size={20}
                        color={theme.button.primary.text}
                    />
                </Button>
                <Button
                    onPress={onAuthFacebook}
                    text="Facebook"
                    backgroundColor={theme.facebook}
                >
                    <FontAwesome6
                        name="facebook"
                        size={20}
                        color={theme.button.primary.text}
                    />
                </Button>
            </View>
            <View style={{ flex: 1 }}></View>
            <View
                style={{
                    flexDirection: "row",
                    alignSelf: "center",
                    gap: Tokens.spacing[4],
                    marginBottom: 40
                }}
            >
                <Text
                    style={{
                        ...styles.forgotPassword,
                        color: theme.textSecondary
                    }}
                >
                    Ainda não é membro?
                </Text>
                <Link
                    href="/(public)/register"
                    style={{
                        ...styles.register
                    }}
                >
                    Cadastre-se!
                </Link>
            </View>
        </KeyboardAvoidingView>
    );
};
const createStyles = (theme: PalleteProps) =>
    StyleSheet.create({
        container: {
            backgroundColor: theme.background,
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            gap: Tokens.spacing[18],
            paddingHorizontal: Tokens.spacing[16]
        },
        logo: {
            width: 110,
            height: 110,
            borderRadius: Tokens.borderRadius[16],
            alignSelf: "center"
        },
        title: {
            color: theme.text,
            fontSize: Tokens.fontSize[20],
            fontWeight: "500",
            alignSelf: "center"
        },
        description: {
            color: theme.textSecondary,
            fontSize: Tokens.fontSize[14],
            fontWeight: "400",
            alignSelf: "center"
        },
        form: {
            gap: Tokens.spacing[16]
        },
        forgotPassword: {
            color: theme.text,
            fontSize: Tokens.fontSize[16],
            fontWeight: "400",
            alignSelf: "center"
        },
        register: {
            color: theme.text,
            fontSize: Tokens.fontSize[16],
            fontWeight: "400",
            alignSelf: "center"
        }
    });

export default Login;

{
    /* <Image
                source={require("@/assets/images/beach-bg-login.jpg")}
                style={styles.bg}
            ></Image>

            <View style={styles.containerChild}>
                <View
                    style={{
                        ...styles.form,
                        backgroundColor: "#FFF"
                    }}
                >
                    <Text style={styles.titleForm}>Acesse sua conta</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={Colors.light.gray[300]}
                        placeholder="Email"
                        onChangeText={(text: string) => setEmail(text)}
                        value={email}
                        returnKeyType="next"
                        onSubmitEditing={() => ref_input2.current?.focus()}
                        blurOnSubmit={false}
                    ></TextInput>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={Colors.light.gray[300]}
                        placeholder="Password"
                        onChangeText={(text: string) => setPassword(text)}
                        value={password}
                        secureTextEntry={true}
                        ref={ref_input2}
                    ></TextInput>
                    <TouchableOpacity style={styles.button} onPress={login}>
                        <Text
                            style={{
                                color: Colors.light.white[500],
                                fontSize: 16
                            }}
                        >
                            Entrar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonRegister}
                        onPress={register}
                    >
                        <Text
                            style={{
                                color: Colors.light.orange[500],
                                fontSize: 16
                            }}
                        >
                            Registrar
                        </Text>
                    </TouchableOpacity>

                    <Link
                        href="/(public)/register"
                        style={styles.forgotPassword}
                    >
                        Esqueci minha senha
                    </Link>
                </View>
                <View
                    style={{
                        gap: 12,
                        width: "100%",
                        position: "absolute",
                        bottom: 24
                    }}
                >
                    <Buttonfb />
                    <Buttongoogle />
                </View>
            </View> */
}
