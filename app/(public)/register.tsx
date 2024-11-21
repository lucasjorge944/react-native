import {
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import React, { useState } from "react";
import { ThemeProps, useTheme } from "../context/ThemeContext";
import Tokens from "@/constants/Tokens";
import { PalleteProps } from "@/constants/Pallete";
import Input from "../shared/components/Input";
import Button from "../shared/components/Button";
import { useAuth } from "../context/AuthContext";
import * as Haptics from "expo-haptics";
import ButtonIcon from "../shared/components/ButtonIcon";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const Register = () => {
    const router = useRouter();
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, onRegister } = useAuth();

    const login = async () => {
        const result = await onLogin!(email, password);
        if (result && result.error) {
            alert(result.msg);
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        } else {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }
    };

    const register = async () => {
        const result = await onRegister!(email, password);
        if (result && result.error) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
            alert(result.msg);
        } else {
            login();
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View
                style={{
                    position: "absolute",
                    top: 64,
                    left: Tokens.spacing[16]
                }}
            >
                <ButtonIcon
                    onPress={() => {
                        router.back();
                    }}
                >
                    <AntDesign name="arrowleft" size={24} />
                </ButtonIcon>
            </View>

            <Image
                source={require("@/assets/images/ftv-logo.webp")}
                style={styles.logo}
            />
            <View style={{ gap: Tokens.spacing[8] }}>
                <Text style={styles.description}>
                    Cadastre-se e ache as melhores quadras perto de você!
                </Text>
            </View>
            <View style={styles.form}>
                <Input
                    placeholder="Digite seu email"
                    onChangeText={(text: string) => setEmail(text)}
                    value={email}
                />
                <Input placeholder="Celular" />
                <Input
                    placeholder="Senha"
                    onChangeText={(text: string) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                />
                <Input
                    placeholder="Digite novamente sua senha"
                    secureTextEntry={true}
                />
            </View>

            <View
                style={{
                    flexDirection: "row"
                }}
            >
                <Button text="Cadastrar" onPress={register} />
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
            paddingHorizontal: Tokens.spacing[16],
            position: "relative"
        },
        description: {
            color: theme.textInfo,
            fontSize: Tokens.fontSize[14],
            fontWeight: "400",
            alignSelf: "center"
        },
        logo: {
            width: 110,
            height: 110,
            borderRadius: Tokens.borderRadius[16],
            alignSelf: "center"
        },
        form: {
            gap: Tokens.spacing[16]
        }
    });

export default Register;
